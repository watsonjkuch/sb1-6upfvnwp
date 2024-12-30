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
      assets: {
        Row: {
          id: string
          name: string
          category: string
          location: string
          status: string
          condition: string
          quantity: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          category: string
          location: string
          status: string
          condition: string
          quantity: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          category?: string
          location?: string
          status?: string
          condition?: string
          quantity?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}