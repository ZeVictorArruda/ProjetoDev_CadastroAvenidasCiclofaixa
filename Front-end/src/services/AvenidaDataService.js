import http from '../http-commom'

class AvenidaDataService {
    // Retorna todos
    getAll() {
        return http.get('/avenidas')
    }
    // busca por id
    get(id) {
        return http.get(`/avenidas/${id}`)
    }
    // cria
    create(data) {
        return http.post('/avenidas', data)
    }
    // atualiza
    update(id, data) {
        return http.put(`/avenidas/${id}`, data)
    }
    // deleta por id
    delete(id) {
        return http.delete(`/avenidas/${id}`)
    }
    // busca por nome
    findByName(nome) {
        return http.get(`/avenidas/?nome=${nome}`)
    }
}

export default new AvenidaDataService()
