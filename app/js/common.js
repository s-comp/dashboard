
$('.toggle').click(function() {
  $('.page-wrap').toggleClass('active');
  $(this).toggleClass("on");
})
// VISITORS/////
var data = {
  labels: [ "JAN", 'FEB', 'MAR', 'APR', 'MAY', 'JUN' ],
  datasets: [
    {
      label: 'Visitors',
      backgroundColor: "rgba(0, 198, 255, 0.7)",
      data: [32, 30, 27, 30, 38, 38]
    }
  ]
}

var ctx = document.getElementById('visitors').getContext('2d');

var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
});

// sales////////

var data = {
  labels: [],
  datasets: [
    {
      label: 'Sales',
      backgroundColor: "rgba(0, 198, 255, 0.7)",
      data: [32, 30, 27, 30, 38, 38]
    }
  ]
}

var ctx = document.getElementById('sales').getContext('2d');

var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
});

// PROFIT////////
var data = {
  labels: [],
  datasets: [
    {
      label: 'Total Charge & Profit',
      backgroundColor: "rgba(0, 198, 255, 0.7)",
      data: [32, 30, 27, 30, 38, 38]
    }
  ]
}

var ctx = document.getElementById('profit').getContext('2d');

var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
});

// traffic

var data = {
    labels: [
        "Visitors",
        "Registered",
        "Bounce"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#ffc400",
                "#38a4dd",
                "#b39ddb"
            ],
            hoverBackgroundColor: [
                "#ffc400",
                "#38a4dd",
                "#b39ddb"
            ]
        }]
};

var ctx = document.getElementById('traffic').getContext('2d');

// var canvas = document.getElementsById('traffic')[0];

var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
});
