export type ApiResponse = {
  data?: {
    matches: Match[];
  };
  ok: boolean;
};

export type Match = {
  awayScore: number;
  awayTeam: Team;
  homeScore: number;
  homeTeam: Team;
  status: Status;
  time: Date;
  title: string;
};

export type Team = {
  name: string;
  place: number;
  players: Player[];
  points: number;
  total_kills: number;
};

export type Player = {
  username: string;
  kills: number;
};

export type SelectOption = {
  value: 'All' | Status;
  label: string;
};

export type Status = 'Scheduled' | 'Finished' | 'Ongoing';
