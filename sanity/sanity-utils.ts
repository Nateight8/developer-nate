import { createClient, groq } from "next-sanity";
import { Project } from "../types/project";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "fx47h1t9",
    dataset: "production",
    apiVersion: "2023-03-04",
  });

  return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug":slug.current,
        "image":image.asset->url,
        url,
        content
    }`
  );
}
