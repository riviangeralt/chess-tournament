import { Tournament } from "@/types/tournament";
import React from "react";

interface TournamentRowProps {
  tournament: Tournament;
}

const TournamentRow: React.FC<TournamentRowProps> = ({ tournament }) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <tr className="hover:bg-blue-50 transition-colors">
      <td className="px-6 py-4">
        <a
          href={tournament.id.toString()}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
        >
          {tournament.name}
        </a>
      </td>
      <td className="px-6 py-4 text-gray-700">
        {tournament.playersJoined}/{tournament.maxPlayers}
      </td>
      <td className="px-6 py-4 text-gray-700">
        {formatDate(tournament.startTime)}
      </td>
      <td className="px-6 py-4">
        <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
          {tournament.timeControl}
        </span>
      </td>
      <td className="px-6 py-4">
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
          tournament.status === 'live' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
        }`}>
          {tournament.status.charAt(0).toUpperCase() + tournament.status.slice(1)}
        </span>
      </td>
      <td className="px-6 py-4">
        <button
          disabled={tournament.playersJoined >= tournament.maxPlayers}
          className="px-4 py-2 rounded-lg font-medium transition-colors disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed bg-blue-600 hover:bg-blue-700 text-white"
        >
          {tournament.playersJoined >= tournament.maxPlayers ? 'Full' : 'Join Tournament'}
        </button>
      </td>
    </tr>
  );
};

export default TournamentRow;
