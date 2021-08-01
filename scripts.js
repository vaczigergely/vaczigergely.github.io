let imageCount = 8;

let images = [];
function loadImages () { 
    for (let index = 0; index < imageCount; index++) {
        images.push (
        {
            photo: `images/${index+1}.jpg`,
            title: 'My title',
            description: 'What happened here, why is this a very nice image'
        }
    )}
};

loadImages();

images.forEach(photo => {
    $('.thumbnailContainer').append(`<img src="${photo.photo}" data-number="${images.indexOf(photo)}" alt="Photo-title">`)
});

$('.thumbnailContainer img').click((event) => {
    let dataNumber = $(event.target).attr('data-number');
    $('.thumbnailContainer img').css('border-width', '0px');
    $('.thumbnailContainer img').css('margin', '10px');
    $(event.target).css('border-width', '5px');
    $(event.target).css('margin', '5px');
    loadPhoto(dataNumber);
})

let currentPhoto = 0;

let loadPhoto = (photoNumber) => {
    $('.imageContainer').css('background-image', `url(./${images[photoNumber].photo})`);
}

loadPhoto(currentPhoto);

$('#forward').click(() => {
    currentPhoto++;
    if (currentPhoto >= images.length) {
        currentPhoto = 0;
    }
    loadPhoto(currentPhoto);
})

$('#back').click(() => {
    currentPhoto--;
    if (currentPhoto < 0) {
        currentPhoto = images.length -1;
    }
    loadPhoto(currentPhoto);
})