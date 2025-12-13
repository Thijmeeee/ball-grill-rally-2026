// Database Types voor Ball Grill Rally 2026
// Deze types komen overeen met de Supabase database schema

export interface PersonData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  street: string;
  house_number: string;
  postal_code: string;
  city: string;
  tshirt_size: string;
}

export interface Registration {
  id: string;
  team_name: string;
  team_number: string;
  team_size: number;
  car_brand: string;
  car_model: string;
  license_plate: string;
  persons: PersonData[];
  created_at: string;
  updated_at: string;
}

export type RegistrationInsert = Omit<Registration, 'id' | 'created_at' | 'updated_at'>;
export type RegistrationUpdate = Partial<RegistrationInsert>;

// Supabase Database schema type
export interface Database {
  public: {
    Tables: {
      registrations: {
        Row: Registration;
        Insert: RegistrationInsert;
        Update: RegistrationUpdate;
      };
    };
  };
}
