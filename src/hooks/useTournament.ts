import { useEffect, useState } from "react";
import { addTournament, addPlayerToTournament, removePlayerFromTournament, finishTournament, levelUpPlayer } from '../services/databaseService'; // Importamos desde databaseService
import { NewTournamentData, Player, Tournament } from "../types/tournamentTypes";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../types/stateType";
import { closeModal } from "../features/modalSlice";
import { getRandomImg } from "../utils/images";

export const useTimer = (targetDate: string, targetTime: string) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate, targetTime));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate, targetTime));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate, targetTime]);

  function calculateTimeLeft(date: string, time: string) {
    const targetDateTimeString = `${date}T${time}:00`;
    const targetTime = new Date(targetDateTimeString).getTime();
    const now = new Date().getTime();
    const difference = targetTime - now;

    if (difference <= 0) return null;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return {timeLeft};
}

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
      picture: getRandomImg().image,
      host: user.id,
      status: 'upcoming',
      players: [],
      rounds: [],
      winner: '',
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

  const handleRemovePlayer = async (tourId: string) => {
    const { error } = await removePlayerFromTournament(tourId, user.id);

    if (error) {
      console.error('Error removing player from tournament in Supabase:', error.message);
    }

    dispatch(closeModal());
  }

  const handleFinishTournament = async (id: string, winner: string, winnerId: string) => {
    const { error } = await finishTournament(id, winner);
    if (error) {
      console.error('Error finishing tournament in Supabase:', error.message);
    }
    handleLevelUp(winnerId);
  }

  const handleLevelUp = async (id: string) => {
    const response = await levelUpPlayer(id);

    if (response?.error) {
      console.error('Error leveling up player in Supabase:', response.error.message);
    }
  }


  return {
    handleAddTournament,
    handleAddPlayer,
    handleRemovePlayer,
    handleChangeAddPlayerToTournament,
    handleChangeCreateTourForm,
    handleFinishTournament,
  };
}