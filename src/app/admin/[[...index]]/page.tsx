"use client";
import config from "../../../../sanity.confi";
import { NextStudio } from "next-sanity/studio";

export default function AdminPage() {
  return <NextStudio config={config} />;
}
