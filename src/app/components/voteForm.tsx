import { registerVote } from "@/server/queries";
import SubmitButton from "./submitButton";

export default function VotingForm({
  currentVotes,
  game_id,
  electionId,
}: {
  currentVotes: number;
  game_id: number;
  electionId: number;
}) {
  return (
    <form
      className="w-full"
      action={async () => {
        "use server";
        await registerVote(currentVotes, game_id, electionId);
      }}
    >
      <SubmitButton />
    </form>
  );
}
