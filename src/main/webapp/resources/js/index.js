$(function(){
    var title = {
        'dbComp':'数据库管理'
    };

    $('#pm-nav li a').click(function(){
        var compEle = $(this).attr('comp');
        var middelComp = "";
        var childTitle = title[compEle];;
        switch (compEle){
            case 'dbComp'://数据库SQL脚本组件
                middelComp = dbComp.init();
                break;
        }
        $('#childTitle').html(childTitle);
        $('#middle-content').html(middelComp);
    });
});