import { supabase } from './supabaseClient';
import { Deck } from '../types/deckTypes';
import { Round, Tournament } from '../types/tournamentTypes';

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
  return await supabase.from('tournaments').insert([tournament]);
};

export const removeTournament = async (id: string) => {
  return await supabase.from('tournaments').delete().eq('id', id);
};

export const addPlayerToTournament = async (id: string, players: string[]) => {
  return await supabase
    .from('tournaments')
    .update({ players })
    .eq('id', id);
};

export const finishTournament = async (id: string, rounds: Round[]) => {
  return await supabase
    .from('tournaments')
    .update({ status: 'finished', rounds })
    .eq('id', id);
};