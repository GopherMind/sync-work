export interface Profile {
  id: string;
  name: string;
  role: string;
  url?: string;
  description?: string;
}

export interface Proposal {
  task_id: string;
  user_id: string;
  cover_letter: string;
  status: 'pending' | 'accepted' | 'rejected';
}

export interface Task {
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

export interface ProfileData {
  profile: Profile;
  proposals: Proposal[];
  tasks: Task[];
}
