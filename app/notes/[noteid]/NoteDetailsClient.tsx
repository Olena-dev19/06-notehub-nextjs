"use client";

import { getSingleNote } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const NoteDetailsClient = () => {
  const { noteid } = useParams<{
    noteid: string;
  }>();
  console.log("noteId:", noteid);
  const { data: note } = useQuery({
    queryKey: ["note", noteid],
    queryFn: () => getSingleNote(noteid),
    enabled: !!noteid,
  });

  return (
    <>
      <h2>{note?.title}</h2>
      <p>{note?.content}</p>

      <button>Edit</button>
    </>
  );
};
export default NoteDetailsClient;
