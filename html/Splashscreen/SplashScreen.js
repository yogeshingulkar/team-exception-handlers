export function SplashScreen() {
    return `
        <div id="splash" class="splash-overlay">
            <video
                id="splash-video"
                autoplay
                muted
                playsinline
                class="splash-video"
            >
                <source src="../videos/VideoProject1.mp4" type="video/mp4">
            </video>
        </div>
    `;
}
