require("/web/useForm.js")

/*初始化echart控件*/
layui.use('echart', function(){
    // debugger
    var dom1 = $(".echat-month-reception")[0]
    var dom2 = $(".echat-day-reception")[0]
    var dom31 = $(".echat-day-pie-reception1")[0]
    var dom32 = $(".echat-day-pie-reception2")[0]
    var dom33 = $(".echat-day-pie-reception3")[0]
    var dom41 = $(".echat-warn-case1")[0]
    var dom42 = $(".echat-warn-case2")[0]
    var dom51 = $(".echat-all-data1")[0]
    var dom52 = $(".echat-all-data2")[0]
    var dom53 = $(".echat-all-data3")[0]
    var monthInfo = getLastlyMonthInfo();
     /*接警数*/
    initechatMonthReception(dom1,getLoaclData(monthInfo,'#4083c7','接警数/日期',"{0}-{1}接警数情况"))
    
    /*处警数*/
    initechatMonthReception(dom2,getLoaclData(monthInfo,'#ffcc01','处警数/日期',"{0}-{1}处警数情况"))
     /*案件类型占比*/
    initechatDayPieReception(dom31,{
        name:"案件类型占比",
        legendData:['民事案件','治安、行政案件','刑事案件'],
data:[
                {value:335, name:'民事案件',itemStyle:{normal:{color:"#f6c463"}}},
                {value:310, name:'邮件营销',itemStyle:{normal:{color:"#89c726"}}},
                {value:234, name:'刑事案件',itemStyle:{normal:{color:"#2ba6e1"}}}
            ],
        title:"{0}至\n{1}\n案件类型占比".tpl(monthInfo.curDateFormat,monthInfo.nextDateFormat)
    })
        /*接警方式占比*/
        initechatDayPieReception(dom32,{
        name:"接警方式占比",
        legendData:['指挥中心指令','领导指令','群众举报','部门报警',"群众扭送","执勤巡逻发现","投案自首","其他"],
data:[
                {value:335, name:'指挥中心指令',itemStyle:{normal:{color:"#70b6fe"}}},
                {value:310, name:'领导指令',itemStyle:{normal:{color:"#89c726"}}},
                {value:234, name:'群众举报',itemStyle:{normal:{color:"#ffcc01"}}},
                {value:234, name:'部门报警',itemStyle:{normal:{color:"#ef4f2f"}}},
                {value:234, name:'群众扭送',itemStyle:{normal:{color:"#c48750"}}},
                {value:234, name:'执勤巡逻发现',itemStyle:{normal:{color:"#44dcf3"}}},
                {value:234, name:'投案自首',itemStyle:{normal:{color:"#fd94e6"}}},
                {value:234, name:'其他',itemStyle:{normal:{color:"#663398"}}}
            ],
        title:"{0}至\n{1}\n接警方式占比".tpl(monthInfo.curDateFormat,monthInfo.nextDateFormat)
    })

        /*案件状态占比*/
        initechatDayPieReception(dom33,{
        name:"案件状态占比",
        legendData:['受理中','执行中','已立案',"审理中","已结案"],
data:[
                {value:335, name:'受理中',itemStyle:{normal:{color:"#fbb53c"}}},
                {value:310, name:'执行中',itemStyle:{normal:{color:"#89c726"}}},
                {value:234, name:'已立案',itemStyle:{normal:{color:"#4085c8"}}},
                {value:234, name:'审理中',itemStyle:{normal:{color:"#ff6600"}}},
                {value:234, name:'已结案',itemStyle:{normal:{color:"#2ba6e1"}}}
            ],
        title:"{0}至\n{1}\n案件状态占比".tpl(monthInfo.curDateFormat,monthInfo.nextDateFormat)
    })
                /*异常案件情况1*/
        initechatBarReception(dom41,{
        name:"异常案件情况",
        legendData:['应受未受','受案不规范','无接警受案','立案异常'],
data:[
                {value:335, name:'应受未受',color:"#40c880"},
                {value:310, name:'受案不规范',color:"#ff6600"},
                {value:234, name:'无接警受案',color:"#4085c8"},
                {value:234, name:'立案异常',color:"#eb4863"},
            ],
        title:"异常案件情况"
    })
                        /*异常案件情况2*/
        initechatBarReception(dom42,{
        name:"异常案件情况",
        legendData:['受案超期','立案超期','案件超期'],
data:[
                {value:335, name:'受案超期',color:"#ffcc01"},
                {value:310, name:'立案超期',color:"#ef4f2f"},
                {value:234, name:'案件超期',color:"#44dcf3"},
            ],
        title:"异常案件情况"
    })

        /*平台案件数占比*/
        initechatDayPieReception(dom51,{
        name:"平台案件数占比",
        legendData:['110接警中心','警综平台','警情中心平台'],
data:[
                {value:335, name:'110接警中心',itemStyle:{normal:{color:"#ffcc01"}}},
                {value:310, name:'警综平台',itemStyle:{normal:{color:"#2ba6e1"}}},
                {value:234, name:'警情中心平台',itemStyle:{normal:{color:"#89c726"}}},
            ],
        title:"\n平台案件数占比\n".tpl(monthInfo.curDateFormat,monthInfo.nextDateFormat)
    })
        /*平台案件处警反馈占比*/
        initechatDayPieReception(dom52,{
        name:"平台案件处警反馈占比",
        legendData:['110接警中心','警综平台','警情中心平台'],
data:[
                {value:335, name:'110接警中心',itemStyle:{normal:{color:"#ef4f2f"}}},
                {value:310, name:'警综平台',itemStyle:{normal:{color:"#663398"}}},
                {value:234, name:'警情中心平台',itemStyle:{normal:{color:"#fd94e6"}}},
            ],
        title:"平台案件\n处警反馈占比\n".tpl(monthInfo.curDateFormat,monthInfo.nextDateFormat)
    })
                /*平台案件结案占比*/
        initechatDayPieReception(dom53,{
        name:"平台案件结案占比",
        legendData:['110接警中心','警综平台','警情中心平台'],
data:[
                {value:335, name:'110接警中心',itemStyle:{normal:{color:"#fbb53c"}}},
                {value:310, name:'警综平台',itemStyle:{normal:{color:"#89c726"}}},
                {value:234, name:'警情中心平台',itemStyle:{normal:{color:"#ff6600"}}},
            ],
        title:"平台案件\n结案占比\n".tpl(monthInfo.curDateFormat,monthInfo.nextDateFormat)
    })
    // initChart(dom3)
    // initChart(dom4)
    // initChart(dom5)
    // initChart(dom6)
});
function getLastlyMonthInfo(){
    var cur = new Date();
    var maxDay = new Date(cur.getFullYear(), cur.getMonth(), 0).getDate();
    cur.setMonth(cur.getMonth()+1);
     nextDate = cur
    cur = new Date();
    var nextDay = nextDate.getDate();
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


    var curDateFormat = cur.format("yy年MM月dd日");
    var nextDateFormat = new Date(cur.setMonth(cur.getMonth()+1)).format("yy年MM月dd日");
    return {
        days:days,
        curDateFormat : cur.format("yy年MM月dd日"),
        nextDateFormat : new Date(cur.setMonth(cur.getMonth()+1)).format("yy年MM月dd日")

    }
}
function getLoaclData(monthInfo,color,yTitle,titleFormat){
    var opts = {};
    var days= monthInfo.days;
    var curDateFormat = monthInfo.curDateFormat;
    var nextDateFormat = monthInfo.nextDateFormat;
    var data = [];
    for(var i=0;i<days.length;i++){
        data.push([days[i],i+1])
    }
    var title = titleFormat.tpl(curDateFormat,nextDateFormat)
    return {
        days:days,
        data:data,
        title:title,
        yTitle:yTitle,
        color:color
    }
}
function initechatMonthReception(dom,opts){
    var myChart = echarts.init(dom);
      var option = {
        title:{
            text:opts.title,
            x:"center",
            y:"bottom",
            textStyle:{
                fontSize:14,
                color:"#333",
                fontWeight:"normal"
            }
        },
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
            axisTick:false,
            // boundaryGap: ["30%","10%"],
            // max:false,
            // min:false,
            data:opts.days,
            // splitLine:{show: true,interval:3},

        },
        yAxis: {
            nameLocation :"start",
            name : opts.yTitle,
            type: 'value',
            // axisLabel: {
            //     formatter: '{value} %'
            // },
            splitLine:{show: false}
        },
        series: [
            {
                name:'警情处理',
                type:'bar',
                stack: '总量',
                barWidth:8,
                // color:"#4185c6",
                symbol: 'circle',
                symbolSize:[10,10],
                color:[opts.color],
                data:opts.data,
                label: {
                    normal:{
                                show: true,
                    position: 'top',
                        formatter:function(obj){
                            return obj.data[1];
                        }
                    }
                    
                }
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
function initechatBarReception(dom,opts){
     var myChart = echarts.init(dom);
var seriesArr = [];
for(var i=0;i<opts.data.length;i++){
    seriesArr.push(
            {name:opts.legendData[i],
            type:'bar',
            barWidth:50,
            color:[opts.data[i].color],
            label: {
                    normal:{
                     show: true,
                    position: 'top'
                    
                }
            },
            data:opts.data.slice(i,i+1)
            }
        )
}
var option = {
    title:{
        text:opts.title,
        x:"center",
        y:240,
        textStyle:{
            fontSize:14,
            color:"#666",
            fontWeight:"normal"
        }
    },        grid: {
            bottom:"40%",
        },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        // orient: 'vertical',
        x: 'center',
        y:300,
        // top:"bottom",
        data:opts.legendData//['直达','邮件营销','联盟广告']
    },
            xAxis: {
            type: 'category',
            boundaryGap: false,
            // max:false,
            // min:false,
            data:opts.legendData,
            splitLine:{show: false},
            axisTick :{show: false},
            axisLabel :{show: false},
            // splitLine:{show: true,interval:3},

        },
        yAxis: {
            type: 'value',
            // axisLabel: {
            //     formatter: '{value} %'
            // },
            splitLine:{show: false}
        },
    series: seriesArr
};
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
    /*自适应*/
    $(window).on("resize",function () {
        myChart.resize();
    })   
}
function initechatDayPieReception(dom,opts){
     var myChart = echarts.init(dom);

var option = {
    title:{
        text:opts.title,
        x:"center",
        y:"34%",
        textStyle:{
            fontSize:14,
            color:"#666",
            fontWeight:"normal"
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        // orient: 'vertical',
        x: 'center',
        y:300,
        // top:"bottom",
        data:opts.legendData//['直达','邮件营销','联盟广告']
    },
    series: [

        {
            name:opts.name,
            type:'pie',
            // color:[,"#89c726","#2ba6e1 "],
            radius: ['40%', '55%'],
            center:["50%","40%"],
            data:opts.data
            // [
            //     {value:335, name:'直达',itemStyle:{normal:{color:"#f6c463"}}},
            //     {value:310, name:'邮件营销',itemStyle:{normal:{color:"#89c726"}}},
            //     {value:234, name:'联盟广告',itemStyle:{normal:{color:"#2ba6e1"}}}
            // ]
        }
    ]
};
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
    /*自适应*/
    $(window).on("resize",function () {
        myChart.resize();
    })   
}