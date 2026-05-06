export type Category = 'Shopping' | 'Professional' | 'Personal' | 'Business' | 'Home' | 'Work' | 'Security' | 'Travel' | 'Education' | 'Health';

export interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
  hasPhoto?: boolean;
  hasNote?: boolean;
}

export interface Checklist {
  id: string;
  title: string;
  category: Category;
  progress: number;
  isPinned?: boolean;
  items: ChecklistItem[];
  lastUpdated: string;
  client?: string;
  status: 'In Progress' | 'Paused' | 'Completed';
}

export interface Template {
  id: string;
  title: string;
  iconName: string;
  count: number;
}
