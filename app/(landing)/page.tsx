import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-[#044E9D] text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Doctor Admin Dashboard</h1>
          <div className="flex items-center flex-wrap gap-5">
            <Link href="/sign-in">
              <button className="bg-white text-[#044E9D] font-medium py-2 px-4 rounded">
                Sign In
              </button>
            </Link>
            <Link href="/sign-up">
              <button className="bg-white text-[#044E9D] font-medium py-2 px-4 rounded">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </header>
      <main className="w-full flex-1 py-8 m-h-screen">
        <div className="bg-[#044E9D] text-white text-center flex flex-col items-center justify-center h-screen py-24">
          <h2 className="text-3xl font-semibold mb-4">
            Welcome to Doctor Admin Dashboard
          </h2>
          <p className="text-lg mb-8">
            Manage your medical practice efficiently with our advanced
            dashboard.
          </p>
          <Link href="/dashboard">
            <button className="bg-white text-[#044E9D] font-medium py-3 px-6 rounded">
              Go To Dashboard
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
