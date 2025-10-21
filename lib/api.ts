import axios from "axios";
import Note from "../types/note";

interface ApiResponse {
  notes: Note[];
  total: number;
}

axios.defaults.baseURL = "https://next-docs-9f0504b0a741.herokuapp.com/";
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export async function getNotes() {
  await delay(2000);
  const res = await axios.get<ApiResponse>("/notes");
  return res.data;
}

export const getSingleNote = async (noteId: string) => {
  const { data } = await axios.get<Note>(`/notes/${noteId}`);
  return data;
};
// export const getNotes = async () => {
//   const res = await axios.get<NoteListResponse>("/notes");
//   return res.data;
// };
