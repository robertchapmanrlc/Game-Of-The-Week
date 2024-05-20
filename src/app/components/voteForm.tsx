
import { registerVote } from "@/server/queries";
import SubmitButton from "./submitButton";

export default function VotingForm({
  currentVotes,
  name,
}: {
  currentVotes: number;
  name: string;
}) {
  return (
    <form
      className="w-full"
      action={async () => {
        "use server";
        await registerVote(currentVotes, name);
      }}
    >
      <SubmitButton />
    </form>
  );
}
