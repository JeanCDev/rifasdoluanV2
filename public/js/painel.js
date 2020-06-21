const modalTitle = document.querySelector('.modal-title');
const modalEmail = document.querySelector('.modal-email');
const modalPhone = document.querySelector('.modal-phone');
const modalNumbers = document.querySelector('.modal-numbers');

function showInfo(event){
    $('#modal').modal('show');

    const userId = event.querySelector('.id').innerHTML;
    const userName = event.querySelector(`.name`).innerHTML;
    const userEmail = event.querySelector(`.email`).innerHTML;
    const userPhone = event.querySelector(`.phone`).innerHTML;
    const userNumbers = event.querySelector(`.numbers`).innerHTML;
    
    const updateUserInfo = document.querySelector('#hidden');
    updateUserInfo.value = userId;

    console.log(updateUserInfo.value)

    modalTitle.innerHTML = userName; 
    modalEmail.innerHTML = userEmail; 
    modalPhone.innerHTML = userPhone;
    modalNumbers.innerHTML = userNumbers;
}






