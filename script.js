document.addEventListener('DOMContentLoaded', () => {
    // Select all images inside the gallery grid
    const galleryImages = document.querySelectorAll('.gallery-grid-container .gallery-item img');

    // Attach an event listener to each image
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            openModal(img.src);
        });
    });
});

// The existing openModal function from your file
function openModal(imageSrc) {
    const modal = document.createElement('div');
    modal.id = 'myModal';
    modal.className = 'modal';

    const modalImg = document.createElement('img');
    modalImg.className = 'modal-content';
    modalImg.src = imageSrc;

    const closeButton = document.createElement('span');
    closeButton.className = 'close';
    closeButton.innerHTML = '&times;';
    closeButton.onclick = function () {
        modal.style.display = 'none';
        modal.remove();
    };

    modal.appendChild(closeButton);
    modal.appendChild(modalImg);

    document.body.appendChild(modal);
    modal.style.display = 'block';
}