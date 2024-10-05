document.getElementById("currentYear").textContent = new Date().getFullYear();

const images = [
    {src: 'img/CapturasMundo/SalaCofres.png', alt: 'Sala de cofres'},
    {src: 'img/CapturasMundo/Horno.png', alt: 'Horno'},
    {src: 'img/CapturasMundo/GranjaRaids.png', alt: 'Granja de Raids'},
    {src: 'img/CapturasMundo/GranjaMobs.png', alt: 'Granja de Mobs'},
    {src: 'img/CapturasMundo/GranjaHierro.png', alt: 'Granja de Hierro'},
    {src: 'img/CapturasMundo/GranjaCaña.png', alt: 'Granja de Caña de Azúcar'},
    {src: 'img/CapturasMundo/GranjaAldeanos.png', alt: 'Granja de Aldeanos '},
    {src: 'img/CapturasMundo/Beacon.png', alt: 'Beacon'},
    {src: 'img/CapturasMundo/ArbolesBambu.png', alt: 'Bosque'},
    {src: 'img/CapturasMundo/Aldeanos.png', alt: 'Aldeanos'},
    {src: 'img/CapturasMundo/Abejas.png', alt: 'Colmena'}
];

let currentIndex = 0;

const currentImage = document.getElementById('currentImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateImage() {
    currentImage.src = images[currentIndex].src;
    currentImage.alt = images[currentIndex].alt;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
});