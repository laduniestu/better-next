import Header from "@/app/(public)/_components/header";
import Footer from "@/app/(public)/_components/footer";

export default function PublicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-grow px-2 md:px-5">
        {children}
      </main>
      <Footer />
    </div>
  );
}
