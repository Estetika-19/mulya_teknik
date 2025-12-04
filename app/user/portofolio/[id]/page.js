"use client";

import PortofolioDetailClient from "./PortofolioDetailClient";

export default function PortofolioDetailPage({ params }) {
  return <PortofolioDetailClient id={params.id} />;
}
