"use client";;
import { use } from "react";

import PortofolioDetailClient from "./PortofolioDetailClient";

export default function PortofolioDetailPage(props) {
  const params = use(props.params);
  return <PortofolioDetailClient id={params.id} />;
}
