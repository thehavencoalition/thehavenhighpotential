# The Haven Co Unity Port Scaffold

This folder is a starter handoff for a future Unity version of the browser prototype.

Unity is not currently installed on this machine, so this is not a generated Unity project or compiled player yet. It is a Unity-style script scaffold that maps the working browser systems into a structure that can be dropped into a real Unity project later.

## Target Unity Setup

- Unity 6 LTS or a current supported LTS editor.
- 2D URP or 3D URP depending on whether the first scene is sprite-isometric or low-poly diorama.
- UI Toolkit for HUD, management cards, quest panels, and cutscene dialogue.
- ScriptableObjects for balance/design data.
- Prefabs for customers, staff, plant slots, room objects, town districts, UI cards, and currency effects.

## First Scene

Create a scene named `HavenTownPrototype` with:

- `GameManager`
- `EconomyManager`
- `InventoryManager`
- `PlantGrowthSystem`
- `TownDistrictManager`
- `QuestManager`
- `SaveManager`
- `UIManager`

Then create ScriptableObject assets for:

- `StrainDefinition`
- `UpgradeDefinition`
- `TownDistrictDefinition`
- `QuestDefinition`
- `CustomerArchetypeDefinition`

The first Unity goal is feature parity with the browser loop:

1. Select a strain.
2. Plant and grow rows.
3. Harvest and stock the Haven bar.
4. Serve customers.
5. Run town district actions.
6. Progress quests and fifth-upgrade story gates.

