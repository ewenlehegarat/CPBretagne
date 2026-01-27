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

document.querySelectorAll('header, .image_affiche, .lien_google_maps, .image_de_la_semaine').forEach(el => observer.observe(el));

const iconeDiscord = document.querySelector('.icone_discord')
const iconeInstagram = document.querySelector('.icone_instagram')

iconeDiscord.addEventListener('mouseenter', ()=>{
    iconeDiscord.src = 'img/Discord_hover.png'
})

iconeDiscord.addEventListener('mouseleave', ()=>{
    iconeDiscord.src = 'img/Discord.png'
})


iconeInstagram.addEventListener('mouseenter', ()=>{
    iconeInstagram.src = 'img/Instagram_hover.png'
})

iconeInstagram.addEventListener('mouseleave', ()=>{
    iconeInstagram.src = 'img/Instagram.png'
})