// Scroll Wave Animation Script
// Check if device is mobile
const isMobile = () => {
    return window.innerWidth <= 768 || 
           /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Only initialize animation on desktop
if (isMobile()) {
    console.log('Scroll wave animation disabled on mobile');
} else {
    const waveContainer = document.getElementById('scroll-wave-container');
    const waveCanvas = document.getElementById('wave-canvas');

    if (!waveCanvas) {
        console.error('Wave canvas not found');
    } else {
    const ctx = waveCanvas.getContext('2d');
    
    // Canvas dimensions (will be updated on resize)
    let canvasWidth = 0;
    let canvasHeight = 0;
    
    // Function to update canvas dimensions
    function updateCanvasDimensions() {
        const containerRect = waveContainer.getBoundingClientRect();
        waveCanvas.width = containerRect.width;
        waveCanvas.height = containerRect.height;
        canvasWidth = waveCanvas.width;
        canvasHeight = waveCanvas.height;
    }
    
    // Initial setup
    updateCanvasDimensions();
    
    // Colors matching cursor
    const color1 = 'rgba(163, 166, 255, 0.6)'; // Purple/Blue
    const color2 = 'rgba(109, 245, 225, 1)';    // Cyan/Teal
    
    let scrollProgress = 0;
    let waveOffset = 0;
    let animationId = null;
    let isScrolling = false;
    let scrollTimeout = null;
    let opacity = 0;
    
    function drawWave(time) {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        
        // Gaussian parameters
        const gaussianAmplitude = 25;
        const gaussianWidth = 60;
        
        // Calculate scroll progress (0 to 1)
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        scrollProgress = documentHeight > 0 ? window.scrollY / documentHeight : 0;
        
        // Calculate position where gaussian should be centered (based on scroll position)
        // Keep it within bounds so the full gaussian bell curve is always visible
        const gaussianCenterYRaw = scrollProgress * canvasHeight;
        const gaussianCenterY = Math.max(gaussianWidth * 3, Math.min(gaussianCenterYRaw, canvasHeight - gaussianWidth * 3));
        
        // Wave animation offset - slower speed
        waveOffset = (time * 0.002) % (Math.PI * 2);
        
        // Always keep the animation visible
        opacity = 1;
        
        if (opacity > 0) {
            // Draw first line (purple/blue) - VERTICAL with gaussian deformation at scroll position
            ctx.beginPath();
            
            for (let y = 0; y <= canvasHeight; y += 1) {
                // Calculate distance from the gaussian center
                const distFromGaussianCenter = Math.abs(y - gaussianCenterY);
                
                // Apply gaussian deformation smoothly across entire height
                const normalizedY = distFromGaussianCenter / gaussianWidth;
                const gaussianValue = gaussianAmplitude * Math.exp(-(normalizedY * normalizedY) / 2);
                
                // Add animation
                const animationOffset = Math.sin(waveOffset) * 5;
                
                const x = canvasWidth - 10 - (gaussianValue + animationOffset);
                
                if (y === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            
            ctx.strokeStyle = color1.replace('0.6', (opacity * 0.6).toString());
            ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.stroke();
            
            // Draw second line (cyan/teal) - VERTICAL with gaussian deformation at scroll position
            ctx.beginPath();
            
            for (let y = 0; y <= canvasHeight; y += 1) {
                // Calculate distance from the gaussian center
                const distFromGaussianCenter = Math.abs(y - gaussianCenterY);
                
                // Apply gaussian deformation smoothly across entire height
                const normalizedY = distFromGaussianCenter / (gaussianWidth * 1.2);
                const gaussianValue = gaussianAmplitude * 0.7 * Math.exp(-(normalizedY * normalizedY) / 2);
                
                // Add animation with phase offset
                const animationOffset = Math.sin(waveOffset + Math.PI * 0.5) * 5;
                
                const x = canvasWidth - 25 + (gaussianValue + animationOffset);
                
                if (y === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            
            ctx.strokeStyle = color2.replace('1)', (opacity).toString() + ')');
            ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.stroke();
        }
        
        // Continue animation
        animationId = requestAnimationFrame(drawWave);
    }
    
    // Scroll event listener
    window.addEventListener('scroll', () => {
        isScrolling = true;
        
        // Clear existing timeout
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        // Set timeout to detect when scroll ends
        scrollTimeout = setTimeout(() => {
            isScrolling = false;
        }, 500);
    }, { passive: true });
    
    // Start animation
    animationId = requestAnimationFrame(drawWave);
    
    // Handle window resize (includes zoom changes)
    window.addEventListener('resize', () => {
        updateCanvasDimensions();
    }, { passive: true });
    }
}
