import { supabase } from './supabaseClient';
import {Deck} from '../types/deckTypes';
import { Player, Tournament } from '../types/tournamentTypes';
import { SellingCard } from '../types/cardTypes';
import { User } from '../types/userTypes';

// Cards-related functions
export const fetchCards = async () => {
  return await supabase.from('cards').select('*');
};

export const sellCard = async (card: SellingCard) => {
  console.log(card);

  return await supabase.from('cards').insert([ card ]);
};

export const buyCard = async (cardId: string, buyerId: string) => {
  return await supabase
    .from('cards')
    .update({ isSold: true, buyerId })
    .eq('cardId', cardId);
};

export const fetchDecks = async (): Promise<Deck[]> => {
  const { data, error } = await supabase.from('decks').select('*');

  if (error) {
    console.error("Error fetching decks:", error);
    return [];
  }


  // Aquí aseguramos que data es un arreglo de Decks
  return data as Deck[];
};

export const postDeck = async (deck: Deck) => {
  return await supabase.from('decks').insert([deck]);
};

// Tournaments-related functions
export const fetchTournaments = async () => {
  return await supabase.from('tournaments').select('*');
};

export const addTournament = async (tournament: Tournament) => {
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

export const finishTournament = async (id: string, winner: string) => {
  return await supabase
  .from('tournaments')
  .update({ status: 'finished', winner })
  .eq('id', id);
};

export const levelUpPlayer = async (userId: string) => {
  const { data: currentData } = await supabase
  .from('users')
  .select('level')
  .eq('id', userId)
  .single();

  if (currentData) {
    const newLevel: number = currentData.level + 1;
    const { data, error } = await supabase
      .from('users')
      .update({ level: newLevel })
      .eq('id', userId);

    if (error) {
      return { data: null, error };
    }

    return { data, error: null };
  }
}

export const getUserInfo = async (userId: string) => {
  const user =  await supabase.from('users').select('*').eq('id', userId);

  if (user.data) {
    return user.data[0] as User;
  }
}

export const uploadImage = async (file: File) => {
  const { data, error } = await supabase.storage.from('Decks').upload(String(Math.random())+file.name, file);

  if (error) {
    return { data: null, error };
  }

  return { data, error: null };
}

export const fetchCart = async (userId: string) => {
  const { data, error } = await supabase.from('users').select('cart').eq('id', userId).single();

  if (error) {
    return { data: null, error };
  }

  return { data, error: null };
}

export const addCardToCart = async (userId: string, card: SellingCard) => {
  const { data, error } = await supabase
  .from('users')
  .update({ cart: { cards: [card] } })
  .eq('id', userId);

  if (error) {
    return { data: null, error };
  }

  return { data, error: null };
}

export const addDeckToCart = async (userId: string, deck: Deck) => {
  const { data, error } = await supabase
  .from('users')
  .update({ cart: { decks: [deck] } })
  .eq('id', userId);

  if (error) {
    return { data: null, error };
  }

  return { data, error: null };
}