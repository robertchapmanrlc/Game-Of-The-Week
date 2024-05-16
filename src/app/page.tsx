import { auth } from "@clerk/nextjs/server";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Home() {

  const { userId } = auth();

  if (userId) {
    redirect("/voting");
  }

  return (
    <main className="w-full py-5 flex flex-col items-center justify-center gap-y-5 px-8">
      <h1 className="text-text font-bebasneue text-3xl md:text-5xl lg:text-7xl">
        Game of the Week
      </h1>
      <div className="w-full flex flex-col justify-center items-center gap-y-10">
        <h2 className="text-gray-400 font-bebasneue text-center text-sm md:text-xl lg:text-2xl">
          Not quite game of the year, but there is still value in being game of
          the week right?
        </h2>
        <div className="w-full max-w-3xl h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] grid grid-flow-dense grid-cols-12 grid-rows-12 gap-2">
          <div className="p-4 col-span-4 row-span-7 bg-red-800"></div>
          <div className="p-4 col-span-5 row-span-4 bg-blue-800"></div>
          <div className="p-4 col-span-3 row-span-2 bg-yellow-500"></div>
          <div className="p-4 col-span-3 row-span-2 bg-green-800"></div>
          <div className="p-4 col-span-8 row-span-3 bg-purple-800"></div>
          <div className="p-4 col-span-8 row-span-2 bg-orange-700"></div>
          <div className="p-4 col-span-8 row-span-3 bg-pink-400"></div>
          <div className="p-4 col-span-4 row-span-5 bg-white"></div>
        </div>
        <SignedOut>
          <SignInButton
            forceRedirectUrl="/voting"
            signUpFallbackRedirectUrl="/voting"
          >
            <button className="w-24 bg-primary p-2 rounded-md text-text">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </main>
  );
}
