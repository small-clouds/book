$(function () { 
$('.upload_zhizhao').on('change', function(){
        var status = $("#up_status");
         var btn = $(".upbtn_zhizhao");
        $("#imageform").ajaxForm({
            target: '#preview', 
            beforeSubmit:function(){
                status.show();
                btn.hide();
            }, 
            success:function(data){
                console.log(data)
                status.hide();
                btn.show();
            }, 
            error:function(){
                status.hide();
                btn.show();
        } }).submit();
    });


$('.upload_idimg').on('change', function(){
        var status = $("#up_statusId");
        var btn = $("#upbtnId");
        $("#upload_idimg").ajaxForm({
            target: '#previewId', 
            beforeSubmit:function(){
                status.show();
                btn.hide();
            }, 
            success:function(data){
                console.log(data)
                status.hide();
                btn.show();
            }, 
            error:function(){
                status.hide();
                btn.show();
        } }).submit();
    });
})