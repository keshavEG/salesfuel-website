import Footer from "@/components/footer";
import Header from "@/components/header";
import { getCurrentUser } from "@/lib/session";

export default async function StaticLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const user =  await getCurrentUser();
  return (
    <>
      <Header user={user} />
      {children}
      <Footer />
    </>
  );
}
