import { supabase } from "./supabaseClient";


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