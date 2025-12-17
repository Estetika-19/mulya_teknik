"use client";
import { use } from "react";
import ArticleDetailClient from "./ArtikelDetailClient";

export default function ArticleDetailPage(props) {
  const params = use(props.params);
  // Kirim ID ke client component
  return <ArticleDetailClient id={params.id} />;
}
