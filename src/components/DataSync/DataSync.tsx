/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { supabase } from '../../services/supabaseClient';
import { insertTourData, deleteTourData, fetchAllTournaments, updateTourData } from '../../features/tournamentSlice';
import { AppDispatch } from '../../store/store';
import { RealtimePostgresChangesPayload } from '@supabase/supabase-js';
import { deleteCardData, insertCardData, updateCardData } from '../../features/cardSlice';
import { fetchAllCards } from '../../features/cardSlice';
import { deleteDeckData, fetchAllDecks, insertDeckData, updateDeckData } from '../../features/deckSlice';

const DataSync = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchAllTournaments())

    const subscriptionTour = supabase
    .channel('tournaments')
    .on(
        'postgres_changes', 
        { event: '*', schema: 'public', table: 'tournaments' },
        (payload) => {
          console.log('Change received:', payload);
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
          console.log('Change received:', payload);
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
          console.log('Change received:', payload);
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

  return null;
};

export default DataSync;
