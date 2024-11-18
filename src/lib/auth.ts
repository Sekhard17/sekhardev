import { supabase } from '../lib/supabase'
export interface User {
  id: string;
  email: string;
  full_name: string;
  username: string;
  avatar_url?: string;
  role: string;
  bio?: string;
  github_url?: string;
  linkedin_url?: string;
  website?: string;
}

export interface AuthResponse {
  user: User | null;
  error?: string;
}

const hashPassword = (password: string): string => {
  return btoa(password);
};

export const registerUser = async (
  email: string,
  password: string,
  fullName: string,
  username: string
): Promise<AuthResponse> => {
  try {
    const { data: existingUser } = await supabase
      .from('profiles')
      .select('email')
      .eq('email', email)
      .single();

    if (existingUser) {
      return { user: null, error: 'El email ya está registrado' };
    }

    const { data: existingUsername } = await supabase
      .from('profiles')
      .select('username')
      .eq('username', username)
      .single();

    if (existingUsername) {
      return { user: null, error: 'El nombre de usuario ya está en uso' };
    }

    const hashedPassword = hashPassword(password);

    const { data, error } = await supabase
      .from('profiles')
      .insert([
        {
          email,
          password: hashedPassword,
          full_name: fullName,
          username,
          role: 'member'
        }
      ])
      .select()
      .single();

    if (error) throw error;

    const user = data as User;
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(user));
    }
    return { user };
  } catch (error: any) {
    return { user: null, error: error.message };
  }
};

export const loginUser = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const hashedPassword = hashPassword(password);

    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('email', email)
      .eq('password', hashedPassword)
      .single();

    if (error) throw error;
    if (!data) {
      return { user: null, error: 'Credenciales inválidas' };
    }

    const user = data as User;
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(user));
    }
    return { user };
  } catch (error: any) {
    return { user: null, error: error.message };
  }
};

export const getCurrentUser = (): User | null => {
  if (typeof window === 'undefined') return null;
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};

export const logout = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('user');
    window.location.href = '/';
  }
};