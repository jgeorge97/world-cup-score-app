import countrycodes from "@/country-codes.json" assert { type: "json" };

const countrycodemap = new Map<string, any>(Object.entries(countrycodes));
const flagurl = "https://flagcdn.com/w160/%s.png";

export default {
  getflag: (code: string) => {
    if (countrycodemap.get(code) !== undefined) {
      return flagurl.replace("%s", countrycodemap.get(code).a2.toLowerCase());
    }
    console.error(`Country not found: ${code}`);
    return "";
  },
};
