import Note from "@/types/note";
import NoteItem from "../NoteItem/NoteItem";

type ItemsProps = {
  notes: Note[];
};
const NoteList = ({ notes }: ItemsProps) => {
  return (
    <ul>
      {notes.map((note) => (
        <NoteItem key={note.id} item={note} />
      ))}
    </ul>
  );
};
export default NoteList;
