import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { supabase } from '../../services/supabaseClient';
import { insertTourData, deleteTourData, fetchAllTournaments, updateTourData } from '../../features/tournamentSlice';
import { AppDispatch } from '../../store/store';
import { RealtimePostgresChangesPayload } from '@supabase/supabase-js';

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
