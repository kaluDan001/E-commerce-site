let currentIndex = 0;

function showBanner(index) {
    const banner = banners[index];

    document.getElementById("banner-subtitle").textContent = banner.subtitle;
    document.getElementById("banner-title").textContent = banner.title;
    document.getElementById("banner-description").textContent = banner.description;

    document.getElementById("image1").src = banner.image1;
    document.getElementById("image2").src = banner.image2;
    document.getElementById("image3").src = banner.image3;
}

document.querySelector(".next").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % banners.length;
    showBanner(currentIndex);
});

document.querySelector(".prev").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + banners.length) % banners.length;
    showBanner(currentIndex);
});





showBanner(0);