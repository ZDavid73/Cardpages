import { useEffect, useState } from "react";
import { fetchTournaments, addTournament, addPlayerToTournament, finishTournament } from '../services/databaseService'; // Importamos desde databaseService
import { NewTournamentData, Player, Tournament } from "../types/tournamentTypes";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../types/stateType";
import { closeModal } from "../features/modalSlice";

export const useTournament = () => {
  const user = useSelector((state: AppState) => state.user);
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [createTourForm, setCreateTourForm] = useState<NewTournamentData | null>(null);
  const [addPlayerToTournamentForm, setAddPlayerToTournamentForm] = useState<Player | null>(null);
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

    console.log(createTourForm);
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

  const handleChangeAddPlayerToTournament = (data: string, form: string) => {
    console.log(data, form);
    console.log(addPlayerToTournamentForm);
    setAddPlayerToTournamentForm(
      (prev) => ({
        ...prev,
        [form]: data
      } as Player
    ))
  }

  const handleAddPlayer = async (tourId: string) => {

    console.log(addPlayerToTournamentForm);

    if ( !addPlayerToTournamentForm?.deck ) {
      console.error('Add player to tournament form data is missing');
      return;
    }

    const newPlayer = {
      ...addPlayerToTournamentForm,
      id: user.id,
    }

    const { error } = await addPlayerToTournament(tourId, newPlayer);

    if (error) {
      console.error('Error adding player to tournament in Supabase:', error.message);
    }
  }

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
    handleAddPlayer,
    handleChangeAddPlayerToTournament,
    handleFinishTournament,
    handleChangeCreateTourForm,
    startTournament
  };
};