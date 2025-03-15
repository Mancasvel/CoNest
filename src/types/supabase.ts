export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type UserType = 'host' | 'student'

export type ContractStatus = 'pending' | 'active' | 'completed' | 'cancelled'

export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded'

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          full_name: string | null
          avatar_url: string | null
          user_type: UserType
          bio: string | null
          location: string | null
          date_of_birth: string | null
          phone_number: string | null
          emergency_contact: string | null
          preferences: {
            schedule: string[]
            pets_allowed: boolean
            smoking_allowed: boolean
            activities: string[]
            help_needed?: string[]
            study_field?: string
            university?: string
            availability?: string[]
          } | null
          verification_status: 'pending' | 'verified' | 'rejected'
          embedding: number[] | null
          has_paid: boolean
          payment_id: string | null
        }
        Insert: {
          id: string
          created_at?: string
          updated_at?: string
          full_name?: string | null
          avatar_url?: string | null
          user_type: UserType
          bio?: string | null
          location?: string | null
          date_of_birth?: string | null
          phone_number?: string | null
          emergency_contact?: string | null
          preferences?: {
            schedule: string[]
            pets_allowed: boolean
            smoking_allowed: boolean
            activities: string[]
            help_needed?: string[]
            study_field?: string
            university?: string
            availability?: string[]
          } | null
          verification_status?: 'pending' | 'verified' | 'rejected'
          embedding?: number[] | null
          has_paid?: boolean
          payment_id?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          full_name?: string | null
          avatar_url?: string | null
          user_type?: UserType
          bio?: string | null
          location?: string | null
          date_of_birth?: string | null
          phone_number?: string | null
          emergency_contact?: string | null
          preferences?: {
            schedule: string[]
            pets_allowed: boolean
            smoking_allowed: boolean
            activities: string[]
            help_needed?: string[]
            study_field?: string
            university?: string
            availability?: string[]
          } | null
          verification_status?: 'pending' | 'verified' | 'rejected'
          embedding?: number[] | null
          has_paid?: boolean
          payment_id?: string | null
        }
      }
      matches: {
        Row: {
          id: string
          created_at: string
          host_id: string
          student_id: string
          status: 'pending' | 'accepted' | 'rejected' | 'active' | 'completed'
          compatibility_score: number
          contract_details: {
            rent_amount: number
            start_date: string
            end_date: string
            help_hours_per_week: number
            additional_terms: string[]
          } | null
        }
        Insert: {
          id?: string
          created_at?: string
          host_id: string
          student_id: string
          status?: 'pending' | 'accepted' | 'rejected' | 'active' | 'completed'
          compatibility_score: number
          contract_details?: {
            rent_amount: number
            start_date: string
            end_date: string
            help_hours_per_week: number
            additional_terms: string[]
          } | null
        }
        Update: {
          id?: string
          created_at?: string
          host_id?: string
          student_id?: string
          status?: 'pending' | 'accepted' | 'rejected' | 'active' | 'completed'
          compatibility_score?: number
          contract_details?: {
            rent_amount: number
            start_date: string
            end_date: string
            help_hours_per_week: number
            additional_terms: string[]
          } | null
        }
      }
      messages: {
        Row: {
          id: string
          created_at: string
          sender_id: string
          receiver_id: string
          content: string
          read: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          sender_id: string
          receiver_id: string
          content: string
          read?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          sender_id?: string
          receiver_id?: string
          content?: string
          read?: boolean
        }
      }
      contracts: {
        Row: {
          id: string
          match_id: string
          host_id: string
          student_id: string
          status: ContractStatus
          start_date: string
          end_date: string
          monthly_rent: number
          services_included: string[]
          student_responsibilities: string[]
          additional_terms: string | null
          host_signed: boolean
          student_signed: boolean
          host_signed_at: string | null
          student_signed_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          match_id: string
          host_id: string
          student_id: string
          status?: ContractStatus
          start_date: string
          end_date: string
          monthly_rent: number
          services_included?: string[]
          student_responsibilities?: string[]
          additional_terms?: string | null
          host_signed?: boolean
          student_signed?: boolean
          host_signed_at?: string | null
          student_signed_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          match_id?: string
          host_id?: string
          student_id?: string
          status?: ContractStatus
          start_date?: string
          end_date?: string
          monthly_rent?: number
          services_included?: string[]
          student_responsibilities?: string[]
          additional_terms?: string | null
          host_signed?: boolean
          student_signed?: boolean
          host_signed_at?: string | null
          student_signed_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      payments: {
        Row: {
          id: string
          contract_id: string
          amount: number
          due_date: string
          paid_date: string | null
          status: string
          payment_method: string | null
          transaction_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          contract_id: string
          amount: number
          due_date: string
          paid_date?: string | null
          status?: string
          payment_method?: string | null
          transaction_id?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          contract_id?: string
          amount?: number
          due_date?: string
          paid_date?: string | null
          status?: string
          payment_method?: string | null
          transaction_id?: string | null
          created_at?: string
        }
      }
      matching_payments: {
        Row: {
          id: string
          user_id: string
          amount: number
          status: PaymentStatus
          payment_method: string | null
          payment_intent_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          amount: number
          status?: PaymentStatus
          payment_method?: string | null
          payment_intent_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          amount?: number
          status?: PaymentStatus
          payment_method?: string | null
          payment_intent_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      match_users: {
        Args: { user_id: string; limit?: number }
        Returns: {
          matched_user_id: string
          compatibility_score: number
        }[]
      }
    }
    Enums: {
      contract_status: ContractStatus
      payment_status: PaymentStatus
    }
  }
} 