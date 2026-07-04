# Technical Audit and Unity Comparison

Date: 2026-07-04

## Current Prototype Health

- JavaScript syntax check passes with `node --check game.js`.
- All `document.getElementById(...)` references in `game.js` resolve to matching elements in `index.html`.
- Git whitespace check passes with `git diff --check`.
- Working tree was clean before this audit package was added.
- Unity Editor/Unity Hub was not found on the command path or in the common Windows install locations, so a native Unity player build cannot be produced on this machine yet.

## Open-Source Reference Takeaways

The Haven Co is still a browser prototype, but its systems line up well with proven management-game patterns:

- OpenRCT2 keeps a large construction/management sim organized around clear domain folders, data, tests, scripts, and source separation. For The Haven, that supports keeping grow, customer, economy, quest, and town systems isolated instead of letting one file become the whole game.
- OpenTTD shows why a business sim benefits from long-term loops, moddable/add-on thinking, stable data formats, and deep simulation rules. For The Haven, this points toward data-driven strains, rooms, quests, town districts, and customer archetypes.
- Unity Open Project #1 demonstrates Unity project organization at production scale: conventions, documented contribution flow, project folders, and a playable release path.
- Unity's ScriptableObject sample project demonstrates data containers, event channels, delegate objects, runtime sets, and designer-friendly data. That is the best fit for The Haven's strain cards, upgrade cards, quest definitions, town districts, customer archetypes, and event definitions.

## Unity Direction

When Unity is installed, the browser prototype should port into Unity as:

- ScriptableObjects for static data: strains, upgrades, rooms, quests, town districts, characters, events, and customer archetypes.
- MonoBehaviour managers for runtime orchestration: `GameManager`, `EconomyManager`, `PlantGrowthSystem`, `InventoryManager`, `TownDistrictManager`, `QuestManager`, `CustomerSpawner`, `CustomerAI`, `LegalHeatManager`, `SaveManager`, and `UIManager`.
- Prefabs for repeated visible entities: plant slots, customers, employees, room stations, town district markers, UI cards, cutscene characters, and floating currency effects.
- Event channels for decoupling systems: money changed, inventory changed, quest progressed, heat changed, district selected, plant ready, product sold, and cutscene requested.
- Runtime save data separated from authoring data: ScriptableObjects remain read-only balance data in builds; JSON save files hold player progress.

## Architecture Risks to Fix Before a Full Unity Port

- `game.js` is feature-rich but too large for long-term development. The next browser cleanup should split it into modules by system.
- Most definitions already behave like ScriptableObject data, but they still live inside code. Move these to JSON first, then ScriptableObjects later.
- UI and simulation update together in the same loop. Unity should separate simulation events from UI rendering.
- Save migration exists, which is good, but future versions should add named migration functions for each save version.

## Recommended Next Build Step

Keep the browser version playable while building a Unity-ready data layer:

1. Extract strains, upgrades, quests, town districts, and characters into `/data/*.json`.
2. Refactor browser managers around those data files.
3. Mirror the data into Unity ScriptableObject importers.
4. Build the first Unity scene once Unity Hub and an editor version are installed.

## Sources Reviewed

- Unity Open Project #1: https://github.com/UnityTechnologies/open-project-1
- Unity ScriptableObjects Paddle Ball sample: https://github.com/UnityTechnologies/PaddleGameSO
- OpenRCT2: https://github.com/OpenRCT2/OpenRCT2
- OpenTTD: https://github.com/OpenTTD/OpenTTD
- Unity ScriptableObject manual: https://docs.unity3d.com/Manual/class-ScriptableObject.html
- Unity Prefabs manual: https://docs.unity3d.com/Manual/Prefabs.html
- Unity UI Toolkit manual: https://docs.unity3d.com/Manual/UIElements.html
