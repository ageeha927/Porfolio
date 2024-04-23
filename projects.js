const card = document.querySelectorAll(".card")

card.forEach((c) => {
    c.addEventListener('mouseover', () => {
        removeActiveClasses();
        c.classList.add("active")
    })
})

function removeActiveClasses(){
    card.forEach((c) => {
        c.classList.remove("active")
    })
}

// card.forEach(card => {
//     card.addEventListener('mouseover', () => {
//         const backgroundImage = card.style.backgroundImage
//         document.body.style.backgroundImage = backgroundImage
//     });
// });