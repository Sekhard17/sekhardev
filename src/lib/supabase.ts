import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yaofnbjsaeefuzetseij.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlhb2ZuYmpzYWVlZnV6ZXRzZWlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE4NzM2NDIsImV4cCI6MjA0NzQ0OTY0Mn0.Vc9_VJHt0yBsTtl8EorGsozEEO5f5QiQ0CuBGGDEIhw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Profile {
  id: string;
  username: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  bio?: string;
  github_url?: string;
  linkedin_url?: string;
  website?: string;
  role: string;
  created_at?: string;
  updated_at?: string;
}

export async function updateProfile(userId: string, updates: Partial<Profile>) {
  const { data, error } = await supabase
    .from('profiles')
    .update({
      ...updates,
      updated_at: new Date().toISOString()
    })
    .eq('id', userId)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function uploadAvatar(userId: string, file: File) {
  const fileExt = file.name.split('.').pop();
  const fileName = `${userId}-${Date.now()}.${fileExt}`;
  const filePath = `avatars/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('avatars')
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  const { data: { publicUrl } } = supabase.storage
    .from('avatars')
    .getPublicUrl(filePath);

  return updateProfile(userId, { avatar_url: publicUrl });
}