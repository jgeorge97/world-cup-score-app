export type Match = {
  id: number;
  venue: string;
  location: string;
  status: string;
  stage_name: string;
  home_team_country: string;
  away_team_country: string;
  datetime: string;
  winner?: string;
  home_team: Team;
  away_team: Team;
  time: string;
  home_team_events: Event[];
  away_team_events: Event[];
  home_team_lineup: Lineup;
  away_team_lineup: Lineup;
  home_team_statistics: Statistics;
  away_team_statistics: Statistics;
};

type Team = {
  country: string;
  name: string;
  goals?: number;
  penalties?: number;
};

type Event = {
  id: number;
  type_of_event: string;
  player: string;
  time: string;
  extra_info: string;
};

type Player = {
  name: string;
  shirt_number: string;
  position: string;
};

type Lineup = {
  country: string;
  tactics: string;
  starting_eleven: Player[];
  substitutes: Player[];
};

type Statistics = {
  country: string;
  attempts_on_goal: number;
  attempts_on_goal_against: number;
  on_target: number;
  off_target: number;
  blocked: number;
  corners: number;
  offsides: number;
  num_passes: number;
  passes_completed: number;
  tackles: number;
  free_kicks: number;
  goal_kicks: number;
  penalties: number;
  penalties_scored: number;
  throw_ins: number;
  yellow_cards: number;
  red_cards: number;
  fouls_committed: number;
};

export type CountryFlag = {
  country_name: string;
  country_code: string;
  flag: string;
};
