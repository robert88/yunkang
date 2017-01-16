require("/web/useForm.js")
require("/web/usePage.js")
layui.use('element', function(){

    var element = layui.element();

    /*tab控件，需要设置lay-filter=test*/
    element.on('tab(test)', function(data){
    });


});



