import Redis from "ioredis";

export const client = new Redis(
  "redis://default:27361380d21d48dfb6419093aa94aed8@us1-coherent-goose-40722.upstash.io:40722"
);
