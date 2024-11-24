/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { supabase } from '../../services/supabaseClient';
import { insertTourData, deleteTourData, fetchAllTournaments, updateTourData } from '../../features/tournamentSlice';
import { AppDispatch } from '../../store/store';
import { RealtimePostgresChangesPayload } from '@supabase/supabase-js';
import { deleteCardData, insertCardData, updateCardData } from '../../features/cardSlice';
import { fetchAllCards } from '../../features/cardSlice';
import { deleteDeckData, fetchAllDecks, insertDeckData, updateDeckData } from '../../features/deckSlice';
import { setCart } from '../../features/cartSlice';
import { updateUser } from '../../features/auth/userSlice';

const DataSync = () => {
  const dispatch: AppDispatch = useDispatch();
  const userId = useSelector((state: any) => state.user.id);

  useEffect(() => {
    const subscriptionUser = supabase
      .channel('users')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'users', filter: `id=eq.${userId}` },
        (payload) => {
          handleChangeUser(payload);
        }
      )
      .subscribe();

    return () => {
      subscriptionUser.unsubscribe();
    };
  }, []);

  useEffect(() => {

    dispatch(fetchAllTournaments())

    const subscriptionTour = supabase
    .channel('tournaments')
    .on(
        'postgres_changes', 
        { event: '*', schema: 'public', table: 'tournaments' },
        (payload) => {
          handleChangeTournament(payload);
        }
    )
    .subscribe();

    return () => {
        subscriptionTour.unsubscribe();
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAllCards());

    const subscriptionCard = supabase
    .channel('cards')
    .on(
        'postgres_changes', 
        { event: '*', schema: 'public', table: 'cards' },
        (payload) => {
          handleChangeCard(payload);
        }
    )
    .subscribe();

    return () => {
        subscriptionCard.unsubscribe();
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAllDecks());

    const subsDeck = supabase
    .channel('decks')
    .on(
        'postgres_changes', 
        { event: '*', schema: 'public', table: 'decks' },
        (payload) => {
          handleChangeDeck(payload);
        }
    )
    .subscribe();

    return () => {
      subsDeck.unsubscribe();
    }
  }, [dispatch]);

  const handleChangeDeck = (payload: RealtimePostgresChangesPayload<{[key: string]: any;}>) => {
    if (payload.eventType === 'INSERT') {
      dispatch(insertDeckData(payload.new))
    }
    if (payload.eventType === 'UPDATE') {
      dispatch(updateDeckData(payload.new))
    }
    if (payload.eventType === 'DELETE') {
      dispatch(deleteDeckData(payload.old))
  }}

  const handleChangeCard = (payload: RealtimePostgresChangesPayload<{[key: string]: any;}>) => {
    if (payload.eventType === 'INSERT') {
      dispatch(insertCardData(payload.new))
    }
    if (payload.eventType === 'UPDATE') {
      dispatch(updateCardData(payload.new))
    }
    if (payload.eventType === 'DELETE') {
      dispatch(deleteCardData(payload.old))
    }
  }
  const handleChangeTournament = (payload: RealtimePostgresChangesPayload<{[key: string]: any;}>) => {
    if (payload.eventType === 'INSERT') {
      dispatch(insertTourData(payload.new))
    }
    if (payload.eventType === 'UPDATE') {
      dispatch(updateTourData(payload.new))
    }
    if (payload.eventType === 'DELETE') {
      dispatch(deleteTourData(payload.old))
    }
  }

  const handleChangeUser = (payload: RealtimePostgresChangesPayload<{[key: string]: any;}>) => {
    if (payload.eventType === 'UPDATE'){
      if (payload.new.cart !== payload.old.cart) {
        console.log('Cart property changed:', payload.new.cart);
        dispatch(setCart(payload.new.cart));
      } else {
        console.log('Other property changed');
        dispatch(updateUser(payload.new));
      }
    }
  }

  return null;
};

export default DataSync;
