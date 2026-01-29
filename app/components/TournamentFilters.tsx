import { StatusType, TournamentFiltersType, TournamentsType } from '@/types/tournament';
import React, { useState } from 'react';

interface FilterProps {
  onFilterChange: (filters: TournamentFiltersType) => void;
}

const TournamentFilters: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<TournamentFiltersType>({
    type: 'All',
    status: 'All',
  });

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value as TournamentsType ;
    setFilters({ ...filters, type: newType });
    onFilterChange({ ...filters, type: newType });
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as StatusType ;
    setFilters({ ...filters, status: newStatus });
    onFilterChange({ ...filters, status: newStatus });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <div className="flex gap-3">
        <select
          className="border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white cursor-pointer transition"
          value={filters.status}
          onChange={handleStatusChange}
        >
          <option value="All">All Status</option>
          <option value="upcoming">Upcoming</option>
          <option value="live">Live</option>
        </select>

        <select
          className="border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white cursor-pointer transition"
          value={filters.type}
          onChange={handleTypeChange}
        >
          <option value="All">All Types</option>
          <option value="Blitz">Blitz</option>
          <option value="Rapid">Rapid</option>
          <option value="Classical">Classical</option>
        </select>
      </div>
    </div>
  );
};

export default TournamentFilters;
