function openNav() {
    document.getElementById("navbar").classList.toggle("-left-full");
    document.getElementById("navbar").classList.toggle("show");
    document.body.classList.toggle("overflow_hidden");
    document.getElementById("menubtn-icon").classList.toggle("cross")
}
const preloader = document.getElementById("preloader");
setTimeout(() => {
    document.getElementById("preloader").classList.add("hidden");
    document.body.classList.remove("overflow-hidden")
}, 2000);

// back to top //
let backToTop = document.getElementById('backToTop')
function goToTop() {
    window.scrollTo(0, 0, { behavior: 'smooth' })
}
document.getElementById('backToTop').addEventListener('click', goToTop)
window.addEventListener('scroll', function () {
    if (window.scrollY > 700) {
        backToTop.classList.remove('hidden');
        backToTop.classList.add('flex');
    } else {
        backToTop.classList.remove('flex');
        backToTop.classList.add('hidden');
    }
});