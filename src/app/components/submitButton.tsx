"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-1 md:py-2 text-md md:text-xl lg:text-3xl text-text font-opensans bg-primary rounded-md hover:scale-105 transition-transform disabled:bg-accent disabled:hover:scale-100"
    >
      {pending ? 'Casting vote...' : 'Vote'}
    </button>
  );
}
