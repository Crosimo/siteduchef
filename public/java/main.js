const yes = document.getElementsByClassName("clicker");
console.log(yes.length);
const no = document.querySelector('.attente');
for (let i = 0; i <= yes.length; i++)
{
    yes[i].addEventListener('click', function () {
        no.classList.add('hidden');
        console.log('heyo');
        
    })
};


// yes[1].addEventListener('click', function () {
//     no.classList.add('hidden');
//     console.log('heyo');
    
// })
// yes[2].addEventListener('click', function () {
//     no.classList.add('hidden');
//     console.log('heyo');
    
// })
// yes[3].addEventListener('click', function () {
//     no.classList.add('hidden');
//     console.log('heyo');
    
// })
