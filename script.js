document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.getElementById('intro-screen');
    const videoElement = document.getElementById('video-bg');

    introScreen.addEventListener('click', () => {
        introScreen.classList.add('hidden');
        
        if (videoElement.paused) {
            videoElement.play().then(() => {
                videoElement.muted = false;
            }).catch(error => {
                console.log("Video otomatik oynatılamadı:", error);
            });
        }
    });

    videoElement.pause();
});