import NotesPageDefault from "./Notes.client";
import css from "@/components/NotesPage/NotesPage.module.css";

const Notes = async () => {
  return (
    <section className={css.app}>
      <NotesPageDefault />
    </section>
  );
};

export default Notes;

//
