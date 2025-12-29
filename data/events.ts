export interface Event {
  id: number;
  speaker: string;
  title: string;
  description: string;
  date: string;
  time: string;
  image: string;
}

export const events: Event[] = [
  {
    id: 0,
    speaker: 'John Doe',
    title: 'Event 1',
    description: 'Description 1',
    date: 'Friday',
    time: '10:00 - 12:00',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 1,
    speaker: 'Jane Doe',
    title: 'Event 2',
    description: 'Description 2',
    date: 'Saturday',
    time: '10:00 - 12:00',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    speaker: 'John Smith',
    title: 'Event 3',
    description: 'Description 3',
    date: 'Saturday',
    time: '10:00 - 12:00',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    speaker: 'Jane Smith',
    title: 'Event 4',
    description: 'Description 4',
    date: 'Sunday',
    time: '10:00 - 12:00',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    speaker: 'John Doe',
    title: 'Event 5',
    description: 'Description 5',
    date: 'Sunday',
    time: '10:00 - 12:00',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    speaker: 'Jane Doe',
    title: 'Event 6',
    description: 'Description 6',
    date: 'Sunday',
    time: '10:00 - 12:00',
    image: 'https://via.placeholder.com/150',
  },
];
