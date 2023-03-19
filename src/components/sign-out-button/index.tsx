import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

export const SignOutButton = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

  const handleClick = async () => {
    await supabaseClient.auth.signOut();
    router.replace("/");
  };

  return (
    <button type="button" className="underline" onClick={handleClick}>
      Sign out
    </button>
  );
};
