function openModal() {
    let name = document.getElementById('user-name').value;
    let email = document.getElementById('user-email').value;
    let phone = document.getElementById('user-phone').value;

    if (name == '' || email == '' || phone == '') {
        //alert('Todos os campos devem ser preenchidos!');
        $('#modal').modal('show');
    } else {
        $('#modal').modal('show');
    }
    createNumberBadge()
}

function saveClient() {
    let user = new User();


    //bd.save(user);

    $('#modal').modal('hide');

    let numbers = document.getElementsByName('numbers');
    //console.log(numbers)

    console.log(user);
}

