import { NestedNavBar } from "@/components/NestedNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NestedNavBar />
      {children}
    </>
  );
}
