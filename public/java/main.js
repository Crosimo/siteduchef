
const btn1 = document.querySelector('.button1')
const btn2 = document.querySelector('.button2')
const btn3 = document.querySelector('.button3')
const btn4 = document.querySelector('.button4')


btn1.addEventListener('click', function () {
    document.querySelectorAll('.button').classList.add('hidden');
    document.querySelector('.button1').classList.remove('hidden');
})
btn2.addEventListener('click', function () {
    document.querySelector('.button1').classList.add('hidden');
    document.querySelector('.button2').classList.remove('hidden');
})
btn3.addEventListener('click', function () {
    document.querySelectorAll('.button').classList.add('hidden');
    document.querySelector('.button3').classList.remove('hidden');
})
btn4.addEventListener('click', function () {
    document.querySelectorAll('.button1').classList.add('hidden');
    document.querySelector('.button4').classList.remove('hidden');
})