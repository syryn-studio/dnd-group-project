import axios from 'axios';

const http = axios.create({
    "baseURL": "http://localhost:8000/api/notes"
});

const NoteService = {
    "createNewNote": async (noteData) => {
        try {
            const res = await http.post("/", noteData)
            return res.data
        } catch(err) { throw err }
    },
    "getAllNotes": async () => {
        try {
            const res = await http.get("/")
            return res.data
        } catch(err) { throw err }
    },
    "getOneNote": async (id) => {
        try {
            const res = await http.get(`/${id}`)
            return res.data
        } catch(err) { throw err }
    },
    "updateNote": async (id, data) => {
        try {
            const res = await http.put(`/${id}`, data)
            return res.data
        } catch(err) { throw err }
    },
    "deleteNote": async (id) => {
        try {
            const res = await http.delete(`/${id}`)
            return res.data
        } catch(err) { throw err }
    }
}

export default NoteService;