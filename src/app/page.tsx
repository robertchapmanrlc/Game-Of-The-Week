import { auth } from "@clerk/nextjs/server";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Home() {

  const { userId } = auth();

  if (userId) {
    redirect("/voting");
  }

  return (
    <main className="w-full sm:py-20 md:py-10 lg:py-5 flex flex-col items-center justify-center gap-y-5 px-8">
      <h1 className="text-text font-bebasneue text-3xl md:text-5xl lg:text-7xl">
        Game of the Week
      </h1>
      <div className="flex flex-col justify-center items-center gap-y-10">
        <h2 className="text-gray-400 font-bebasneue text-center text-sm md:text-xl lg:text-2xl">
          Not quite game of the year, but there is still value in being game of
          the week right?
        </h2>
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
