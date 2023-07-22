"use client";

import AuthModal from "@/components/AuthModal";
import Modal from "@/components/Modal";
import UploadModal from "@/components/UploadModal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMount, SetIsMount] = useState(false);
  useEffect(() => {
    SetIsMount(true);
  }, []);
  if (!isMount) {
    return null;
  }
  return (
    <>
      <AuthModal></AuthModal>
      <UploadModal></UploadModal>
    </>
  );
};

export default ModalProvider;
