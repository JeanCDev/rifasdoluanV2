class BD {
    constructor() {
        let id = localStorage.getItem('id')

        if (id === null) {
            localStorage.setItem('id', 0);
        }
    }

    getNextId() {
        let nextId = localStorage.getItem('id');
        return parseInt(nextId) + 1;
    }

    save(d) {
        let id = this.getNextId();

        localStorage.setItem(id, JSON.stringify(d));

        localStorage.setItem('id', id);
    }

    recoverRegister() {
        //array de despesas
        let user = [];

        let id = localStorage.getItem('id');

        // recuperar todas as despesas do localStorage
        for (let i = 1; i <= id; i++) {
            //recuperar despesa
            let user = JSON.parse(localStorage.getItem(i));

            //verificar possibilidade de indice removido.
            if (user === null) {
                continue
            }

            user.id = i;

            //adicionar despesa ao array
            users.push(user);
        }
        return users;
    }
}