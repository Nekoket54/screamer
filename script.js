const body = document.querySelector('body')

body.addEventListener('click',()=>{
    body.innerHTML = `
            <video width="700px" height="700px"  autoplay loop muted>
        <source src="./creepy-insainment.mp4">
        </video>
        <audio autoplay loop>
            <source src="./smile-dog-jumpscare-167171.mp3">
        </audio>
    `
})

body.style.background = 'black'