"use client";

import Modal from "@/components/Modal/Modal";
import NoteForm from "@/components/NoteForm/NoteForm";
import NoteList from "@/components/NoteList/NoteList";
import SearchBox from "@/components/SearchBox/SearchBox";
import { fetchNotes } from "@/lib/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import css from "@/components/NotesPage/NotesPage.module.css";
import Pagination from "@/components/Pagination/Pagination";

export default function NotesPageDefault() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["notes", currentPage, searchQuery],
    queryFn: () => fetchNotes(currentPage, searchQuery),
    placeholderData: keepPreviousData,
  });
  const updateCurrentPage = (page: number) => {
    setCurrentPage(page);
  };
  const openModalWindow = () => {
    setIsOpen(true);
  };
  const closeModalWindow = () => {
    setIsOpen(false);
  };
  const totalPage = data?.totalPages ? data.totalPages : 0;
  const handleSearch = useDebouncedCallback((query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  }, 500);
  return (
    <>
      <div className={css.toolbar}>
        <SearchBox onSearch={handleSearch} searchQuery={searchQuery} />
        {isSuccess && totalPage > 1 && (
          <Pagination
            totalPages={totalPage}
            currentPage={currentPage}
            updateCurrentPage={updateCurrentPage}
          />
        )}
        <button onClick={openModalWindow} className={css.button}>
          Create note +
        </button>
      </div>
      {isSuccess && data?.notes?.length > 0 && <NoteList notes={data.notes} />}
      {isLoading && <p>Loading, please wait...</p>}
      {isError && <p>Something went wrong.</p>}
      {isOpen && (
        <Modal onClose={closeModalWindow}>
          <NoteForm onClose={closeModalWindow} />
        </Modal>
      )}
    </>
  );
}
