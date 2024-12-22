// THIS IS TO GET THE TOGGLE BUTTON TO WORK

const bars = document.getElementById('open-ico');
const fallBars = document.getElementById('close-ico');
const dropdown = document.getElementById('drop-cont');

bars.addEventListener('click', () => {
    bars.classList.toggle('hidden');
    fallBars.classList.toggle('hidden');
    dropdown.classList.add('visible');
    dropdown.classList.remove('hidden');
});

fallBars.addEventListener('click', () => {
    bars.classList.toggle('hidden');
    fallBars.classList.toggle('hidden');
    dropdown.classList.remove('visible');
    dropdown.classList.add('hidden');
});
