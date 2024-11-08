const images = [
    'images/1_MB_Anna_Marrow_Doggie_Jo_Hounsome_Photography_1_grande.webp',
    'images/2021_10_07_210517_FA_LOGO_trans-background_SMALL.jpg',
    'images/starbrick_4727.webp',
    'images/dsc_0122_3007119766_o.jpg',
    'images/Tokyo_SnowContemporary_2012_2.JPG',
    'images/kungpao chicken.png',
    'images/2021_09_24_02_model_of_invisible_futures_02_small.jpg'

];

function displayRandomImage() {
    const imageContainer = document.getElementById('imageContainer');
    const randomIndex = Math.floor(Math.random() * images.length);
    
    const img = document.createElement('img');
    img.src = images[randomIndex];
    img.alt = 'Random Image ' + (randomIndex + 1);
    
    // Clear previous image and add new one
    imageContainer.innerHTML = '';
    imageContainer.appendChild(img);
}