import regionsIndex from "./regionsIndex.js";

const requiredCountryFields = [
  "id",
  "region",
  "name",
  "capital",
  "sections",
  "migrationStatus"
];

export function validateRegionsData() {
  const issues = [];

  for (const regionId of Object.keys(regionsIndex)) {
    const region = regionsIndex[regionId];

    if (!region.id) {
      issues.push(`${regionId}: missing region id`);
    }

    if (!region.name || !region.name.he || !region.name.en) {
      issues.push(`${regionId}: missing bilingual region name`);
    }

    if (!Array.isArray(region.countries)) {
      issues.push(`${regionId}: countries must be an array`);
      continue;
    }

    for (const country of region.countries) {
      for (const field of requiredCountryFields) {
        if (!country[field]) {
          issues.push(`${regionId}/${country.id || "unknown"}: missing ${field}`);
        }
      }

      if (!country.name || !country.name.he || !country.name.en) {
        issues.push(`${regionId}/${country.id || "unknown"}: missing bilingual country name`);
      }

      if (!country.sections || typeof country.sections !== "object") {
        issues.push(`${regionId}/${country.id || "unknown"}: sections must be an object`);
      }
    }
  }

  return {
    isValid: issues.length === 0,
    issues
  };
}

export default validateRegionsData;
