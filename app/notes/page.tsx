import NoteList from "@/components/NoteList/NoteList";
// import Pagination from "@/components/Pagination/Pagination";
import { fetchNotes } from "@/lib/api";

const Notes = async () => {
  const res = await fetchNotes(1, "");

  return (
    <section>
      {res?.notes?.length > 0 && <NoteList notes={res.notes} />}
      {/* <Pagination
        totalPages={res.totalPages}
        currentPage={1}
        setCurrentPage={() => {}}
      /> */}
    </section>
  );
};

export default Notes;

// export default function App() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isOpen, setIsOpen] = useState(false);
//   const { data, isError, isLoading, isSuccess } = useQuery({
//     queryKey: ["notes", currentPage, searchQuery],
//     queryFn: () => fetchNotes(currentPage, searchQuery),
//     placeholderData: keepPreviousData,
//   });
//   const updateCarrentPage = (page: number) => {
//     setCurrentPage(page);
//   };
//   const openModalWindow = () => {
//     setIsOpen(true);
//   };
//   const closeModalWindow = () => {
//     setIsOpen(false);
//   };
//   const totalPage = data?.totalPages ? data.totalPages : 0;
//   const handleSearch = useDebouncedCallback((query: string) => {
//     setSearchQuery(query);
//     setCurrentPage(1);
//   }, 500);
//   return (
//     <div className={css.app}>
//       <header className={css.toolbar}>
//         <SearchBox onSearch={handleSearch} searchQuery={searchQuery} />
//         {isSuccess && totalPage > 1 && (
//           <Pagination
//             totalPages={totalPage}
//             currentPage={currentPage}
//             setCurrentPage={updateCarrentPage}
//           />
//         )}
//         <button onClick={openModalWindow} className={css.button}>
//           Create note +
//         </button>
//       </header>
//       {isSuccess && data?.notes?.length > 0 && <NoteList notes={data.notes} />}
//       {isLoading && <Loader />}
//       {isOpen && (
//         <Modal onClose={closeModalWindow}>
//           <NoteForm onClose={closeModalWindow} />
//         </Modal>
//       )}
//       {isError && (
//         <ErrorMessage message="There was an error, please try again..." />
//       )}
//       {isSuccess && data?.notes?.length === 0 && (
//         <ErrorMessage message="No matching notes found" />
//       )}
//     </div>
//   );
// }
