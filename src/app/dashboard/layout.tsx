import DashBoardSideBar from "@/components/DashBoardSideBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div className="w-screen h-screen flex flex-row ">
            <DashBoardSideBar/>
            {children}
        </div>
    );
}
