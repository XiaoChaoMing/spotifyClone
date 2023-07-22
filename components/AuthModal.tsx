"use client";

import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { useEffect } from "react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal";

const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const session = useSessionContext();
  const { onClose, isOpen } = useAuthModal();

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, router, onClose]);
  const onchange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };
  return (
    <div>
      <Modal
        title="welcome back"
        desciption="login to your account"
        isOpen={isOpen}
        onChange={onchange}
      >
        <Auth
          theme="dark"
          providers={["github", "google"]}
          magicLink
          supabaseClient={supabaseClient}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: "#404040",
                  brandAccent: "#22c55e",
                },
              },
            },
          }}
        />
      </Modal>
    </div>
  );
};

export default AuthModal;
