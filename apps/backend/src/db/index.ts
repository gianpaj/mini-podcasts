import { open } from "lmdb";
import type { Podcast } from "shared-types";

const db = open({
  path: "db",
  compression: true,
});

export const podcastsDb = {
  async getPodcasts(userId: string) {
    const podcasts: Podcast[] = [];
    for await (const { value } of db.getRange({
      start: `podcast-${userId}-`,
    })) {
      podcasts.push(value);
    }
    return podcasts;
  },

  async createPodcast(
    podcast: Omit<Podcast, "id" | "createdAt" | "updatedAt">,
  ) {
    const id = `podcast-${podcast.authorId}-${Date.now()}`;
    const now = new Date();
    const newPodcast: Podcast = {
      id,
      ...podcast,
      createdAt: now,
      updatedAt: now,
    };
    await db.put(id, newPodcast);
    return newPodcast;
  },
};

export const db = {
  ...podcastsDb,
};
