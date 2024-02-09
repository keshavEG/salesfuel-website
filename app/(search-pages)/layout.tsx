import Footer from "@/components/footer";
import Header from "@/components/header";
import { getCurrentUser } from "@/lib/session";

export default async function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  return (
    <>
      <Header user={user} />
      <div className="wrapper p-4 lg:p-[60px]">
        {children}
      </div>
      <Footer />
    </>
  );
}
