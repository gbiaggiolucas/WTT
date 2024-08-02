document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('myChart').getContext('2d');
    
    // Defina os pacotes dos aplicativos de redes sociais de interesse
    const pacotesRedesSociais = [
        "Instagram",
        "WhatsApp",
        "YouTube",
        "X",
        "TikTok"
    ];

    // Dados simulados de uso das redes sociais nas últimas 24 horas (em minutos)
    const dadosRedesSociais = {
        "Instagram": 120,   // 2 horas
        "WhatsApp": 60,     // 1 hora
        "YouTube": 30,      // 30 minutos
        "X": 0,       // 0 minutos
        "TikTok": 45        // 45 minutos
    };

    // Cria arrays de labels e data para o gráfico
    const labels = pacotesRedesSociais;
    const data = pacotesRedesSociais.map(pkg => dadosRedesSociais[pkg] || 0);

    // Configuração do gráfico usando Chart.js
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Tempo de uso nas últimas 24 horas (em minutos)',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',   // Instagram
                    'rgba(54, 162, 235, 0.2)',   // WhatsApp
                    'rgba(255, 206, 86, 0.2)',   // YouTube
                    'rgba(75, 192, 192, 0.2)',   // X
                    'rgba(153, 102, 255, 0.2)'   // TikTok
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Minutos'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
});