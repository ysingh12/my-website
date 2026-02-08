// 1. Chart.js Initialization
// This finds the canvas element in HTML and draws the graph
const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'line', // Can be 'bar', 'pie', 'radar', etc.
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Productivity Index',
            data: [65, 59, 80, 81, 56, 95], // Replace this with your real stats later
            borderColor: '#00ffc8', // Matches our Neon Cyan CSS variable
            backgroundColor: 'rgba(0, 255, 200, 0.1)', // Transparent fill
            borderWidth: 2,
            tension: 0.4, // Makes the line curvy (0 is straight lines)
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: '#e0e0e0',
                    font: { family: 'JetBrains Mono' }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: { color: 'rgba(255, 255, 255, 0.05)' },
                ticks: { color: '#a0a0a0' }
            },
            x: {
                grid: { display: false },
                ticks: { color: '#a0a0a0' }
            }
        }
    }
});

// 2. Simple Console Message
console.log("%c Welcome to Yash's Sandbox ", "background: #00ffc8; color: #000; font-size: 14px; padding: 5px; font-weight: bold;");
