document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.getElementById('contactBtn');

    // Interacción dinámica en el botón principal
    contactBtn.addEventListener('click', () => {
        contactBtn.style.transform = 'scale(0.96)';
        
        setTimeout(() => {
            contactBtn.style.transform = 'scale(1)';
            window.location.href = "mailto:tu.email@ejemplo.com?subject=Contacto%20Desde%20Portfolio%20-%20Francisco%20Javier";
        }, 120);
    });

    // Contador numérico con aceleración para las estadísticas del perfil
    const metrics = document.querySelectorAll('.metric-number');
    metrics.forEach(metric => {
        const target = parseInt(metric.innerText);
        let count = 0;
        const duration = 1200; 
        const step = target / (duration / 16); 

        const updateCount = () => {
            count += step;
            if (count < target) {
                metric.innerText = Math.floor(count);
                requestAnimationFrame(updateCount);
            } else {
                metric.innerText = target;
            }
        };
        updateCount();
    });
});
