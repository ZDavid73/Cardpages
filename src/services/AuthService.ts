import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zyemimihfcilkfzgwsxv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5ZW1pbWloZmNpbGtmemd3c3h2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNzE0OTYwOSwiZXhwIjoyMDQyNzI1NjA5fQ.exRwRJzNe1OwcnY-7oc6ZMWVu4Q1vUBaz9Ex-eAmYNo'; 
const supabase = createClient(supabaseUrl, supabaseKey);

export const registerUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email, 
    password
  });

  if (error) throw new Error(error.message);
  return data.user;
};

export const loginUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email, 
    password
  });

  if (error) throw new Error(error.message);
  return data.user;
};
