# Nations Atlas Data Structure

This folder contains the new structured data layer for the Nations Atlas project.

## Purpose

The goal is to separate country information from the visual HTML pages.
Each country should have its own file, and countries should be grouped by region.

## Folder structure

```text
src/data/
├── regionsIndex.js
└── regions/
    └── baltic-states/
        ├── estonia.js
        ├── latvia.js
        ├── lithuania.js
        └── index.js
```

## Country file pattern

Each country file should export one default object.

Recommended fields:

```js
const country = {
  id: "country-id",
  region: "region-id",
  name: {
    he: "שם המדינה בעברית",
    en: "Country name in English"
  },
  englishName: "Country name",
  officialName: {
    he: "שם רשמי בעברית",
    en: "Official English name"
  },
  flag: "flag-url-or-local-path",
  capital: {
    name: {
      he: "שם הבירה בעברית",
      en: "Capital name in English"
    },
    englishName: "Capital name",
    foundingYear: {
      he: "שנת ייסוד בעברית",
      en: "Founding year in English"
    },
    etymology: {
      he: "אטימולוגיה בעברית",
      en: "Etymology in English"
    },
    selectionReason: {
      he: "הסיבה לבחירת הבירה בעברית",
      en: "Reason for capital selection in English"
    }
  },
  population: "~0,000,000",
  area: {
    he: "~0,000 קמ״ר",
    en: "~0,000 sq km"
  },
  currency: {
    he: "מטבע בעברית",
    en: "Currency in English"
  },
  sections: {
    geography: {},
    demographics: {},
    history: {},
    etymology: {},
    symbols: {},
    leader: {},
    cartography: {}
  },
  sourceHtml: "regions/source-file.html",
  migrationStatus: "expanded-country-profile"
};

export default country;
```

## Migration status values

- `starter-file` - only minimal fields exist.
- `basic-fields-extracted` - basic fields such as official name, flag, population, area and currency were added.
- `sections-added` - the main content sections were added.
- `expanded-country-profile` - the country has a fuller bilingual profile ready for later UI integration.

## Current migration status

The Baltic States region has been started in the new structure:

- Estonia: expanded country profile
- Latvia: expanded country profile
- Lithuania: expanded country profile

The existing HTML pages still remain active. This data layer is currently safe and parallel to the old pages.
