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
    throw new Error(`Error fetching tournament data: ${fetchError.message}`);
  }

  console.log(data);

  // Step 2: Append the new player to the existing players array
  const updatedPlayers = data.players ? [...data.players, player] : [player];

  console.log(updatedPlayers);

  // Step 3: Update the tournament record with the new players array
  const { error: updateError } = await supabase
    .from('tournaments')
    .update({ players: updatedPlayers })
    .eq('id', id);

  if (updateError) {
    throw new Error(`Error updating tournament data: ${updateError.message}`);
  }
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