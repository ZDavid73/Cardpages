/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { supabase } from '../../services/supabaseClient';
import { insertTourData, deleteTourData, fetchAllTournaments, updateTourData } from '../../features/tournamentSlice';
import { AppDispatch } from '../../store/store';
import { RealtimePostgresChangesPayload } from '@supabase/supabase-js';
import { deleteCardData, insertCardData, updateCardData } from '../../features/cardSlice';

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
