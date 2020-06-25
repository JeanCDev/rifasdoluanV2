const name = document.querySelector('[name=name]');
const email = document.querySelector('[name=email]');
const phone = document.querySelector('[name=phone]');
const chooseNumbers = document.querySelector(['[name=numbers]']);

let selectedNumbers = [];

function handleSelectedNumbers(event) {
    const numberBtn = event;
    console.log(numberBtn.id)
    numberBtn.classList.toggle('selected');

    const btnId = numberBtn.id;

    const alreadySelected = selectedNumbers.findIndex(item => {
        const numberFound = item == btnId;
        return numberFound;
    });

    if (alreadySelected >= 0) {
        const filteredNumbers = selectedNumbers.filter(item => {
            const numberIsDiferent = item != btnId;
            return numberIsDiferent;
        });

        selectedNumbers = filteredNumbers;
    } else {
        selectedNumbers.push(btnId);
    }

    chooseNumbers.value = selectedNumbers;
    console.log(selectedNumbers);
    console.log(chooseNumbers.value)
}

window.addEventListener('submit', (e) =>{
    if(name.value == '' || email.value == '' || phone.value == '' || selectedNumbers.length == 0 || paymentSelected.value == ''){
        e.preventDefault();
        alert('Preencha todos os dados, escolha pelo menos um número e a forma de pagamento para poder fazer seu cadastro.');
    } else{
        let confirmation = confirm(`
            Confira suas informações e confirme para prosseguir. 
            Nome: ${name.value} 
            Email: ${email.value} 
            Celular: ${phone.value} 
            Números escolhidos ${chooseNumbers.value}
            Método de pagamento: ${paymentSelected.value}
        `);
        if(confirmation == false){e.preventDefault();}
    }
});

const paymentMethod = document.querySelectorAll('#payment li');

for(const method of paymentMethod){
    method.addEventListener('click', selectPayment)
}

const paymentSelected = document.querySelector('[name=payment]');
const showPayment = document.querySelector('.payment');
let selectedPaymentMethod = [];

function selectPayment(event){
    const paymentLi = event.target;
    paymentLi.classList.add('select');

    const paymentId = event.target.dataset.id;

    if(selectedPaymentMethod.length == 0){
        selectedPaymentMethod.push(paymentId);
        paymentSelected.value = selectedPaymentMethod;
        showPayment.innerHTML = selectedPaymentMethod;
    } else{
        selectedPaymentMethod.push(paymentId);
        let lastSelectedPayment = $(selectedPaymentMethod).get(-1);
        paymentSelected.value = lastSelectedPayment;
        showPayment.innerHTML = lastSelectedPayment;
    }

    setTimeout(()=>{
        paymentLi.classList.remove('select');
    },100);
    console.log(selectedPaymentMethod);
    
}



