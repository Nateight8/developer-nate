import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import project from "./sanity/schemas/project-schemas";
import { schemas } from "./sanity/schemas";

const config = defineConfig({
  name: "default",
  title: "my portfolio studio",

  projectId: "fx47h1t9",
  dataset: "production",

  apiVersion: "2023-03-04",
  basePath: "/admin",

  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
