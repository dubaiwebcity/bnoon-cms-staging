export const metadata = {
  title: 'Bnoon CMS',
  description: 'My Blog Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children; // ✅ BAS YE HI
}