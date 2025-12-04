import PortofolioSection from "./portofolio";

export default async function PortofolioServer() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/portofolio`, {
    cache: "no-store",
  });

  let items = [];

  if (res.ok) {
    const json = await res.json();
    items = Array.isArray(json) ? json : json.data ?? [];
  }

  return <PortofolioSection items={items} />;
}
