/**
 * Created by Administrator on 2017/1/14.
 */

layui.use('form', function(){
    var form = layui.form();

    //自定义验证规则
    form.verify({
        title: function(value){
            if(value.length < 5){
                return '标题也太短了吧';
            }
        }
        ,pass: [/(.+){6,12}$/, '密码必须6到12位']
    });

    form.on('checkbox', function(data){
        var $check;
        var $parent =  $(data.elem).parents(".layui-table");
        var $item = $parent.find("tbody").find("input[type=checkbox]");
        var $allCheckbox = $parent.find("input[type=checkbox]");
        if($(data.elem).hasClass("layui-select-all")){

            if(data.elem.checked){
                $check = $allCheckbox.filter(function () {
                    return this.checked==false;
                })
            }else{
                $check = $allCheckbox.filter(function () {
                    return this.checked==true;
                })
            }
            $check.trigger("click").next().toggleClass("layui-form-checked");
        }else{
            checkSelect($item,$parent);
        }
    });
    function checkSelect($item,$parent){
        var count=0;
        $item.each(function (index,check) {
            if(check.checked){
                count++
            }
        })
        if(count==$item.length){
            $parent.find(".layui-select-all").filter(function () {
                return this.checked==false;
            }).trigger("click").next().toggleClass("layui-form-checked");
        }else{
            $parent.find(".layui-select-all").filter(function () {
                return this.checked==true;
            }).trigger("click").next().toggleClass("layui-form-checked");
        }
    }
    /*删除选中的*/
    $(".delSelectItem").click(function () {
        var $parent =  $(this).parents(".layui-table");
        var $item = $parent.find("tbody").find("input[type=checkbox]").filter(function () {
            return this.checked==true;
        });
        $item.each(function () {
            $(this).parents("tr").remove();
        })
        $parent.find(".layui-select-all").trigger("click").next().toggleClass("layui-form-checked");
    })
    //监听提交
    form.on('submit(*)', function(data){
        console.log(data)
        return false;
    });

});

