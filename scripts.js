const toggleBtn = document.getElementById('toggleVideoBtn');
const seizureVideoLeft = document.getElementById('seizureVideoLeft');
const seizureVideoRight = document.getElementById('seizureVideoRight');
const avatar = document.querySelector('.avatar');
const heading = document.querySelector('h1');
const subtext = document.querySelector('p');

let isPlaying = false;


function isMobile() {
    return window.innerWidth <= 600;
}

toggleBtn.addEventListener('click', async () => {
    if (!isPlaying) {
        seizureVideoLeft.style.display = 'block';
        seizureVideoRight.style.display = 'block';
        seizureVideoLeft.currentTime = 0;
        seizureVideoRight.currentTime = 0;
        await Promise.all([seizureVideoLeft.play(), seizureVideoRight.play()]);
        toggleBtn.textContent = 'MAKE IT STOP';
        heading.textContent = 'Good morning';
        subtext.textContent = 'Long time no see!';
        if (isMobile()) {
            avatar.classList.add('hide-avatar-mobile');
        }
    } else {
        seizureVideoLeft.pause();
        seizureVideoRight.pause();
        seizureVideoLeft.style.display = 'none';
        seizureVideoRight.style.display = 'none';
        toggleBtn.textContent = 'SEIZURE ALERT';
        heading.textContent = 'Ohayo!';
        subtext.textContent = 'Hisashiburi dana';
        avatar.classList.remove('hide-avatar-mobile');
    }
    isPlaying = !isPlaying;
});
