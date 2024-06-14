document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('myChart').getContext('2d');
    
    // Defina os pacotes dos aplicativos de redes sociais de interesse
    const pacotesRedesSociais = [
        "com.instagram.android",
        "com.whatsapp",
        "com.google.android.youtube",
        "com.twitter.android",
        "com.zhiliaoapp.musically"  // Pacote do TikTok no Android
    ];

    // Objeto para armazenar o tempo de uso das redes sociais
    let dadosRedesSociais = {};

    // Inicializa o UsageStatsManager
    const usageStatsManager = (UsageStatsManager || window.UsageStatsManager);
    
    if (usageStatsManager) {
        const endTime = Date.now();
        const startTime = endTime - (24 * 60 * 60 * 1000); // 24 horas atrás

        // Obtém estatísticas de uso de pacotes
        const queryUsageStats = usageStatsManager.queryUsageStats(
            UsageStatsManager.INTERVAL_DAILY,
            startTime,
            endTime
        );

        // Processa as estatísticas de uso
        queryUsageStats.forEach(stats => {
            const packageName = stats.getPackageName();
            const totalUsageTime = stats.getTotalTimeForeground() / (1000 * 60); // converte para minutos

            // Verifica se o pacote pertence a uma rede social de interesse
            if (pacotesRedesSociais.includes(packageName)) {
                dadosRedesSociais[packageName] = totalUsageTime;
            }
        });

        console.log('Dados de uso de redes sociais nas últimas 24 horas:', dadosRedesSociais);

        // Cria arrays de labels e data para o gráfico
        const labels = pacotesRedesSociais.map(pkg => pkg.split('.').pop());
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
                        'rgba(75, 192, 192, 0.2)',   // Twitter
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
    } else {
        // Se o UsageStatsManager não estiver disponível
        console.error('UsageStatsManager não está disponível no dispositivo.');
    }
});
