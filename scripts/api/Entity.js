class Entity {

    url = "http://localhost:12000/api/";

    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    insert(object) {
        return new Promise((fullfill, reject) => fetch(this.url + this.endpoint,{
            body: JSON.stringify(object),
            headers: {"content-type": "application/json"},
            method: "POST",
            mode: "cors",
    }).then(response => response.json().then(response.ok ? fullfill : reject, reject), reject));

    }

    findAll() {
        return new Promise((fullfill, reject) => fetch(this.url + this.endpoint,{
            headers: {"content-type": "application/json"},
            method: "GET",
            mode: "cors",
        }).then(response => response.json().then(response.ok ? fullfill : reject, reject), reject));
    }

    findById(id) {
        return new Promise((fullfill, reject) => fetch(this.url + this.endpoint + "/" + id,{
            headers: {"content-type": "application/json"},
            method: "GET",
            mode: "cors",
        }).then(response => response.json().then(response.ok ? fullfill : reject, reject), reject));
    }

    update() {
        return new Promise((fullfill, reject) => fetch(this.url + this.endpoint,{
            body: JSON.stringify(object),
            headers: {"content-type": "application/json"},
            method: "PUT",
            mode: "cors",
        }).then(response => response.json().then(response.ok ? fullfill : reject, reject), reject));
    }

    deleteById() {
        return new Promise((fullfill, reject) => fetch(this.url + this.endpoint + "/" + id,{
            headers: {"content-type": "application/json"},
            method: "DELETE",
            mode: "cors",
        }).then(response => response.json().then(response.ok ? fullfill : reject, reject), reject));
    }

    // Todos los metodos que yo necesite para trabajar

}