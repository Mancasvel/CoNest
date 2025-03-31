// src/types/interfaces.ts

export type MatchmakingStatus = 'REGISTERED' | 'MATCHMAKING' | 'MATCHED' | 'RENTED';

export interface Admin {
  id: string; // UUID
}

export interface Student {
  id: string; // UUID
  university: string;
  course: string;
  birth_date: string; // Fecha en formato string, se puede convertir a Date si es necesario
  interests: string[] | null;
  status: MatchmakingStatus; // Usamos el ENUM definido en la base de datos
  profile_photo: string | null;
}

export interface Elder {
  id: string; // UUID
  birth_date: string; // Fecha en formato string
  interests: string[] | null;
  apartment_address: string;
  apartment_description: string | null;
  monthly_rent: number;
  apartment_photos: string[] | null;
  status: MatchmakingStatus; // Usamos el ENUM definido en la base de datos
  profile_photo: string | null;
}

export interface Match {
  id: string; // UUID
  student_id: string; // UUID
  elder_id: string; // UUID
  created_at: string; // Timestamp en formato string
  updated_at: string; // Timestamp en formato string
}
