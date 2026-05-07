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
    <div style={{ direction: 'rtl' }}>
      <h1>{page?.title?.ar}</h1>
      <p>{page?.content?.ar}</p>
    </div>
  );
}