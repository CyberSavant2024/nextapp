import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "7vj5x0zc",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});