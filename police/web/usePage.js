/**
 * Created by Administrator on 2017/1/14.
 */
layui.use(['laypage'], function(){
    var laypage = layui.laypage
    laypage({
        cont: 'pageFooter'
        ,pages: 10,
        showTotal:true,
        total:20,
        // prev:false,
        showPervAway:true,
        first:false,
        last:false
    });

});