import { Checklist, Template } from './types';

export const MOCK_CHECKLISTS: Checklist[] = [
  {
    id: '1',
    title: 'Daily Safety Inspection',
    category: 'Security',
    progress: 80,
    isPinned: true,
    status: 'In Progress',
    lastUpdated: 'Hace 5 min',
    items: [
      { id: '1-1', text: 'Check perimeter fence', completed: true },
      { id: '1-2', text: 'Inspect surveillance cameras', completed: true },
      { id: '1-3', text: 'Verify fire alarm system', completed: false },
    ]
  },
  {
    id: '2',
    title: 'Morning Routine',
    category: 'Personal',
    progress: 20,
    isPinned: true,
    status: 'In Progress',
    lastUpdated: 'Hoy 08:00 AM',
    items: [
      { id: '2-1', text: 'Drink water', completed: true },
      { id: '2-2', text: 'Meditation', completed: false },
    ]
  },
  {
    id: '3',
    title: 'Grocery List',
    category: 'Shopping',
    progress: 65,
    status: 'In Progress',
    lastUpdated: 'Ayer',
    items: [
      { id: '3-1', text: 'Apples', completed: true },
      { id: '3-2', text: 'Milk', completed: true },
      { id: '3-3', text: 'Bread', completed: false },
    ]
  },
  {
    id: '4',
    title: 'Site Survey - Zone B',
    category: 'Professional',
    progress: 40,
    status: 'In Progress',
    lastUpdated: 'Hace 2 días',
    items: [
      { id: '4-1', text: 'Take measurements', completed: true },
      { id: '4-2', text: 'Photograph damage', completed: false },
    ]
  },
  {
    id: '5',
    title: 'Weekly Review',
    category: 'Personal',
    progress: 95,
    status: 'In Progress',
    lastUpdated: 'Ayer',
    items: []
  },
  {
    id: '6',
    title: 'Stock Inventory',
    category: 'Business',
    progress: 10,
    status: 'Paused',
    lastUpdated: 'Hace 3 días',
    items: []
  }
];

export const MOCK_TEMPLATES: Template[] = [
  { id: 't1', title: 'Hogar', iconName: 'Home', count: 8 },
  { id: 't2', title: 'Trabajo', iconName: 'Briefcase', count: 15 },
  { id: 't3', title: 'Seguridad', iconName: 'Shield', count: 6 },
  { id: 't4', title: 'Viajes', iconName: 'Plane', count: 10 },
  { id: 't5', title: 'Educación', iconName: 'GraduationCap', count: 4 },
  { id: 't6', title: 'Salud', iconName: 'HeartPulse', count: 12 },
];
