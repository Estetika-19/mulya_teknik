export default async function PortofolioDetail(props) {
  const params = await props.params;
  const id = params.id; // aman di page.js

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/api/portofolio/${id}`,
    { cache: "no-store" }
  );

  const data = await res.json();

  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.image_path} alt={data.title} />
      <p>{data.description}</p>
    </div>
  );
}
