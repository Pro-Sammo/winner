import BottomNavbar from "@/components/AdminNav/BottomNavbar";
import SideNavbar from "@/components/AdminNav/SideNavbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <div>
     {children}
     <BottomNavbar/>
    </div>
    </>
  );
}
