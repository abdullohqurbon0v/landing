document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.images img');
    const modal = document.createElement('div');
    modal.id = 'imageModal';
    modal.className = 'modal';
    const closeBtn = document.createElement('span');
    closeBtn.className = 'close';
    closeBtn.innerHTML = '&times;';
    const modalContent = document.createElement('img');
    modalContent.className = 'modal-content';
    const caption = document.createElement('div');
    caption.className = 'caption';
    modal.appendChild(closeBtn);
    modal.appendChild(modalContent);
    modal.appendChild(caption);
    document.body.appendChild(modal);
    images.forEach(img => {
        img.addEventListener('click', function () {
            modal.style.display = 'block';
            modalContent.src = this.src;
            caption.textContent = this.alt || '';
        });
    });
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
});
