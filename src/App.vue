<template>
  <div id="app">
    <Header />
    <div class="container">
      <div class="chart">
        <h2>COVID-19 cases in the Infectious Diseases Registry of Finland</h2>
        <canvas id="corona-chart"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/layout/Header';
import Chart from 'chart.js';
import coronaChartData from './chart-data.js';

export default {
  name: 'App',
  components: {
    Header
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    }
  },
  data() {
    return {
      coronaChartData: coronaChartData
    }
  },
  mounted() {
    this.createChart('corona-chart', this.coronaChartData);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.container {
  max-width: 80%;
  margin: 0 auto;
}
.chart {
  border-radius: 15px;
  box-shadow: 0px 2px 15px rgba(25, 25, 25, 0.27);
}
.chart h2 {
  margin-top: 10px;
  padding: 15px 0;
  color: rgba(71, 183,132,.5);
  border-bottom: 1px solid #323d54;
}
</style>
