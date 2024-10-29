import { useEffect, useState } from "react";
import { fetchTournaments, addTournament, removeTournament, addPlayerToTournament, finishTournament } from '../services/databaseService'; // Importamos desde databaseService
import { NewTournamentData, Tournament } from "../types/tournamentTypes";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../types/stateType";
import { closeModal } from "../features/modalSlice";

export const useTournament = () => {
  const user = useSelector((state: AppState) => state.user);
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [createTourForm, setCreateTourForm] = useState<NewTournamentData | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllTournaments = async () => {
      const { data, error } = await fetchTournaments();
      if (error) {
        console.error('Error fetching tournaments:', error.message);
      } else {
        setTournaments(data || []);
      }
    };
    
    fetchAllTournaments();
  }, []);

  const handleChangeCreateTourForm = (data:string, form: string) => {
    setCreateTourForm(
      (prev) => ({
        ...prev,
        [form]: data
      } as NewTournamentData
    ))
  }

  const handleAddTournament = async (): Promise<void> => {
    if (!createTourForm) {
      console.error('Create tournament form data is missing');
      return;
    }

    const newTournament: Tournament = {
      ...createTourForm,
      id: crypto.randomUUID(),
      picture: 'https://i.blogs.es/82d7ef/pokemon/450_1000.webp',
      host: user.id,
      status: 'upcoming',
      players: [],
      rounds: [],
    };

    const { error } = await addTournament(newTournament);
    if (error) {
      console.error('Error adding tournament to Supabase:', error.message);
    }

    dispatch(closeModal());
  };

  const handleRemoveTournament = async (id: string): Promise<void> => {
    setTournaments((prev) => prev.filter((t) => t.id !== id));

    const { error } = await removeTournament(id); // Asegúrate de que removeTournament devuelve { error: Error | null }
    if (error) {
      console.error('Error removing tournament from Supabase:', error.message);
    }
  };

  const handleAddPlayerToTournament = async (id: string, player: string): Promise<void> => {
    setTournaments((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          return { ...t, players: [...t.players, player] };
        }
        return t;
      })
    );

    const tournament = tournaments.find((t) => t.id === id);
    if (tournament) {
      const { error } = await addPlayerToTournament(id, [...tournament.players, player]); // Asegúrate de que addPlayerToTournament devuelve { error: Error | null }
      if (error) {
        console.error('Error adding player to Supabase:', error.message);
      }
    }
  };

  const handleFinishTournament = async (tournamentId: string): Promise<void> => {
    setTournaments((prev) =>
      prev.map((t) => {
        if (t.id === tournamentId) {
          return { ...t, status: 'finished' };
        }
        return t;
      })
    );

    const tournament = tournaments.find((t) => t.id === tournamentId);
    if (tournament) {
          const { error } = await finishTournament(tournamentId, tournament.rounds); // Asegúrate de que finishTournament devuelve { error: Error | null }
      if (error) {
        console.error('Error finishing tournament in Supabase:', error.message);
      }
    }
  };

  const startTournament = () => {
    
  }

  return {
    tournaments,
    handleAddTournament,
    handleRemoveTournament,
    handleAddPlayerToTournament,
    handleFinishTournament,
    handleChangeCreateTourForm,
    startTournament
  };
};