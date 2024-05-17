import { getPlaceHolderImage } from "@/utils/images";

import { auth } from "@clerk/nextjs/server";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Image from "next/image";

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
        <div className="w-full max-w-5xl h-[400px] md:h-[450px] lg:h-[600px] xl:h-[800px] grid grid-flow-dense grid-cols-12 grid-rows-12 gap-2">
          <div className="relative col-span-4 row-span-7">
            <Image
              src={"https://i.ibb.co/mRjLMRw/princess-peach-showtime.webp"}
              className="h-full sm:w-full sm:max-h-full object-cover object-bottom lg:object-center"
              width={750}
              height={1214}
              alt="Game 1"
            />
            <div className="absolute top-0 bottom-0 right-0 left-0 h-full w-full overflow-hidden bg-gradient-to-t from-accent/30 to-transparent"></div>
          </div>
          <div className="relative col-span-5 row-span-4">
            <Image
              src={"https://i.ibb.co/HN2Jcht/final-fantasy-VII-rebirth.webp"}
              className="h-full sm:w-full sm:max-h-full object-cover object-top"
              width={2880}
              height={2160}
              alt="Game 2"
            />
            <div className="absolute top-0 bottom-0 right-0 left-0 h-full w-full overflow-hidden bg-gradient-to-t from-accent/30 to-transparent"></div>
          </div>
          <div className="relative col-span-3 row-span-2">
            <Image
              src={"https://i.ibb.co/82QXtfh/tekken-8.webp"}
              className="h-full sm:w-full sm:max-h-full object-cover object-bottom"
              width={1000}
              height={1423}
              alt="Game 3"
            />
            <div className="absolute top-0 bottom-0 right-0 left-0 h-full w-full overflow-hidden bg-gradient-to-t from-accent/30 to-transparent"></div>
          </div>
          <div className="relative col-span-3 row-span-2">
            <Image
              src={"https://i.ibb.co/Mnk9GbB/rise-of-the-ronin.webp"}
              className="h-full sm:w-full sm:max-h-full object-cover object-top"
              width={2200}
              height={1238}
              alt="Game 4"
            />
            <div className="absolute top-0 bottom-0 right-0 left-0 h-full w-full overflow-hidden bg-gradient-to-t from-accent/30 to-transparent"></div>
          </div>
          <div className="relative col-span-8 row-span-3">
            <Image
              src={"https://i.ibb.co/Wn9nhsP/helldivers-2.webp"}
              className="h-full sm:w-full sm:max-h-full object-cover object-top"
              width={1800}
              height={900}
              alt="Game 5"
            />
            <div className="absolute top-0 bottom-0 right-0 left-0 h-full w-full overflow-hidden bg-gradient-to-t from-accent/30 to-transparent"></div>
          </div>
          <div className="relative col-span-8 row-span-2">
            <Image
              src={"https://i.ibb.co/N9wyTxg/south-park-snow-day.webp"}
              className="h-full sm:w-full sm:max-h-full object-cover object-[50%_10%]"
              width={768}
              height={432}
              alt="Game 6"
            />
            <div className="absolute top-0 bottom-0 right-0 left-0 h-full w-full overflow-hidden bg-gradient-to-t from-accent/30 to-transparent"></div>
          </div>
          <div className="relative col-span-8 row-span-3">
            <Image
              src={"https://i.ibb.co/LdH0gbM/stellar-blade.webp"}
              className="h-full sm:w-full sm:max-h-full object-cover object-[50%_25%]"
              width={597}
              height={595}
              alt="Game 7"
            />
            <div className="absolute top-0 bottom-0 right-0 left-0 h-full w-full overflow-hidden bg-gradient-to-t from-accent/30 to-transparent"></div>
          </div>
          <div className="relative col-span-4 row-span-5">
            <Image
              src={"https://i.ibb.co/g4FcbX6/sand-land.webp"}
              className="h-full sm:w-full sm:max-h-full object-cover object-top"
              width={273}
              height={365}
              alt="Game 8"
            />
            <div className="absolute top-0 bottom-0 right-0 left-0 h-full w-full overflow-hidden bg-gradient-to-t from-accent/30 to-transparent"></div>
          </div>
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
