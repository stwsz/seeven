function homePageFunction() {
    const itens = document.getElementsByClassName('featured-movie');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close-modal');

    for (const item of itens) {
        item.addEventListener('click', () => {
            modal.style.display = 'block';

            
             
        });
    } 

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    })
}

homePageFunction();