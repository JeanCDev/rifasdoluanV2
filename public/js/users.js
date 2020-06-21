class User {
    constructor() {
        this.name = document.getElementById('user-name').value;
        this.email = document.getElementById('user-email').value;
        this.phone = document.getElementById('user-phone').value;
        this.arrayNumbers = [];
        this.numbers = document.querySelectorAll('[type=checkbox]').checked;
    }

    validateData() {
        if (this[i] == undefined || this[i] == null || this[i] == '') {
            return false
        }
        return true
    }

}