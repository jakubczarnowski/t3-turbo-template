export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      group: {
        Row: {
          created_at: string
          description: string
          id: string
          manager_id: string
          name: string
          organisation_id: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          manager_id: string
          name: string
          organisation_id: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          manager_id?: string
          name?: string
          organisation_id?: string
        }
      }
      group_member: {
        Row: {
          created_at: string | null
          group_id: string
          member_id: string
        }
        Insert: {
          created_at?: string | null
          group_id: string
          member_id: string
        }
        Update: {
          created_at?: string | null
          group_id?: string
          member_id?: string
        }
      }
      group_tasks: {
        Row: {
          group_id: string
          task_id: string
        }
        Insert: {
          group_id: string
          task_id: string
        }
        Update: {
          group_id?: string
          task_id?: string
        }
      }
      member: {
        Row: {
          created_at: string | null
          id: string
          organisation_id: string
          role: Database["public"]["Enums"]["roles"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          organisation_id: string
          role?: Database["public"]["Enums"]["roles"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          organisation_id?: string
          role?: Database["public"]["Enums"]["roles"]
          user_id?: string
        }
      }
      organisation: {
        Row: {
          created_at: string | null
          id: string
          name: string
          slug: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          slug: string
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          slug?: string
        }
      }
      profiles: {
        Row: {
          avatar_url: string | null
          display_name: string | null
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          phone_number: string | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          display_name?: string | null
          email?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          phone_number?: string | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          display_name?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          phone_number?: string | null
          updated_at?: string | null
        }
      }
      project: {
        Row: {
          created_at: string | null
          details: string | null
          end_date: string | null
          id: string
          organisation_id: string
          recurring: Database["public"]["Enums"]["recurring"] | null
          start_date: string
          title: string | null
        }
        Insert: {
          created_at?: string | null
          details?: string | null
          end_date?: string | null
          id?: string
          organisation_id: string
          recurring?: Database["public"]["Enums"]["recurring"] | null
          start_date: string
          title?: string | null
        }
        Update: {
          created_at?: string | null
          details?: string | null
          end_date?: string | null
          id?: string
          organisation_id?: string
          recurring?: Database["public"]["Enums"]["recurring"] | null
          start_date?: string
          title?: string | null
        }
      }
      project_task: {
        Row: {
          project_id: string
          task_id: string
        }
        Insert: {
          project_id: string
          task_id: string
        }
        Update: {
          project_id?: string
          task_id?: string
        }
      }
      task: {
        Row: {
          assigned_member: string | null
          created_at: string | null
          finish_date: string | null
          id: string
          recurring: Database["public"]["Enums"]["recurring"] | null
          status: string
          title: string
        }
        Insert: {
          assigned_member?: string | null
          created_at?: string | null
          finish_date?: string | null
          id?: string
          recurring?: Database["public"]["Enums"]["recurring"] | null
          status: string
          title: string
        }
        Update: {
          assigned_member?: string | null
          created_at?: string | null
          finish_date?: string | null
          id?: string
          recurring?: Database["public"]["Enums"]["recurring"] | null
          status?: string
          title?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      recurring: "weekly" | "monthly" | "bi_weekly"
      roles: "guest" | "volunteer" | "admin" | "leader" | "member"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: string[]
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

