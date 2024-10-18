let container = document.getElementById("container");
let gambar = document.getElementById("gambar");
let popup = document.getElementById("popup");
let popupImg = document.getElementById("popupImg");
let overlay = document.getElementById("overlay");
let audio = document.getElementById("audio");

const images = [
    { src: './assets/gambar1.jpg', alt: 'Gambar 1', sound: './assets/pop.wav' },
    { src: './assets/gambar2.jpg', alt: 'Gambar 2', sound: './assets/pop.wav' },
    { src: './assets/gambar3.jpg', alt: 'Gambar 3', sound: './assets/pop.wav' },
    { src: './assets/gambar4.jpg', alt: 'Gambar 4', sound: './assets/pop.wav' },
    { src: './assets/gambar5.jpg', alt: 'Gambar 5', sound: './assets/pop.wav' },
    { src: './assets/gambar7.jpg', alt: 'Gambar 6', sound: './assets/pop.wav' },
    { src: './assets/gambar11.jpg', alt: 'Gambar 7', sound: './assets/pop.wav' },
    { src: './assets/gambar8.jpg', alt: 'Gambar 8', sound: './assets/pop.wav' },
    { src: './assets/gambar9.jpg', alt: 'Gambar 9', sound: './assets/pop.wav' },
    { src: './assets/gambar10.jpg', alt: 'Gambar 10', sound: './assets/pop.wav' },
];

gambar.addEventListener('click', function() {
    tampilkanPopup(gambar.src, gambar.alt);
});

function tampilkanPopup(src, alt) {
    popupImg.src = src;
    popupImg.alt = alt;
    overlay.style.display = 'block';
    popup.style.display = 'block';

    const selectedImage = images.find(image => image.src.includes(src.split('/').pop()));
    if (selectedImage) {
        audio.src = selectedImage.sound;
        audio.play();
    }
}

function tutupPopup() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
    audio.pause();
}

function tambahGambar() {
    if (!document.getElementById("gambarDefault")) {
        let newImage = document.createElement("img");
        newImage.id = "gambarDefault";
        newImage.src = './assets/gambar1.jpg';
        newImage.alt = 'Gambar Default';
        newImage.width = 200;
        newImage.addEventListener('click', function() {
            tampilkanPopup(newImage.src, newImage.alt);
        });
        container.appendChild(newImage);
    }
}

function ubahGambar() {
    let currentImageIndex = images.findIndex(img => img.src.includes(gambar.src.split('/').pop()));
    let nextImageIndex = (currentImageIndex + 1) % images.length;
    let nextImage = images[nextImageIndex];

    gambar.src = nextImage.src;
    gambar.alt = nextImage.alt;

    audio.src = nextImage.sound;
    audio.play();
}

let containerWrapper = document.getElementById("containerWrapper");
let additionalContainer = null;

gambar.addEventListener('click', function() {
    tampilkanPopup(gambar.src, gambar.alt);
});

function tampilkanPopup(src, alt) {
    popupImg.src = src;
    popupImg.alt = alt;
    overlay.style.display = 'block';
    popup.style.display = 'block';

    const selectedImage = images.find(image => image.src.includes(src.split('/').pop()));
    if (selectedImage) {
        audio.src = selectedImage.sound;
        audio.play();
    }
}

function tutupPopup() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
    audio.pause();
}

function tambahGambar() {
    if (!additionalContainer) {
        additionalContainer = document.createElement("div");
        additionalContainer.classList.add("container");
        additionalContainer.style.width = "300px";
        additionalContainer.style.height = "300px";
        additionalContainer.style.marginLeft = "20px";

        let newImage = document.createElement("img");
        newImage.src = './assets/gambar1.jpg';
        newImage.alt = 'Gambar Default';
        newImage.width = 200;
        newImage.addEventListener('click', function() {
            tampilkanPopup(newImage.src, newImage.alt);
        });

        additionalContainer.appendChild(newImage);
        containerWrapper.appendChild(additionalContainer);
    }
}

function ubahGambar() {
    let currentImageIndex = images.findIndex(img => img.src.includes(gambar.src.split('/').pop()));
    let nextImageIndex = (currentImageIndex + 1) % images.length;
    let nextImage = images[nextImageIndex];

    gambar.src = nextImage.src;
    gambar.alt = nextImage.alt;

    if (additionalContainer) {
        containerWrapper.removeChild(additionalContainer);
        additionalContainer = null;
    }

    audio.src = nextImage.sound;
    audio.play();
}
