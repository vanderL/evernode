import Api from "./api"

const NoteService = {
    create: () => Api.post('/notes', {'title': 'Nova nota', 'body': 'Nova nota...'}, {
        headers: {'x-access-token': localStorage.getItem('token')}
      }),
    index: () => Api.get("/notes", {
        headers: {'x-access-token': localStorage.getItem('token')}
    })
}

export default NoteService