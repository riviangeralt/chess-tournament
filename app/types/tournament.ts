export type TournamentStatus = 'upcoming' | 'live';

export interface Tournament {
  id: string;
  name: string;
  timeControl: 'Blitz' | 'Rapid' | 'Classical';
  startTime: string;
  playersJoined: number;
  maxPlayers: number;
  status: TournamentStatus;
}


export interface TournamentFiltersType {
  type?: TournamentsType ;
  status?: StatusType;
}

export type TournamentsType = "Blitz" | "Rapid" | "Classical" | 'All';
export type StatusType = "upcoming" | "live" | 'All';

