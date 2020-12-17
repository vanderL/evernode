import Api from "./api"

const NoteService = {
    create: () => Api.post('/notes', {'title': 'Nova nota', 'body': 'Nova nota...'}, {
        headers: {'x-acess-token': localStorage.getItem('token')}
    }),
    delete: (id) => Api.delete(`/notes/${id}`, {
        headers: {'x-acess-token': localStorage.getItem('token')}
    }),
    update: (id, params) => Api.put(`/notes/${id}`, params, {
        headers: {'x-acess-token': localStorage.getItem('token')}
    }),
    index: () => Api.get('/notes', {
        headers: {'x-acess-token': localStorage.getItem('token')}
    })
}

export default NoteService