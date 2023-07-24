import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-[#FFFFFF] md:w-[200px] overflow-y-auto">
        <Sidebar />
      </div>
      <main className="md:pl-[200px]">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
