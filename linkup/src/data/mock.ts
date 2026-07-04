export type User = {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  verified: boolean;
};

export type Post = {
  id: string;
  user: User;
  timestamp: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  hashtags: string[];
};

export type Chat = {
  id: string;
  user: User;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
};

export type Notification = {
  id: string;
  user: User;
  action: string;
  timestamp: string;
  type: 'like' | 'follow' | 'comment' | 'mention' | 'reel_like';
};

export const currentUser: User = {
  id: 'you',
  name: 'You',
  handle: '@you',
  avatar: 'https://picsum.photos/seed/you/100/100',
  verified: false,
};

export const users: Record<string, User> = {
  alex: {
    id: 'alex',
    name: 'Alex Creates',
    handle: '@alex_creates',
    avatar: 'https://picsum.photos/seed/alex/100/100',
    verified: true,
  },
  priya: {
    id: 'priya',
    name: 'Priya Vibes',
    handle: '@priya_vibes',
    avatar: 'https://picsum.photos/seed/priya/100/100',
    verified: false,
  },
  dan: {
    id: 'dan',
    name: 'Dan Tech',
    handle: '@dan_tech',
    avatar: 'https://picsum.photos/seed/dan/100/100',
    verified: true,
  },
  sofia: {
    id: 'sofia',
    name: 'Sofia Art',
    handle: '@sofia_art',
    avatar: 'https://picsum.photos/seed/sofia/100/100',
    verified: false,
  },
  mike: {
    id: 'mike',
    name: 'Mike Fitness',
    handle: '@mike_fitness',
    avatar: 'https://picsum.photos/seed/mike/100/100',
    verified: false,
  },
};

export const posts: Post[] = [
  {
    id: 'p1',
    user: users.alex,
    timestamp: '2 hours ago',
    content: 'Just launched my new design portfolio! 🚀 Let me know what you think.',
    image: 'https://picsum.photos/seed/post1/800/500',
    likes: 4300,
    comments: 128,
    shares: 45,
    hashtags: ['#design', '#portfolio', '#launch'],
  },
  {
    id: 'p2',
    user: users.priya,
    timestamp: '4 hours ago',
    content: 'Sunset walks are the best kind of therapy. 🌅',
    image: 'https://picsum.photos/seed/post2/800/500',
    likes: 2100,
    comments: 56,
    shares: 12,
    hashtags: ['#sunset', '#vibes', '#peace'],
  },
  {
    id: 'p3',
    user: users.dan,
    timestamp: '5 hours ago',
    content: 'Exploring the new features in TypeScript 5.5. Some really powerful additions for type inference! 💻',
    likes: 1200,
    comments: 89,
    shares: 234,
    hashtags: ['#typescript', '#coding', '#webdev'],
  },
  {
    id: 'p4',
    user: users.sofia,
    timestamp: '8 hours ago',
    content: 'Working on a new abstract piece today. The colors are really coming together. 🎨',
    image: 'https://picsum.photos/seed/post4/800/500',
    likes: 3400,
    comments: 112,
    shares: 67,
    hashtags: ['#art', '#abstract', '#painting'],
  }
];

export const chats: Chat[] = [
  {
    id: 'c1',
    user: users.alex,
    lastMessage: 'Sounds good, let\'s catch up tomorrow!',
    timestamp: '10:42 AM',
    unreadCount: 2,
  },
  {
    id: 'c2',
    user: users.priya,
    lastMessage: 'Did you see that new reel?',
    timestamp: 'Yesterday',
    unreadCount: 0,
  },
  {
    id: 'c3',
    user: users.dan,
    lastMessage: 'The repo is updated now.',
    timestamp: 'Yesterday',
    unreadCount: 1,
  },
  {
    id: 'c4',
    user: users.sofia,
    lastMessage: 'Thanks for the feedback! 😊',
    timestamp: 'Tuesday',
    unreadCount: 0,
  },
  {
    id: 'c5',
    user: users.mike,
    lastMessage: 'Gym at 6?',
    timestamp: 'Monday',
    unreadCount: 0,
  }
];

export const notifications: Notification[] = [
  {
    id: 'n1',
    user: users.alex,
    action: 'liked your post',
    timestamp: '10m ago',
    type: 'like',
  },
  {
    id: 'n2',
    user: users.priya,
    action: 'started following you',
    timestamp: '1h ago',
    type: 'follow',
  },
  {
    id: 'n3',
    user: users.dan,
    action: 'commented: "This is exactly what I was looking for!"',
    timestamp: '2h ago',
    type: 'comment',
  },
  {
    id: 'n4',
    user: users.sofia,
    action: 'mentioned you in a post',
    timestamp: '3h ago',
    type: 'mention',
  },
  {
    id: 'n5',
    user: users.mike,
    action: 'liked your reel',
    timestamp: '5h ago',
    type: 'reel_like',
  },
  {
    id: 'n6',
    user: users.alex,
    action: 'commented: "Great work!"',
    timestamp: '1d ago',
    type: 'comment',
  }
];
