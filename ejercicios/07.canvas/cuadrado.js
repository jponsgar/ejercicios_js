const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const squareSize = 25;
let yPosition = 0;
const speed = 2; // Velocidad de caída en píxeles

function drawSquare() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect((canvas.width - squareSize) / 2, yPosition, squareSize, squareSize);
}

function updatePosition() {
    if (yPosition + squareSize < canvas.height) {
        yPosition += speed;
    } else {
        yPosition = canvas.height - squareSize; // Asegurarse de que el cuadrado se quede exactamente en el fondo
    }
}

function animate() {
    updatePosition();
    drawSquare();
    if (yPosition + squareSize < canvas.height) {
        requestAnimationFrame(animate);
    }
}

animate();