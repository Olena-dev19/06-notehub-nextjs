// import NoteList from "@/components/NoteList/NoteList";
// import Pagination from "@/components/Pagination/Pagination";
import { fetchNotes } from "@/lib/api";
import NotesPageDefault from "./Notes.client";
import css from "@/components/NotesPage/NotesPage.module.css";

const Notes = async () => {
  const res = await fetchNotes(1, "");

  return (
    <section className={css.app}>
      <NotesPageDefault />
    </section>
  );
};

export default Notes;

//
