const imgDiscord = document.querySelector('.right a:nth-child(1) img')
const imgInstagram = document.querySelector('.right a:nth-child(2) img')
const locationImg = document.querySelectorAll('.location_img')
const location1 = document.querySelector('.location_1')
const location2 = document.querySelector('.location_2')
const displayAside = document.querySelector('.display_aside')

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