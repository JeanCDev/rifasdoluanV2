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
