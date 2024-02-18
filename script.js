// nav = document.getElementById("nav");

// window.onscroll= function(change){
//     nav.style.backgroundColor="#7f9f5de0";
// }


//changing navbar color after 90% of the user viewport

if (window.innerWidth > 1000) {
    window.addEventListener('scroll', function(event) {
        const navigationBar = document.getElementById('nav');
        
        if (window.scrollY > (window.innerHeight)*0.3) {
            navigationBar.style.backgroundColor="#7f9f5de0";
        } else {
            navigationBar.style.backgroundColor="#7f9f5d18";
        }
    });
}
