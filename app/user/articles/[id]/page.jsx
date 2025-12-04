"use client"
import ArticleDetailClient from "./ArtikelDetailClient";

export default function ArticleDetailPage({ params }) {
  // Kirim ID ke client component
  return <ArticleDetailClient id={params.id} />;
}
