var traffic = document.getElementById('traffic-chart');
var daily = document.getElementById('daily-chart');
var mobile = document.getElementById('mobile-chart');


var trafficChart = new Chart(traffic, {
    type: 'line',
    data: {
        xLabels: ['16-22', '23-29', '30-5', '6-12', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        yLabels: ['500', '1000', '1500', '2000', '2500'],
        responsive: true,
        maintainAspectRatio: false,
        datasets: [{
            data: [0,750, 1250, 1000, 1500, 2000, 1500, 1250, 1750, 2250, 1750, 2250],
            pointBackgroundColor: 'rgba(225, 225, 225, 1)',
            backgroundColor: [
                'rgba(115, 119, 191, .3)',
            ],
            borderColor: [
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)'
            ],
            lineTension: 0,
            borderWidth: 2
        }]
    },

   options: {
        legend: {
            display: false
        },
        layout: {
            padding: {
                left: 15
            }
        },

    scales: {
            yAxes: [{
                ticks: {
                    suggestedMin: 500,
                    suggestedMax: 2500,
                    fontFamily: 'Roboto',
                    fontSize: 10,
                    padding: 7
                },
                gridLines: {
                    drawTicks: false,
                }
            }],

            xAxes: [{
                ticks: {
                    fontFamily: 'Roboto',
                    fontSize: 10,
                    padding: 7,
                },
                gridLines:{
                    tickMarkLength: 20,
                    drawTicks: false,
                }
            }]
        }
    }
});

var dailyChart = new Chart(daily, {
    type: 'bar',
    data: {
        xLabels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        yLabels: ['50', '100', '150', '200', '250'],
        responsive: true,
        maintainAspectRatio: false,
        datasets: [{
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: 'rgba(115, 119, 191, 1)'
        }]
    },

    options: {
        legend: {
            display: false
        },
        layout: {
            padding: {
                left: 15
            }
        },

    scales: {
        yAxes: [{
            ticks: {
                suggestedMin: 50,
                suggestedMax: 250,
                fontFamily: 'Roboto',
                fontSize: 10,
                padding: 7
            },
            gridLines: {
                drawTicks: false,
            }
        }],

        xAxes: [{
            ticks: {
                fontFamily: 'Roboto',
                fontSize: 10,
                padding: 7,
            },
            gridLines:{
                tickMarkLength: 20,
                drawTicks: false,
            }
        }]
    }
  }
});

var mobileChart = new Chart(mobile, {
    type: 'doughnut',
    data: {
        labels: ['Phones', 'Tablets', 'Desktop'],
        responsive: true,
        maintainAspectRatio: false,
        datasets: [{
            data: [75, 25, 25],
            backgroundColor: ['rgba(115, 119, 191, 1)', 'purple', '#1B264F']
        }]
    },

    options: {
        legend: {
            position: 'right',
            labels: {
                fontFamily: 'Roboto',
            },
        },

        rotation: 0.1 * Math.PI

    }
});
