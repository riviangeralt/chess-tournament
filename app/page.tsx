"use client";
import TournamentFilters from "@/components/TournamentFilters";
import TournamentTable from "@/components/TournamentTable";
import tournamentsData from "@/data/tournament.json";
import { Tournament, TournamentFiltersType } from "@/types/tournament";
import React, { useState } from "react";

const tournaments = tournamentsData as Tournament[];

const TournamentsPage: React.FC = () => {
  const [filters, setFilters] = useState<TournamentFiltersType>({
    type: "All",
    status: "All",
  });

  const filteredTournaments = tournaments
    .filter(
      (tournament: Tournament): boolean =>
        filters.status === "All" ||
        tournament.status.toLowerCase() === filters.status?.toLowerCase(),
    )
    .filter(
      (tournament: Tournament): boolean =>
        filters.type === "All" ||
        tournament.timeControl.toLowerCase() === filters.type?.toLowerCase(),
    );

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <TournamentFilters
        onFilterChange={(filters) => {
          setFilters(filters);
        }}
      />
      <TournamentTable tournaments={filteredTournaments} />
    </div>
  );
};

export default TournamentsPage;
