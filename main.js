


// THIS IS TO GET THE TOGGLE BUTTON TO WORK 

const bars = document.getElementById('open-ico');
const fallBars = document.getElementById('close-ico');
const dropdown = document.getElementById('navbar-content');

bars.addEventListener('click', () => {
    // alert('i got clicked boss')
    bars.classList.toggle('hidden');
    fallBars.classList.toggle('hidden');
    dropdown.classList.add('visible');
});

fallBars.addEventListener('click', () => { // Corrected the syntax here
    bars.classList.toggle('hidden'); // Changed 'visible' to 'hidden' for consistency
    fallBars.classList.toggle('hidden');
    dropdown.classList.remove('visible');
});


