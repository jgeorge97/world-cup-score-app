import type { CountryFlag } from "./types";

const countries: CountryFlag[] = [
  { country_name: "Argentina", country_code: "ARG", flag: "🇦🇷" },
  { country_name: "Australia", country_code: "AUS", flag: "🇦🇺" },
  { country_name: "Belgium", country_code: "BEL", flag: "🇧🇪" },
  { country_name: "Brazil", country_code: "BRA", flag: "🇧🇷" },
  { country_name: "Cameroon", country_code: "CMR", flag: "🇨🇲" },
  { country_name: "Canada", country_code: "CAN", flag: "🇨🇦" },
  { country_name: "Costa Rica", country_code: "CRC", flag: "🇨🇷" },
  { country_name: "Croatia", country_code: "CRO", flag: "🇭🇷" },
  { country_name: "Denmark", country_code: "DEN", flag: "🇩🇰" },
  { country_name: "Ecuador", country_code: "ECU", flag: "🇪🇨" },
  { country_name: "England", country_code: "ENG", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { country_name: "France", country_code: "FRA", flag: "🇫🇷" },
  { country_name: "Germany", country_code: "GER", flag: "🇩🇪" },
  { country_name: "Ghana", country_code: "GHA", flag: "🇬🇭" },
  { country_name: "Iran", country_code: "IRN", flag: "🇮🇷" },
  { country_name: "Japan", country_code: "JPN", flag: "🇯🇵" },
  { country_name: "Korea Republic", country_code: "KOR", flag: "🇰🇷" },
  { country_name: "Mexico", country_code: "MEX", flag: "🇲🇽" },
  { country_name: "Morocco", country_code: "MAR", flag: "🇲🇦" },
  { country_name: "Netherlands", country_code: "NED", flag: "🇳🇱" },
  { country_name: "Poland", country_code: "POL", flag: "🇵🇱" },
  { country_name: "Portugal", country_code: "POR", flag: "🇵🇹" },
  { country_name: "Qatar", country_code: "QAT", flag: "🇶🇦" },
  { country_name: "Saudi Arabia", country_code: "KSA", flag: "🇸🇦" },
  { country_name: "Senegal", country_code: "SEN", flag: "🇸🇳" },
  { country_name: "Serbia", country_code: "SRB", flag: "🇷🇸" },
  { country_name: "Spain", country_code: "ESP", flag: "🇪🇸" },
  { country_name: "Switzerland", country_code: "SUI", flag: "🇨🇭" },
  { country_name: "Tunisia", country_code: "TUN", flag: "🇹🇳" },
  { country_name: "United States", country_code: "USA", flag: "🇺🇸" },
  { country_name: "Uruguay", country_code: "URU", flag: "🇺🇾" },
  { country_name: "Wales", country_code: "WAL", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿" },
];

export function getFlag(code: string) {
  return countries.find((el) => el.country_code === code);
}
