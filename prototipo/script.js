
const galeriaItems = document.querySelectorAll('.fotos-pousadas');


galeriaItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.querySelector('.caption').style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
        item.querySelector('.caption').style.color = '#000';
    });

    item.addEventListener('mouseout', () => {
        item.querySelector('.caption').style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
        item.querySelector('.caption').style.color = '#fff';
    });
});

