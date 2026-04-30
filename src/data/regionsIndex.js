import balticStates from "./regions/baltic-states/index.js";
import westernBalkans from "./regions/western-balkans/index.js";

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
  }
};

export default regionsIndex;
