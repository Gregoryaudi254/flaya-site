import { createClient } from '@supabase/supabase-js'
import { Database } from './types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

export type Tables = Database['public']['Tables']
export type Enums = Database['public']['Enums']

// Helper types for common tables
export type Agency = Tables['agencies']['Row']
export type Property = Tables['properties']['Row']
export type Unit = Tables['units']['Row']
export type Tenant = Tables['tenants']['Row']
export type Payment = Tables['payments']['Row'] 