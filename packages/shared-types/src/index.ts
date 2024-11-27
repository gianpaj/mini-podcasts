export interface User {
  id: string;
  email: string;
  name?: string;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Podcast {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Episode {
  id: string;
  podcastId: string;
  title: string;
  description: string;
  audioUrl: string;
  duration: number;
  createdAt: Date;
  updatedAt: Date;
}