document.addEventListener('DOMContentLoaded', function () {
    // Code for the meme generator
    const memeForm = document.querySelector('#meme-form');
    const memeSection = document.querySelector('#meme-section');
    const topTextInput = document.querySelector('#top-text');
    const bottomTextInput = document.querySelector('#bottom-text');
    const imageInput = document.querySelector('#image-url');
    const imagePreview = document.querySelector('#img-preview');
    const topTextPreview = document.querySelector('#top-text-preview');
    const bottomTextPreview = document.querySelector('#bottom-text-preview');
    imagePreview.src = imageInput.value;
    imageInput.addEventListener('blur', function () {
        imagePreview.src = imageInput.value;
        console.log('image input changed to: ', imageInput.value);
    });
    topTextInput.addEventListener('input', function () {
        topTextPreview.textContent = topTextInput.value;
    });
    bottomTextInput.addEventListener('input', function () {
        bottomTextPreview.textContent = bottomTextInput.value;
    });

    function generateNewMeme() {
        const newMemeContainer = document.createElement('div'); // Create a new div to hold the meme
        const newMeme = document.createElement('div');
        const newTopText = document.createElement('p');
        const newBottomText = document.createElement('p');
        const newImg = document.createElement('img');
        const removeBtn = document.createElement('button');

        newTopText.textContent = topTextInput.value;
        newBottomText.textContent = bottomTextInput.value;
        newImg.src = imageInput.value;
        removeBtn.textContent = 'Remove Meme';

        newMemeContainer.classList.add('meme-container');
        newMeme.classList.add('meme');
        newImg.classList.add('meme-image');
        newTopText.classList.add('top-text-display');
        newTopText.style.fontSize = topTextFontSize.value + 'px';
        newTopText.style.color = topTextFontColor.value;
        newTopText.style.fontFamily = topTextFontFamily.value;
        newBottomText.classList.add('bottom-text-display');
        newBottomText.style.fontSize = bottomTextFontSize.value + 'px';
        newBottomText.style.color = bottomTextFontColor.value;
        newBottomText.style.fontFamily = bottomTextFontFamily.value;
        removeBtn.classList.add('remove-btn');

        newMeme.appendChild(newImg);
        newMeme.appendChild(newTopText);
        newMeme.appendChild(newBottomText);
        newMemeContainer.appendChild(newMeme);
        newMemeContainer.appendChild(removeBtn);
        memeSection.appendChild(newMemeContainer);
    }

    memeForm.addEventListener('submit', function (e) {
        e.preventDefault();
        generateNewMeme();
    });

    memeSection.addEventListener('click', function (e) {
        if (e.target.classList.contains('remove-btn')) {
            e.target.parentElement.remove();
        }
    });
    //End code for meme generator
    //Code for meme settings
    const topTextFontSize = document.querySelector('#top-text-font-size');
    const topTextFontColor = document.querySelector('#top-text-font-color');
    const topTextFontFamily = document.querySelector('#top-text-font-family');
    const bottomTextFontSize = document.querySelector('#bottom-text-font-size');
    const bottomTextFontColor = document.querySelector('#bottom-text-font-color');
    const bottomTextFontFamily = document.querySelector('#bottom-text-font-family');
    
    if (localStorage.preferences) {
        topTextFontSize.value = JSON.parse(localStorage.preferences).topTextFontSize;
        topTextFontColor.value = JSON.parse(localStorage.preferences).topTextFontColor;
        topTextFontFamily.value = JSON.parse(localStorage.preferences).topTextFontFamily;
        bottomTextFontSize.value = JSON.parse(localStorage.preferences).bottomTextFontSize;
        bottomTextFontColor.value = JSON.parse(localStorage.preferences).bottomTextFontColor;
        bottomTextFontFamily.value = JSON.parse(localStorage.preferences).bottomTextFontFamily;
        topTextPreview.style.fontSize = topTextFontSize.value + 'px';
        topTextPreview.style.color = topTextFontColor.value;
        topTextPreview.style.fontFamily = topTextFontFamily.value;
        bottomTextPreview.style.fontSize = bottomTextFontSize.value + 'px';
        bottomTextPreview.style.color = bottomTextFontColor.value;
        bottomTextPreview.style.fontFamily = bottomTextFontFamily.value;
    }
    const memeSettings = document.querySelector('#meme-settings');
    const memeSettingsBtn = document.querySelector('#meme-settings-btn');
    memeSettings.addEventListener('submit', function (e) {  
        e.preventDefault();
        const preferences = {
            topTextFontSize: topTextFontSize.value,
            topTextFontColor: topTextFontColor.value,
            topTextFontFamily: topTextFontFamily.value,
            bottomTextFontSize: bottomTextFontSize.value,
            bottomTextFontColor: bottomTextFontColor.value,
            bottomTextFontFamily: bottomTextFontFamily.value
        };
        console.log('preferences: ', preferences);
        localStorage.setItem('preferences', JSON.stringify(preferences));
    });
    topTextFontSize.addEventListener('change', function () {
        topTextPreview.style.fontSize = topTextFontSize.value + 'px';
    });
    topTextFontColor.addEventListener('change', function () {
        topTextPreview.style.color = topTextFontColor.value;
    });
    topTextFontFamily.addEventListener('change', function () {
        topTextPreview.style.fontFamily = topTextFontFamily.value;
    });
    bottomTextFontSize.addEventListener('change', function () {
        bottomTextPreview.style.fontSize = bottomTextFontSize.value + 'px';
    });
    bottomTextFontColor.addEventListener('change', function () {
        bottomTextPreview.style.color = bottomTextFontColor.value;
    });
    bottomTextFontFamily.addEventListener('change', function () {
        bottomTextPreview.style.fontFamily = bottomTextFontFamily.value;
    });
    //End code for meme settings

});
