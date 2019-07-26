export default class ItemService {
    constructor($http) {
        this.http = $http;
        this.url = "https://fullstack-java.herokuapp.com/api/itens";
    }

    findByPesquisa(pesquisa, field = "descricao") {
        return this.http
            .get(this.url + "?&filterField=" + field + "&filterData=" + pesquisa)
            .then(function (response) {
                return response.data;
            });
    }

    findById(id) {
        return this.http.get(this.url + "/" + id)
            .then(function (response) {
                return response.data;
            });
    }

    findAll() {
        return this.http.get(this.url)
            .then(function (response) {
                return response.data;
            });
    }

    insert(registro) {
        return this.http.post(this.url, registro)
            .then(function (response) {
                return response.data;
            });
    }

    update(registro) {
        return this.http.put(this.url + "/" + registro.id, registro)
            .then(function (response) {
                return response.data;
            });
    }

    remove(id) {
        return this.http.delete(this.url + "/" + id)
            .then(function (response) {
                return response.data;
            });
    }
}

ItemService.$inject = ["$http"];