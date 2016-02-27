$(function(){
    var title = {
        'dbComp':'数据库管理',
        'dbDetailComp':'数据表详情',
        'areaComp':'行政区域管理',
        'siteComp':'监测站管理',
        'poiComp':'POI数据管理',
        'needDocumentComp':'需求文档',
        'designDocumentComp':'设计文档',
        'develorDocumentComp':'开发文档',
        'projectDocumentComp':'项目约束',
        'testDocumentComp':'测试文档',
        'projectCodeComp':'项目代码',
        'sysTaskComp':'系统程序任务配置',
        'ideTaskComp':'接口数据同步任务配置',
        'forkTaskComp':'数据跟踪配置',
        'logComp':'项目日常日志'
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