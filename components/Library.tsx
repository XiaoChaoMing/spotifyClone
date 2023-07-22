"use client";
import React from "react";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";
import { Song } from "@/types";
import MediaItem from "./MediaItem";

interface LibararyProps {
  songs: Song[];
}
const Library: React.FC<LibararyProps> = ({ songs }) => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user } = useUser();
  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }

    return uploadModal.onOpen();
  };
  return (
    <div className="flex flex-col">
      <div
        className="
              flex
              items-center
              justify-between
              px-5
              pt-4
              "
      >
        <div
          className="
              inline-flex
              items-center
              gap-x-2
              "
        >
          <TbPlaylist className="text-neutral-400" size={26} />
          <p
            className="
              text-neutral-400
              font-medium
              text-medium
              "
          >
            Your Library
          </p>
        </div>
        <AiOutlinePlus
          size={20}
          className="
              text-neutral-400
              cursor-pointer
              hover:text-white
              transition
              "
          onClick={onClick}
        />
      </div>
      <div
        className="
              flex
              flex-col
              gap-y-2
              mt-4
              px-3
              "
      >
        {songs.map((song) => (
          <MediaItem onClick={() => {}} key={song.id} data={song} />
        ))}
      </div>
    </div>
  );
};

export default Library;
