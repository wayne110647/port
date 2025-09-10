const img = document.getElementById('main-img');

img.addEventListener('mouseover', () => {
    img.src = "images/ตัวเปลี่ยน-Photoroom-Photoroom.png";
    img.classList.add('hover-img')
});

img.addEventListener('mouseout', () => {
    img.src = "images/ตัวหลักธรรมดา-Photoroom.png";
    img.classList.add('hover-img')
});

