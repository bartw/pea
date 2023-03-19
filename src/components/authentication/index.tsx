import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";

export const Authentication = () => {
  const supabaseClient = useSupabaseClient();

  return (
    <Auth
      supabaseClient={supabaseClient}
      providers={[]}
      appearance={{
        extend: false,
        className: {
          button: "mt-4 w-full bg-emerald-300 p-4 text-slate-900 font-semibold",
          container: "mt-8",
          anchor: "block mt-4 text-sm underline text-center",
          divider: "",
          label: "block mt-2",
          input: "block w-full text-slate-900 p-2",
          loader: "",
          message: "block mt-8 text-sm text-center text-red-500",
        },
      }}
      localization={{
        variables: {
          sign_in: {
            email_label: "Email address",
            password_label: "Password",
          },
        },
      }}
    />
  );
};
