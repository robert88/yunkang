layui.use('element', function(){

	var element = layui.element();

	/*tab控件，需要设置lay-filter=test*/
	element.on('tab(test)', function(data){
		var $li = $(this).parents(".layui-tab").find(".layui-tab-content").find(".layui-tab-item");
		var index = $(this).index();
		if(!$(this).data("initChat")&&$li.length>index){
            initChart($li.get(index))
            $(this).data("initChat",true);
		}
	});

	/*nav控件，需要设置lay-filter=test*/
	element.on('nav(test)', function(elem){
		console.log(elem)
	});

});

/*初始化echart控件*/
layui.use('echart', function(){
    // debugger
    var dom1 = $(".policeCaseHandler").data("initChat",true)[0]
    initChart(dom1)
});

function initChart(dom){
    var myChart = echarts.init(dom);
    var cur = new Date();
    var maxDay = new Date(cur.getFullYear(), cur.getMonth(), 0).getDate();
    var nextDay = new Date(cur.setMonth(cur.getMonth()+1)).getDate();
    var days = (function () {
        var temp = [];
        for(var i=cur.getDate();i<maxDay;i++){
            temp.push(i.toString().fill("00"))
        }
        for(var i=0;i<nextDay;i++){
            temp.push(i.toString().fill("00"))
        }
        return temp;
    })()
    var data = [];
    for(var i=0;i<days.length;i++){
        data.push([days[i],i])
    }
        var option = {
        tooltip: {
            trigger: 'axis',
            formatter: function (params, ticket, callback) {
                var series = params[0];
                return series.seriesName+"<br>日期："+series.value[0]+" <br>值："+series.value[1];
            }
        },
        lineStyle: {
            normal: {
                type: 'solid'
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data:days,
            splitLine:{show: true,interval:3},

        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} %'
            }
        },
        series: [
            {
                name:'警情处理',
                type:'line',
                stack: '总量',
                // color:"#4185c6",
                symbol: 'circle',
                symbolSize:[10,10],
                color:['#4083c7'],
                data:data,
                areaStyle: {normal: {color:"#e8f2fc"}},
            }
        ]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
    /*自适应*/
    $(window).on("resize",function () {
       myChart.resize();
    })
}