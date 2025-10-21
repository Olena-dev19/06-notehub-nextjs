import NoteDetailsClient from "./NoteDetailsClient";

interface NotePageProps {
  params: Promise<{
    noteId: string;
  }>;
}

const NotePage = async ({ params }: NotePageProps) => {
  //   const { noteid } = await params;
  //   console.log("Params:", params);

  return (
    <>
      <NoteDetailsClient />
    </>
  );
};

export default NotePage;
