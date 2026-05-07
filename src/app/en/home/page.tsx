async function getPage(slug: string) {
  const res = await fetch(
    `https://bnoon-cms-staging-rust.vercel.app/api/pages?where[slug][equals]=${slug}`,
    { cache: 'no-store' }
  );

  return res.json();
}

export default async function Page({ params }: any) {
  const data = await getPage(params.slug);
  const page = data?.docs?.[0];

  return (
    <div>
      <h1>{page?.title?.en}</h1>
      <p>{page?.content?.en}</p>
    </div>
  );
}