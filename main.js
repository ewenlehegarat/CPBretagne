const divEvenements = document.querySelector('.evenements')
const imgEvenements = document.querySelector('.evenements img')
const divFavoris = document.querySelector('.favoris')
const imgFavoris = document.querySelector('.favoris img')
const imgDiscord = document.querySelector('.icone_discord')
const imgInstagram = document.querySelector('.icone_instagram')
const locationImg = document.querySelectorAll('.location_img')
const location1 = document.querySelector('.location_1')
const location2 = document.querySelector('.location_2')
const overlay_1 = document.querySelector('.overlay_1')
const overlay_2 = document.querySelector('.overlay_2')
const myBody = document.querySelector('body')

divEvenements.addEventListener('mouseover', function(){
    imgEvenements.src = "img/Planner_hover.png"
    divEvenements.addEventListener('mouseout', function(){
        imgEvenements.src = "img/Planner.png"
    })
})

divFavoris.addEventListener('mouseover', function(){
    imgFavoris.src = "img/Coeur_hover.png"
    divFavoris.addEventListener('mouseout', function(){
        imgFavoris.src = "img/Coeur.png"
    })
})

imgDiscord.addEventListener('mouseover', function(){
    imgDiscord.src = "img/Discord_hover.png"
    imgDiscord.addEventListener('mouseout', function(){
        imgDiscord.src = "img/Discord.png"
    })
})

imgInstagram.addEventListener('mouseover', function(){
    imgInstagram.src = "img/Instagram_hover.png"
    imgInstagram.addEventListener('mouseout', function(){
        imgInstagram.src = "img/Instagram.png"
    })
})

locationImg.forEach(imglocation => {
    imglocation.addEventListener('mouseover', function(){
        imglocation.src = "img/Location_hover.png"
    })
    imglocation.addEventListener('mouseout', function(){
        imglocation.src = "img/Location.png"
    })
});

location1.addEventListener('mouseover', function(){
    overlay_1.style.display = 'flex'
    location1.addEventListener('mouseout', function(){
        overlay_1.style.display = 'none'
    })
    location1.addEventListener('click', function(){
        window.scrollTo({
            top: 900, behavior: 'smooth'
        })
    })
})

location2.addEventListener('mouseover', function(){
    overlay_2.style.display = 'flex'
    location2.addEventListener('mouseout', function(){
        overlay_2.style.display = 'none'
    })
    location2.addEventListener('click', function(){
        window.scrollTo({
            top: 1672, behavior: 'smooth'
        })
    })
})