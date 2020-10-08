export class Request{

    static get (){
        return fetch(`http://127.0.0.1:82/usuario?login=lucas&senha=123`);
    }
}