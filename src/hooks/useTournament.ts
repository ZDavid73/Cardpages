import { useEffect, useState } from "react";
import { MatchPlayers, NewTournamentData, Tournament } from "../types/tournamentTypes";

export const useTournament = () => {
    const [tournaments, setTournaments] = useState<Tournament[]>([]);

    useEffect(() => {
      const fetchTournaments = async () => {
        const { data, error } = await supabase.from('tournaments').select('*');
        if (error) {
          console.error('Error fetching tournaments:', error.message);
        } else {
          setTournaments(data || []);
        }
      };
      
      fetchTournaments();
    }, []);
  
    const addTournament = async ({ name, date, location, host }: NewTournamentData): Promise<void> => {
      const newTournament: Tournament = {
        id: crypto.randomUUID(), 
        name,
        date,
        location,
        host,
        status: 'upcoming', 
        players: [],
        rounds: [] 
      };

      setTournaments(p => [...p, newTournament]);
  
      const { error } = await supabase.from('tournaments').insert([newTournament]);
  
      if (error) {
        console.error('Error adding tournament to Supabase:', error.message);
      }
    };
  
    const removeTournament = async (id: string): Promise<void> => {
      setTournaments(p => p.filter(t => t.id !== id));
  
      const { error } = await supabase.from('tournaments').delete().eq('id', id);
  
      if (error) {
        console.error('Error removing tournament from Supabase:', error.message);
      }
    };
  
    const addPlayerToTournament = async (id: string, player: string): Promise<void> => {
      setTournaments(p =>
        p.map(t => {
          if (t.id === id) {
            return { ...t, players: [...t.players, player] };
          }
          return t;
        })
      );
  
      const tournament = tournaments.find(t => t.id === id);
      if (tournament) {
        const { error } = await supabase
          .from('tournaments')
          .update({ players: [...tournament.players, player] })
          .eq('id', id);
  
        if (error) {
          console.error('Error adding player to Supabase:', error.message);
        }
      }
    };
  
    const setFirstRoundMatches = (id: string, firstMatches: MatchPlayers[]) => {
      setTournaments(p =>
        p.map(t => {
          if (t.id === id) {
            return {
              ...t,
              rounds: [
                {
                  id: 1,
                  matches: firstMatches.map((m, i) => ({
                    id: `${t.id}-1-${i}`,
                    player1: m.player1,
                    player2: m.player2,
                    winner: ''
                  }))
                }
              ]
            };
          }
          return t;
        })
      );
    };
  
    const setMatchWinner = (tournamentId: string, roundId: number, matchId: string, winner: string) => {
      setTournaments(p =>
        p.map(t => {
          if (t.id === tournamentId) {
            return {
              ...t,
              rounds: t.rounds.map(r => {
                if (r.id === roundId) {
                  return {
                    ...r,
                    matches: r.matches.map(m => {
                      if (m.id === matchId) {
                        return { ...m, winner };
                      }
                      return m;
                    })
                  };
                }
                return r;
              })
            };
          }
          return t;
        })
      );
    };
  
    const finishTournament = async (tournamentId: string): Promise<void> => {
      setTournaments(p =>
        p.map(t => {
          if (t.id === tournamentId) {
            return { ...t, status: 'finished' };
          }
          return t;
        })
      );
  
      const tournament = tournaments.find(t => t.id === tournamentId);
      if (tournament) {
        const { error } = await supabase
          .from('tournaments')
          .update({ status: 'finished', rounds: tournament.rounds })
          .eq('id', tournamentId);
  
        if (error) {
          console.error('Error finishing tournament in Supabase:', error.message);
        }
      }
    };
  
    return {
      tournaments,
      addTournament,
      removeTournament,
      addPlayerToTournament,
      setFirstRoundMatches,
      setMatchWinner,
      finishTournament
    };
};