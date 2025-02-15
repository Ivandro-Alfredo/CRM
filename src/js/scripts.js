
        // const clientesCtx = document.getElementById('clientesChart').getContext('2d');
        const clienteCtx = document.getElementById('clienteChart').getContext('2d');
        const satisfacaoCtx = document.getElementById('satisfacaoChart').getContext('2d');
        // const receitaCtx = document.getElementById('receitaChart').getContext('2d');
        const servicoCtx = document.getElementById('servicoChart').getContext('2d');
        const performanceCtx = document.getElementById('performanceChart').getContext('2d');
        

        // Seleciona todos os botões de dropdown
    document.querySelectorAll(".drop-btn").forEach(btn => {
        btn.addEventListener("click", function(event) {
            event.preventDefault();
            let parent = this.parentElement;
            parent.classList.toggle("active");
        });
    });


        new Chart(clienteCtx, {
            type: 'pie',
            data: {
                labels: ['Novos', 'Fidelizados', 'Inativos', ''],
                datasets: [{
                    data: [30, 40, 20, 10],
                    backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4caf50']
                }]
            }
        });

        new Chart(satisfacaoCtx, {
            type: 'polarArea',
            data: {
                labels: ['De 0 até 3', 'De 4 até 7', 'De 8 até 10'],
                datasets: [{
                    data: [25, 25, 50],
                    backgroundColor: ['#ff6384', '#36a2eb', '#ffce56']
                }]
            }
        });

        new Chart(servicoCtx, {
            type: 'bar',
            data: {
                labels: ['Massagem', 'Depilação', 'Cabelereiro', 'Unhas'],
                datasets: [{
                    data: [30, 38, 20, 45],
                    backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4caf50']
                }]
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


        // new Chart(receitaCtx, {
        //     type: 'line',
        //     data: {
        //         labels: ['Massagem', 'Cabelo', 'Unhas', 'Depilação'],
        //         datasets: [{
        //             label: 'Receita (R$)',
        //             data: [5000, 3000, 2500, 2000],
        //             backgroundColor: '#36a2eb'
        //         }]
        //     }
        // });

   