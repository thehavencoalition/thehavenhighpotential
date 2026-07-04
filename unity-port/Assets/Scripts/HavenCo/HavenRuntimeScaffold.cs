using System;
using System.Collections.Generic;
using UnityEngine;

namespace HavenCo.HighSociety
{
    public enum RarityTier
    {
        Common,
        Uncommon,
        Rare,
        Exotic,
        Legendary,
        Signature
    }

    public enum TownDistrictType
    {
        Haven,
        Grow,
        Square,
        CityHall,
        Park,
        Delivery,
        Mural
    }

    [CreateAssetMenu(menuName = "The Haven Co/Strain Definition")]
    public sealed class StrainDefinition : ScriptableObject
    {
        public string strainId;
        public string displayName;
        public RarityTier rarity;
        public Color plantColor = Color.green;
        public float growTimeModifier;
        public int yieldBonus;
        public int priceBonus;
        public int vibeBonus;
        public int munchiesBonus;
    }

    [CreateAssetMenu(menuName = "The Haven Co/Upgrade Definition")]
    public sealed class UpgradeDefinition : ScriptableObject
    {
        public string upgradeId;
        public string displayName;
        public int baseCost = 40;
        public float costGrowth = 1.35f;
        public string npcName;
        public string storyGateLine;

        public int CostForLevel(int currentLevel)
        {
            return Mathf.RoundToInt(baseCost * Mathf.Pow(costGrowth, currentLevel));
        }
    }

    [CreateAssetMenu(menuName = "The Haven Co/Town District Definition")]
    public sealed class TownDistrictDefinition : ScriptableObject
    {
        public string districtId;
        public TownDistrictType districtType;
        public string displayName;
        public string actionLabel;
        public int baseActionCost = 40;
        [TextArea] public string description;
    }

    [Serializable]
    public sealed class CountEntry
    {
        public string key;
        public int value;
    }

    [Serializable]
    public sealed class PlantState
    {
        public string strainId;
        public bool planted;
        public bool ready;
        [Range(0f, 1f)] public float progress;
        [Range(0, 6)] public int visualStage;
    }

    [Serializable]
    public sealed class HavenSaveData
    {
        public int saveVersion = 1;
        public int money = 180;
        public int level = 1;
        public int reputation = 8;
        public float heat = 8f;
        public float vibe = 18f;
        public float munchies = 12f;
        public float favor;
        public string selectedStrainId = "blueDream";
        public List<string> unlockedStrainIds = new List<string>();
        public List<PlantState> plants = new List<PlantState>();
        public List<CountEntry> upgrades = new List<CountEntry>();
        public List<CountEntry> flowerByStrain = new List<CountEntry>();
        public List<CountEntry> counterByStrain = new List<CountEntry>();

        public int GetCount(List<CountEntry> table, string key)
        {
            CountEntry entry = table.Find(item => item.key == key);
            return entry != null ? entry.value : 0;
        }

        public void AddCount(List<CountEntry> table, string key, int amount)
        {
            if (string.IsNullOrWhiteSpace(key) || amount == 0) return;

            CountEntry entry = table.Find(item => item.key == key);
            if (entry == null)
            {
                table.Add(new CountEntry { key = key, value = Mathf.Max(0, amount) });
                return;
            }

            entry.value = Mathf.Max(0, entry.value + amount);
        }
    }

    public sealed class GameManager : MonoBehaviour
    {
        public HavenSaveData State { get; private set; } = new HavenSaveData();

        public event Action<HavenSaveData> StateChanged;

        public void ApplyState(HavenSaveData state)
        {
            State = state ?? new HavenSaveData();
            StateChanged?.Invoke(State);
        }

        public void NotifyChanged()
        {
            StateChanged?.Invoke(State);
        }
    }

    public sealed class EconomyManager : MonoBehaviour
    {
        [SerializeField] private GameManager game;

        public bool Spend(int amount)
        {
            if (game.State.money < amount) return false;
            game.State.money -= amount;
            game.NotifyChanged();
            return true;
        }

        public void Earn(int amount)
        {
            game.State.money += Mathf.Max(0, amount);
            game.NotifyChanged();
        }
    }

    public sealed class InventoryManager : MonoBehaviour
    {
        [SerializeField] private GameManager game;

        public void AddFlower(string strainId, int amount)
        {
            game.State.AddCount(game.State.flowerByStrain, strainId, amount);
            game.NotifyChanged();
        }

        public int StockCounter(string strainId, int amount)
        {
            int available = game.State.GetCount(game.State.flowerByStrain, strainId);
            int moved = Mathf.Clamp(amount, 0, available);
            if (moved <= 0) return 0;

            game.State.AddCount(game.State.flowerByStrain, strainId, -moved);
            game.State.AddCount(game.State.counterByStrain, strainId, moved);
            game.NotifyChanged();
            return moved;
        }
    }

    public sealed class PlantGrowthSystem : MonoBehaviour
    {
        [SerializeField] private GameManager game;
        [SerializeField] private InventoryManager inventory;
        [SerializeField] private List<StrainDefinition> strains = new List<StrainDefinition>();

        public void TickPlants(float deltaTime)
        {
            foreach (PlantState plant in game.State.plants)
            {
                if (!plant.planted || plant.ready) continue;

                StrainDefinition strain = strains.Find(item => item.strainId == plant.strainId);
                float growRate = 0.025f + (strain != null ? strain.growTimeModifier * 0.002f : 0f);
                plant.progress = Mathf.Clamp01(plant.progress + growRate * deltaTime);
                plant.visualStage = Mathf.Clamp(Mathf.FloorToInt(plant.progress * 7f), 0, 6);
                plant.ready = plant.progress >= 1f;
            }

            game.NotifyChanged();
        }

        public void HarvestReady()
        {
            foreach (PlantState plant in game.State.plants)
            {
                if (!plant.ready) continue;

                StrainDefinition strain = strains.Find(item => item.strainId == plant.strainId);
                int yield = 2 + (strain != null ? strain.yieldBonus : 0);
                inventory.AddFlower(plant.strainId, Mathf.Max(1, yield));

                plant.planted = false;
                plant.ready = false;
                plant.progress = 0f;
                plant.visualStage = 0;
            }

            game.NotifyChanged();
        }
    }

    public sealed class TownDistrictManager : MonoBehaviour
    {
        [SerializeField] private GameManager game;
        [SerializeField] private EconomyManager economy;

        public TownDistrictDefinition SelectedDistrict { get; private set; }

        public event Action<TownDistrictDefinition> DistrictSelected;
        public event Action<TownDistrictDefinition> DistrictActionCompleted;

        public void SelectDistrict(TownDistrictDefinition district)
        {
            SelectedDistrict = district;
            DistrictSelected?.Invoke(district);
        }

        public void RunSelectedDistrictAction()
        {
            if (SelectedDistrict == null) return;
            if (!economy.Spend(SelectedDistrict.baseActionCost)) return;

            switch (SelectedDistrict.districtType)
            {
                case TownDistrictType.Haven:
                    game.State.vibe = Mathf.Clamp(game.State.vibe + 4f, 0f, 100f);
                    game.State.heat = Mathf.Clamp(game.State.heat + 1.5f, 0f, 100f);
                    break;
                case TownDistrictType.CityHall:
                    game.State.heat = Mathf.Clamp(game.State.heat - 9f, 0f, 100f);
                    game.State.favor = Mathf.Clamp(game.State.favor + 4f, 0f, 100f);
                    break;
                case TownDistrictType.Park:
                    game.State.reputation += 2;
                    game.State.vibe = Mathf.Clamp(game.State.vibe + 4f, 0f, 100f);
                    game.State.heat = Mathf.Clamp(game.State.heat - 2f, 0f, 100f);
                    break;
                case TownDistrictType.Mural:
                    game.State.reputation += 2;
                    game.State.vibe = Mathf.Clamp(game.State.vibe + 7f, 0f, 100f);
                    break;
            }

            game.NotifyChanged();
            DistrictActionCompleted?.Invoke(SelectedDistrict);
        }
    }

    public sealed class SaveManager : MonoBehaviour
    {
        private const string SaveKey = "haven-high-society-unity-save";

        [SerializeField] private GameManager game;

        public void Save()
        {
            string json = JsonUtility.ToJson(game.State);
            PlayerPrefs.SetString(SaveKey, json);
            PlayerPrefs.Save();
        }

        public void Load()
        {
            if (!PlayerPrefs.HasKey(SaveKey)) return;
            HavenSaveData state = JsonUtility.FromJson<HavenSaveData>(PlayerPrefs.GetString(SaveKey));
            game.ApplyState(state);
        }
    }
}
