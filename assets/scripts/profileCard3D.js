const profileCard = document.getElementById('profile-card');  
if (profileCard) {
    profileCard.addEventListener('mousemove', (e) => {
        const rect = profileCard.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        // Calcular ángulos de rotación basados en posición del ratón
        const rotateY = (mouseX / rect.width) * 15;
        const rotateX = -(mouseY / rect.height) * 15;
        
        // Calcular efecto de profundidad (la zona del ratón se ve más lejana)
        const distanceFromCenter = Math.sqrt(mouseX ** 2 + mouseY ** 2);
        const maxDistance = Math.sqrt((rect.width / 2) ** 2 + (rect.height / 2) ** 2);
        const depth = 1 - (distanceFromCenter / maxDistance) * 0.1;
        
        profileCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${depth})`;
    });
    
    profileCard.addEventListener('mouseleave', () => {
        profileCard.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    });
}