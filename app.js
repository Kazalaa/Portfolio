const cursor = document.querySelector('.cursor');

// Hover Anchor / links to projects and about section and add the arrow image
const hoverLink = document.querySelectorAll(".anchor")
console.log(hoverLink)
hoverLink.forEach(link => {
  console.log(link)
  link.addEventListener("mouseover", () => {
    cursor.style.backgroundImage = 'url(assets/arrow.svg)'
    cursor.style.backgroundPosition = "center";
    cursor.style.backgroundSize = "contain";
    cursor.style.backgroundRepeat = "no-repeat";
    cursor.style.backgroundColor = "white"

  })
  link.addEventListener("mouseout", () => {
    const cursor = document.querySelector('.cursor');
    cursor.style.backgroundPosition = "";
    cursor.style.backgroundSize = "";
    cursor.style.backgroundRepeat = "";
    cursor.style.backgroundImage = 'none'
    cursor.style.backgroundColor = ""
  })
})

// CoStock video and Canva - light effect
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let posX = 0;
let posY = 0;

canvas.addEventListener('mousemove', e => {

  posX = e.offsetX;
  posY = e.offsetY;
  console.log(posX, posY);
})

function anim() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save()
  ctx.beginPath()
  // ctx.rect(posX - 600, 0, 600, canvas.height);
  ctx.arc(posX - 125, posY - 125, 250, 0, 2 * Math.PI);
  ctx.clip()
  // const cursor = document.querySelector('.cursor');
  // cursor.classList.add('hovered');
  canvas.addEventListener('mouseenter', () => {
    const cursor = document.querySelector('.cursor');
    cursor.classList.add('hovered');
    cursor.innerHTML = "Watch";
    cursor.style.textAlign = "center";
    cursor.style.lineHeight = "60px";
    // cursor.style.borderColor = "white";
    cursor.style.color = "white";
    canvas.addEventListener('click', () => {
      window.open(
        "https://www.youtube.com/watch?v=3cIIvOIhLAk&ab_channel=LeWagon", "_blank");
    })
  })
  canvas.addEventListener('mouseout', () => {
    const cursor = document.querySelector('.cursor');
    cursor.classList.remove('hovered');
    cursor.innerHTML = ""
  })

  ctx.drawImage(document.querySelector('video'), 0, 0, canvas.width, canvas.height)
  ctx.restore()
  requestAnimationFrame(anim)
}
anim();

 // Move the letters of the subtitles - Projects and About
const spanContainers = document.querySelectorAll('.subtitle div');

spanContainers.forEach(item => {

  const letters = item.children[0].textContent.split('');
  item.innerHTML = "";
  letters.forEach((el, index) => {
    item.innerHTML += `<span style="transition-delay: ${0.07 * index}s">${el}</span>`
  })
})

document.addEventListener('mousemove', e => {
  cursor.style.top = `${e.pageY - 30}px`
  cursor.style.left = `${e.pageX - 30}px`
})

// Show the project image when hover the project name
const allLinks = document.querySelectorAll('nav ul li a');

allLinks.forEach(link => {
  const project = link.getAttribute('data-project').toLowerCase();

  link.addEventListener('mouseenter', () => {
    cursor.classList.add('hovered');
    cursor.style.backgroundImage = `url(assets/project/${project}.png)`
    cursor.style.backgroundPosition = "center";
  })
  link.addEventListener('mouseout', () => {
    cursor.classList.remove('hovered');
    cursor.style.backgroundImage = `none`
  })
})


// Change the color of the cursor, depend of the background color - white or black
const cursorChangeBorderColor = document.querySelector('.section-black');

cursorChangeBorderColor.addEventListener('mouseover', () => {
  cursor.style.borderColor = "white";
})
cursorChangeBorderColor.addEventListener('mouseout', () => {
  cursor.style.borderColor = "black";
})
