import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zyemimihfcilkfzgwsxv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5ZW1pbWloZmNpbGtmemd3c3h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxNDk2MDksImV4cCI6MjA0MjcyNTYwOX0.c6yKQrLImvma7eTTbCrlQpijJeb2XF30FtLAIxU9avI'; 
const supabase = createClient(supabaseUrl, supabaseKey);

export const registerUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp(
    { email, password },
    { emailRedirectTo: 'https://tu-dominio.com/confirm-email' } 
  );

  if (error) throw new Error(error.message);

  return data.user; 
};

export const loginUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw new Error(error.message);
  return data.user;
};

export const logoutUser = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
};
