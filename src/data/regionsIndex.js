import balticStates from "./regions/baltic-states/index.js";
import westernBalkans from "./regions/western-balkans/index.js";
import easternSouthernBalkans from "./regions/eastern-southern-balkans/index.js";
import caucasus from "./regions/caucasus/index.js";
import slavicNations from "./regions/slavic-nations/index.js";
import germanicNations from "./regions/germanic-nations/index.js";

const regionsIndex = {
  "baltic-states": {
    id: "baltic-states",
    name: {
      he: "המדינות הבלטיות",
      en: "Baltic States"
    },
    countries: balticStates
  },
  "western-balkans": {
    id: "western-balkans",
    name: {
      he: "הבלקן המערבי",
      en: "Western Balkans"
    },
    countries: westernBalkans
  },
  "eastern-southern-balkans": {
    id: "eastern-southern-balkans",
    name: {
      he: "הבלקן המזרחי והדרומי",
      en: "Eastern and Southern Balkans"
    },
    countries: easternSouthernBalkans
  },
  "caucasus": {
    id: "caucasus",
    name: {
      he: "הקווקז",
      en: "Caucasus"
    },
    countries: caucasus
  },
  "slavic-nations": {
    id: "slavic-nations",
    name: {
      he: "המדינות הסלאביות",
      en: "Slavic Nations"
    },
    countries: slavicNations
  },
  "germanic-nations": {
    id: "germanic-nations",
    name: {
      he: "המדינות הגרמאניות",
      en: "Germanic Nations"
    },
    countries: germanicNations
  }
};

export default regionsIndex;
