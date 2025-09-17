const toggleBtn = document.getElementById('toggleVideoBtn');
const seizureVideoLeft = document.getElementById('seizureVideoLeft');
const seizureVideoRight = document.getElementById('seizureVideoRight');
const avatar = document.querySelector('.avatar');
const avatarGifSrc = avatar.getAttribute('src');

let isPlaying = false;

function isMobile() {
    return window.innerWidth <= 600;
}

toggleBtn.addEventListener('click', async () => {
    const h1 = document.querySelector('.profile h1');
    const p = document.querySelector('.profile p');
    if (!isPlaying) {
        // Use visibility for smoother transition
        seizureVideoLeft.style.display = 'block';
        seizureVideoRight.style.display = 'block';
        seizureVideoLeft.currentTime = 0;
        seizureVideoRight.currentTime = 0;
        // Preload videos for smoother playback
        seizureVideoLeft.load();
        seizureVideoRight.load();
        await Promise.all([
            seizureVideoLeft.play().catch(() => {}),
            seizureVideoRight.play().catch(() => {})
        ]);
        toggleBtn.textContent = 'MAKE IT STOP';
        h1.textContent = 'Good morning';
        p.textContent = 'Long time no see!';
        // Reset GIF by re-assigning src
        avatar.setAttribute('src', '');
        setTimeout(() => {
            avatar.setAttribute('src', avatarGifSrc);
        }, 20);
        if (isMobile()) {
            avatar.classList.add('hide-avatar-mobile');
        }
    } else {
        seizureVideoLeft.pause();
        seizureVideoRight.pause();
        seizureVideoLeft.style.display = 'none';
        seizureVideoRight.style.display = 'none';
        toggleBtn.textContent = 'SEIZURE ALERT';
        h1.textContent = 'Ohayo!';
        p.textContent = 'Hisashiburi Dana';
        // Reset GIF again to ensure it starts from beginning next time
        avatar.setAttribute('src', '');
        setTimeout(() => {
            avatar.setAttribute('src', avatarGifSrc);
        }, 20);
        avatar.classList.remove('hide-avatar-mobile');
    }
    isPlaying = !isPlaying;
});
