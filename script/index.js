document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.images img');
    const modal = document.createElement('div');
    // Navbar Toggle Functionality
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar-menu');

    if (mobileMenu && navbarMenu) {
        mobileMenu.addEventListener('click', function () {
            mobileMenu.classList.toggle('active');
            navbarMenu.classList.toggle('active');
        });
        const navbarLinks = document.querySelectorAll('.navbar-link');
        navbarLinks.forEach(link => {
            link.addEventListener('click', function () {
                mobileMenu.classList.remove('active');
                navbarMenu.classList.remove('active');
            });
        });
    }

    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
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
