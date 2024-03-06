import Link from "next/link";

const Homepage = async () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight  sm:text-[5rem]">
          Steward CMS
        </h1>

        <div className="flex w-full flex-1 flex-col items-center gap-4">
          <Link href="/login" className="text-lg ">
            Login
          </Link>

          <Link href="/authenticated" className="text-lg ">
            Authenticated Route Example
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
