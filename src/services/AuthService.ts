import { setAuthUserId } from "../utils/storage";
import { supabase } from "./supabaseClient";


export const registerUser = async (email: string, password: string, username: string, avatar_url: string) => {
  console.log('registerUser', email, password, username, avatar_url);
  const { data, error } = await supabase.auth.signUp({
    email, 
    password
  });

  if (error) throw new Error(error.message);

  const user = data.user;
  if (!user) throw new Error('User registration failed');

  const { error: profileError } = await supabase
    .from('users')
    .insert({
      id: user.id, 
      username,    
      picture: 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg', 
    });

  if (profileError) throw new Error(profileError.message);

  setAuthUserId(user.id);

  return user;
};


export const loginUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email, 
    password
  });

  if (error) throw new Error(error.message);
  return data.user;
};