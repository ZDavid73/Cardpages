import { supabase } from './supabaseClient';

/**
 * Guarda un enfrentamiento en la tabla `Matches` de Supabase
 */
export const saveMatch = async (
  tournamentId: string,
  roundIndex: number,
  matchIndex: number,
  players: string[],
  winner: string
) => {
  console.log('Saving match:', tournamentId, roundIndex, matchIndex, players, winner);
  const { data, error } = await supabase.from('Matches').insert([
    {
      tournament_id: tournamentId,
      round_index: roundIndex,
      match_index: matchIndex,
      players,
      winner,
    },
  ]);

  if (error) {
    console.error('Error saving match:', error);
    throw error;
  }

  return data;
};

/**
 * Recupera los enfrentamientos de un torneo desde Supabase
 */
export const getTournamentMatches = async (tournamentId: string) => {
  const { data, error } = await supabase
    .from('Matches')
    .select('*')
    .eq('tournament_id', tournamentId);

  if (error) {
    console.error('Error fetching matches:', error);
    throw error;
  }

  return data;
};
