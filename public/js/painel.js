const modalTitle = document.querySelector('.modal-title');
const modalEmail = document.querySelector('.modal-email');
const modalPhone = document.querySelector('.modal-phone');
const modalNumbers = document.querySelector('.modal-numbers');
const modalPayment = document.querySelector('.modal-payment');
const adminPassword = document.getElementById('password').value;
const saveButton = document.getElementById('save');

function checkPassword(){
    if(adminPassword == '' && adminPassword.lenght < 6){
        adminPassword.classList = '.form-invalid';
        saveButton.disabled = true;
    } else{
        adminPassword.classList = 'form-invalid';
        saveButton.disabled = false;
    }
}

checkPassword();

function showInfo(event){
    $('#modal').modal('show');

    const userId = event.querySelector('.id').innerHTML;
    const userName = event.querySelector(`.name`).innerHTML;
    const userEmail = event.querySelector(`.email`).innerHTML;
    const userPhone = event.querySelector(`.phone`).innerHTML;
    const userNumbers = event.querySelector(`.numbers`).innerHTML; 
    const userPayment = event.querySelector(`.payment`).innerHTML;

    const updateUserInfo = document.querySelector('#hidden');
    updateUserInfo.value = userId;

    console.log(updateUserInfo.value)

    modalTitle.innerHTML = userName; 
    modalEmail.innerHTML = userEmail; 
    modalPhone.innerHTML = userPhone;
    modalNumbers.innerHTML = userNumbers;
    modalPayment.innerHTML = userPayment;

    checkPassword();
}







