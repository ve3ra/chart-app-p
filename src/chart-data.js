const json = require('./data.json');
var values=[];
var labels=[];

for (var key in json.dataset.value) {
  labels.push(Number(key));
  values.push(Number(json.dataset.value[key]));
}

const n = values.length - 40

function getLabels() {
  var ret = [];
  const obj = json.dataset.dimension.dateweek2020010120201231.category.index
  const dateobj = json.dataset.dimension.dateweek2020010120201231.category.label
  for (var i=0; i<labels.length; i++) {
    var value = labels[i];
    const key = Object.keys(obj).find(key => obj[key] === value);
    ret.push(dateobj[key]);
  }
  return ret;
}

function getCumulativeValues() {
  var ret = [];
  var sum = 0;
  for (var i=0; i<values.length; i++) {
    sum += values[i];
    ret.push(sum);
  }
  return ret;
}

export const coronaChartData = {
  type: 'bar',
  data: {
    labels: getLabels().slice(n),
    datasets: [
      {
        label: 'COVID-19 cases in total',
        type: 'line',
        data: getCumulativeValues().slice(n),
        backgroundColor: 'rgba(54,73,93,.5)',
        borderColor: '#36495d',
        borderWidth: 3
      },
      {
        label: 'New COVID-19 cases',
        type: 'bar',
        data: values.slice(n),
        backgroundColor: 'rgba(71, 183,132,.5)',
        borderColor: '#47b784',
        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          padding: 25,
        }
      }]
    }
  }
}

export default coronaChartData;
