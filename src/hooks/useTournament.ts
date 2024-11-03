import { useState } from "react";
import { addTournament, addPlayerToTournament } from '../services/databaseService'; // Importamos desde databaseService
import { NewTournamentData, Player, Tournament } from "../types/tournamentTypes";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../types/stateType";
import { closeModal } from "../features/modalSlice";

export const useTournament = () => {
  const user = useSelector((state: AppState) => state.user);
  const [createTourForm, setCreateTourForm] = useState<NewTournamentData | null>(null);
  const [addPlayerToTournamentForm, setAddPlayerToTournamentForm] = useState<Player | null>(null);
  const dispatch = useDispatch();

  const handleChangeCreateTourForm = (data:string, form: string) => {
    setCreateTourForm(
      (prev) => ({
        ...prev,
        [form]: data
      } as NewTournamentData
    ))
  }

  const handleAddTournament = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
    e.preventDefault();

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
    setAddPlayerToTournamentForm(
      (prev) => ({
        ...prev,
        [form]: data
      } as Player
    ))
  }

  const handleAddPlayer = async (tourId: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

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

    dispatch(closeModal());
  }

  return {
    handleAddTournament,
    handleAddPlayer,
    handleChangeAddPlayerToTournament,
    handleChangeCreateTourForm,
  };
};