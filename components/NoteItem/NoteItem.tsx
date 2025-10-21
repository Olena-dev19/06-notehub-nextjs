import Note from "@/types/note";
import Link from "next/link";

type ItemProps = {
  item: Note;
};

const NoteItem = ({ item }: ItemProps) => {
  return (
    <li>
      <Link href={`/notes/${item.id}`}>{item.title}</Link>
    </li>
  );
};
export default NoteItem;
