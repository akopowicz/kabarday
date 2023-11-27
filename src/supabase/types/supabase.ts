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
      product_type: {
        Row: {
          id: string
          type_name: string
        }
        Insert: {
          id?: string
          type_name: string
        }
        Update: {
          id?: string
          type_name?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          composition: string | null
          description: string | null
          id: string
          name: string
          price: number | null
          sex: string | null
          stock: number | null
          type_id: string | null
        }
        Insert: {
          composition?: string | null
          description?: string | null
          id?: string
          name: string
          price?: number | null
          sex?: string | null
          stock?: number | null
          type_id?: string | null
        }
        Update: {
          composition?: string | null
          description?: string | null
          id?: string
          name?: string
          price?: number | null
          sex?: string | null
          stock?: number | null
          type_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "product_type"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          email: string
          id: string
          login: string
          name: string | null
          role: string | null
          surname: string | null
        }
        Insert: {
          email: string
          id?: string
          login: string
          name?: string | null
          role?: string | null
          surname?: string | null
        }
        Update: {
          email?: string
          id?: string
          login?: string
          name?: string | null
          role?: string | null
          surname?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
