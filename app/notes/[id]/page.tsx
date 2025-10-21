import NoteDetailsClient from "./NoteDetailsClient";

interface NotePageProps {
  params: Promise<{
    id: string;
  }>;
}

const NoteDetails = async ({ params }: NotePageProps) => {
  const { id } = await params;

  return (
    <>
      <NoteDetailsClient />
    </>
  );
};

export default NoteDetails;
