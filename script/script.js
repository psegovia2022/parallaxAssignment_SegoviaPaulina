window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let moveDistance = scrollPosition * 2;
    document.querySelector('.mg').style.transform = "translateX(" + moveDistance + "px)";
})

// const scrollMove = document.querySelector('.mg');
// let prevScrollPos = window.scrollY;

// window.addEventListener('scroll', () => {
//     const currentScrollPos = window.scrollY;
//     if(currentScrollPos > prevScrollPos) {
//          //scroll down
//         scrollMove.classList.remove('flip');
//         scrollMove.style.transform = `translateY(-50%) translateX{currentScrollPos}px)`;
//     } else {
//         //scroll up
//         scrollMove.classList.add('flip');
//         scrollMove.style.transform =   `scaleX(-1) translateY(-50%) translateX(${-currentScrollPos}px)`;
//     }

//             prevScrollPos = currentScrollPos;
//         })

