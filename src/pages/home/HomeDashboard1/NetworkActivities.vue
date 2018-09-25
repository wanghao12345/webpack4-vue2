<template>
    <div id="myChart" class="myChart"></div>
</template>

<script>
    export default {
        name: "NetworkActivities",
        data () {
            return {

            }
        },
        mounted () {
            this.drawLine();
        },
        methods: {
            drawLine () {
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
                    title: {
                        text: 'Network Activities',
                        show: false,
                        textStyle: {
                            color: '#73879C',
                            fontWeight: 400,
                            fontSize: 24
                        }
                    },
                    tooltip: {},
                    grid: {
                        top: 20,
                        left: 50,
                        right: 10
                    },
                    xAxis: {
                        splitLine: {
                            show: true
                        },
                        axisLine: {
                          show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            interval: 0
                        },
                        boundaryGap : false,
                        data: ["Jan01","Jan02","Jan03","Jan04","Jan05","Jan06","Jan07"]
                    },
                    yAxis: {
                        splitLine: {
                            show: true
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        maxInterval: 5
                    },
                    series: [{
                        name: '销量',
                        type: 'line',
                        symbol: 'none',
                        smooth: true,
                        areaStyle: {
                            color: '#a8e3d7'
                        },
                        lineStyle: {
                            width: 1,
                            color: '#a8e3d7'
                        },
                        data: [5, 20, 36, 10, 10, 20, 7]
                    },
                    {
                        name: '销量',
                        type: 'line',
                        symbol: 'none',
                        smooth: true,
                        areaStyle: {
                            color: '#9abcc3'
                        },
                        lineStyle: {
                            width: 1,
                            color: '#9abcc3'
                        },
                        data: [15, 10, 16, 20, 30, 20, 2]
                    }]
                })

                window.onresize = function () {
                    myChart.resize();
                }
            }
        }
    }
</script>

<style scoped>
    .myChart{
        width: 100%;
        height: 100%;
    }
</style>