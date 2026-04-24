
export interface Order {
  id: string;
  created_at: string;
  title: string;
  description: string;
  budget: number;
  stack: string[];
  status: string;
  client_id: string;
  profiles: {
    name: string;
  };
  proposals?: number;
  level?: string;
  work_time_in_week?: number;
  duration?: string;
}
