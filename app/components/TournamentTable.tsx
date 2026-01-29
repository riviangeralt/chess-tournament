import { Tournament } from "@/types/tournament";
import React from "react";
import TournamentRow from "./TournamentRow";

interface TournamentTableProps {
  tournaments: Tournament[];
}

const TournamentTable: React.FC<TournamentTableProps> = ({ tournaments }) => {
  return (
    <div className="overflow-x-auto shadow-lg rounded-lg">
      <table className="w-full">
        <thead>
          <tr className="bg-linear-to-r from-blue-600 to-blue-700 text-white">
            <th className="px-6 py-4 text-left font-semibold">Name</th>
            <th className="px-6 py-4 text-left font-semibold">Players</th>
            <th className="px-6 py-4 text-left font-semibold">Start Time</th>
            <th className="px-6 py-4 text-left font-semibold">Time Control</th>
            <th className="px-6 py-4 text-left font-semibold">Status</th>
            <th className="px-6 py-4 text-left font-semibold">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {tournaments.length === 0 ? (
            <tr>
              <td colSpan={6} className="text-center py-8 text-gray-500">
                No tournaments found.
              </td>
            </tr>
          ) : (
            tournaments.map((tournament) => (
              <TournamentRow key={tournament.id} tournament={tournament} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TournamentTable;
