import Navbar from "./components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <div className="bg-cus-bg">{children}</div>
    </div>
  );
}
