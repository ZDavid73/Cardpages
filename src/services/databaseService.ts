// services/databaseService.ts
import { supabase } from './supabaseClient';
import { Deck } from '../types/deckTypes';
import { Player, Tournament, Round } from '../types/tournamentTypes';
import { Card, SellingCard } from '../types/cardTypes';
import { User } from '../types/userTypes';

// Cards-related functions
export const fetchCards = async () => {
  return await supabase.from('cards').select('*');
};

export const sellCard = async (card: SellingCard) => {
  return await supabase.from('cards').insert([card]);
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
    return { data: null, error: fetchError };
  }

  const updatedPlayers = data.players ? [...data.players, player] : [player];
  const { error } = await supabase
    .from('tournaments')
    .update({ players: updatedPlayers })
    .eq('id', id);

  return { data: updatedPlayers, error };
};

export const removePlayerFromTournament = async (id: string, playerId: string) => {
  const { data, error: fetchError } = await supabase
    .from('tournaments')
    .select('players')
    .eq('id', id)
    .single();

  if (fetchError) {
    return { data: null, error: fetchError };
  }

  const updatedPlayers = data.players.filter((player: Player) => player.id !== playerId);
  const { error } = await supabase
    .from('tournaments')
    .update({ players: updatedPlayers })
    .eq('id', id);

  return { data: updatedPlayers, error };
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
};

export const getUserInfo = async (userId: string) => {
  const { data, error } = await supabase.from('users').select('*').eq('id', userId);

  if (error) {
    return null;
  }

  return data[0] as User;
};

export const uploadImage = async (file: File) => {
  const { data, error } = await supabase.storage.from('Decks').upload(String(Math.random()) + file.name, file);

  if (error) {
    return { data: null, error };
  }

  return { data, error: null };
};

export const fetchCart = async (userId: string) => {
  const { data, error } = await supabase.from('users').select('cart').eq('id', userId).single();

  if (error) {
    return { data: null, error };
  }

  return { data, error: null };
};

export const addCardToCart = async (cart: Card[], userId: string, card: SellingCard) => {
  const updatedCart = cart ? [...cart, card] : [card];

  const { data, error } = await supabase
    .from('users')
    .update({ cart: { cards: updatedCart } })
    .eq('id', userId);

  if (error) {
    return { data: null, error };
  }

  return { data, error: null };
};

export const addDeckToCart = async (cart: Deck[], userId: string, deck: Deck) => {
  const updatedCart = cart ? [...cart, deck] : [deck];

  const { data, error } = await supabase
    .from('users')
    .update({ cart: { decks: updatedCart } })
    .eq('id', userId);

  if (error) {
    return { data: null, error };
  }

  return { data, error: null };
};

export const updateUserSupa = async (user: User) => {
  const { data, error } = await supabase
    .from('users')
    .update(user)
    .eq('id', user.id);

  if (error) {
    return { data: null, error };
  }

  return { data, error: null };
};

export const saveTournamentRounds = async (tournamentId: string, rounds: Round[]) => {
  const { data, error } = await supabase
    .from('tournaments')
    .update({ rounds })
    .eq('id', tournamentId);

  if (error) {
    console.error('Error saving tournament rounds:', error);
    return { data: null, error };
  }

  return { data, error: null };
};