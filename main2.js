const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        
        const delay = entry.target.dataset.delay || 0;
        
        setTimeout(() => {
            entry.target.classList.add('view');
        }, delay);
        
        observer.unobserve(entry.target);
    });
}, {
    threshold: 0.2
});

document.querySelectorAll('header, .image_affiche, .lien_google_maps').forEach(el => observer.observe(el));