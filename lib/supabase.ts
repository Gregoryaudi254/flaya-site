import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      agencies: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          phone: string
          address: string
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          phone: string
          address: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          phone?: string
          address?: string
        }
      }
      properties: {
        Row: {
          id: string
          created_at: string
          name: string
          address: string
          agency_id: string
          total_units: number
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          address: string
          agency_id: string
          total_units: number
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          address?: string
          agency_id?: string
          total_units?: number
        }
      }
      units: {
        Row: {
          id: string
          created_at: string
          unit_number: string
          property_id: string
          rent_amount: number
          status: 'occupied' | 'vacant'
        }
        Insert: {
          id?: string
          created_at?: string
          unit_number: string
          property_id: string
          rent_amount: number
          status: 'occupied' | 'vacant'
        }
        Update: {
          id?: string
          created_at?: string
          unit_number?: string
          property_id?: string
          rent_amount?: number
          status?: 'occupied' | 'vacant'
        }
      }
      tenants: {
        Row: {
          id: string
          created_at: string
          first_name: string
          last_name: string
          email: string
          phone: string
          unit_id: string
          lease_start: string
          lease_end: string
        }
        Insert: {
          id?: string
          created_at?: string
          first_name: string
          last_name: string
          email: string
          phone: string
          unit_id: string
          lease_start: string
          lease_end: string
        }
        Update: {
          id?: string
          created_at?: string
          first_name?: string
          last_name?: string
          email?: string
          phone?: string
          unit_id?: string
          lease_start?: string
          lease_end?: string
        }
      }
      payments: {
        Row: {
          id: string
          created_at: string
          tenant_id: string
          amount: number
          payment_date: string
          mpesa_reference: string
          verification_status: 'pending' | 'verified' | 'failed'
          payment_month: string
        }
        Insert: {
          id?: string
          created_at?: string
          tenant_id: string
          amount: number
          payment_date: string
          mpesa_reference: string
          verification_status?: 'pending' | 'verified' | 'failed'
          payment_month: string
        }
        Update: {
          id?: string
          created_at?: string
          tenant_id?: string
          amount?: number
          payment_date?: string
          mpesa_reference?: string
          verification_status?: 'pending' | 'verified' | 'failed'
          payment_month?: string
        }
      }
    }
  }
} 