const obras = document.querySelector('#obras');
obras.addEventListener('click', (e) => {
    
    const home = document.querySelector('.home');
    home.classList.add('hidden');
    
    const obras = document.querySelector('#obrasShow');
    obras.classList.remove('hidden');
    obras.classList.add('no_hidden');

    const propuestas = document.querySelector('.propuestas');
    propuestas.classList.add('hidden');
    
    
});


const home = document.querySelector('#home');
home.addEventListener('click', (e) => {
        
    const home = document.querySelector('.home');
    home.classList.remove('hidden');

    const obras = document.querySelector('#obrasShow');
    obras.classList.add('hidden');
    obras.classList.remove('no_hidden');

    const propuestas = document.querySelector('.propuestas');
    propuestas.classList.remove('hidden');
    propuestas.classList.add('no_hidden');

        
        
});