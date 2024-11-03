import { supabase } from './supabaseClient';
import { Deck } from '../types/deckTypes';
import { Player, Round, Tournament } from '../types/tournamentTypes';
import { UserState } from '../features/auth/userSlice';

// Cards-related functions
export const fetchCards = async () => {
  return await supabase.from('cards').select('*');
};

export const sellCard = async (cardId: string, sellerId: string, price: number) => {
  return await supabase
    .from('cards')
    .insert([{ cardId, sellerId, price, isSold: false, buyerId: null }]);
};

export const buyCard = async (cardId: string, buyerId: string) => {
  return await supabase
    .from('cards')
    .update({ isSold: true, buyerId })
    .eq('cardId', cardId);
};

// Decks-related functions
export const postDeck = async (deck: Deck) => {
  return await supabase.from('decks').insert([deck]);
};

// Tournaments-related functions
export const fetchTournaments = async () => {
  return await supabase.from('tournaments').select('*');
};

export const addTournament = async (tournament: Tournament) => {
  console.log(tournament);
  return await supabase.from('tournaments').insert([tournament]);
};

export const removeTournament = async (id: string) => {
  return await supabase.from('tournaments').delete().eq('id', id);
};

export const addPlayerToTournament = async (id: string, player: Player) => {
  const { data, error: fetchError } = await supabase
  .from('tournaments')
  .select('players')
  .eq('id', id)
  .single();

  if (fetchError) {
    return { data: null, error: fetchError }; // Return early if fetch fails
  }

  // Add the new player to the players array
  const updatedPlayers = data.players ? [...data.players, player] : [player];

  // Update the tournament with the new players array
  const { error } = await supabase
  .from('tournaments')
  .update({ players: updatedPlayers })
  .eq('id', id);

  return { data: updatedPlayers, error }; // Return the response object with data and error
};

export const removePlayerFromTournament = async (id: string, playerId: string) => {
  const { data, error: fetchError } = await supabase
  .from('tournaments')
  .select('players')
  .eq('id', id)
  .single();

  if (fetchError) {
    return { data: null, error: fetchError }; // Return early if fetch fails
  }

  // Remove the player from the players array
  const updatedPlayers = data.players.filter((player: Player) => player.id !== playerId);

  // Update the tournament with the new players array
  const { error } = await supabase
  .from('tournaments')
  .update({ players: updatedPlayers })
  .eq('id', id);

  return { data: updatedPlayers, error }; // Return the response object with data and error
};

export const finishTournament = async (id: string, rounds: Round[]) => {
  return await supabase
    .from('tournaments')
    .update({ status: 'finished', rounds })
    .eq('id', id);
};

export const getUserInfo = async (userId: string) => {
  const user =  await supabase.from('users').select('*').eq('id', userId);

  if (user.data) {
    return user.data[0] as UserState;
  }
}