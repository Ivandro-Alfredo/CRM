document.addEventListener('DOMContentLoaded', function() {
    const clientesCtx = document.getElementById('clientesChart').getContext('2d');
    const clienteCtx = document.getElementById('clienteChart').getContext('2d');
    const frequenciaCtx = document.getElementById('frequenciaChart').getContext('2d');
    const performanceCtx = document.getElementById('performanceChart').getContext('2d');

    new Chart(clientesCtx, {
        type: 'bar',
        data: {
            labels: ['Novos', 'Regulares', 'Inativos', 'VIPs'],
            datasets: [{
                data: [30, 40, 20, 10],
                backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4caf50']
            }]
        },
        options: {
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    new Chart(clienteCtx, {
        type: 'pie',
        data: {
            labels: ['De 0 até 3', 'De 4 até 7', 'De 8 até 10'],
            datasets: [{
                data: [25, 25, 50],
                backgroundColor: ['#ff6384', '#36a2eb', '#ffce56']
            }]
        }
    });

    new Chart(frequenciaCtx, {
        type: 'bar',
        data: {
            labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
            datasets: [{
                label: 'Atendimentos (%)',
                data: [50, 75, 60, 80, 90, 40, 30],
                backgroundColor: '#36a2eb'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + "%";
                        }
                    }
                }
            }
        }
    });

    new Chart(performanceCtx, {
        type: 'pie',
        data: {
            labels: ['Mal atendimento', 'Danos físicos', 'Produtos insatisfatórios', 'Aplicação inadequada', 'Outras reclamações'],
            datasets: [{
                data: [20, 20, 20, 20, 20],
                backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4caf50', '#9b59b6']
            }]
        },
        options: {
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
});
