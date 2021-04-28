const yes = document.querySelector('.clicker');
const no = document.querySelector('.attente')
yes.addEventListener('click', function () {
    no.classList.add('hidden');
    
})
