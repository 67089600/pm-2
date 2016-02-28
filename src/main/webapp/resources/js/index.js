$(function(){
    var title = {
        'projectIntrComp':'项目介绍',
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

    //window.jQuery || document.write("<script src='<%=basePath%>/resources/assets/js/fuelux/fuelux.tree.min.js'>"+"<"+"/script>");




        var sampleData = initiateDemoData();//see below

        $('#tree').ace_tree({
            dataSource: sampleData['dataSource'] ,
            loadingHTML:'<div class="tree-loading"><i class="ace-icon fa fa-refresh fa-spin blue"></i></div>',
            'open-icon' : 'ace-icon fa fa-folder-open',
            'close-icon' : 'ace-icon fa fa-folder',
            'selectable' : false,
            'multiSelect': false,
            'selected-icon' : false,
            'unselected-icon' : false
        });

        function initiateDemoData(){
            var tree_data = {
                'pictures' : {text: 'Pictures', type: 'folder', 'icon-class':'red'}	,
                'music' : {text: 'Music', type: 'folder', 'icon-class':'orange'}	,
                'video' : {text: 'Video', type: 'folder', 'icon-class':'blue'}	,
                'documents' : {text: 'Documents', type: 'folder', 'icon-class':'green'}	,
                'backup' : {text: 'Backup', type: 'folder'}	,
                'readme' : {text: '<i class="ace-icon fa fa-file-text grey"></i> ReadMe.txt', type: 'item'},
                'manual' : {text: '<i class="ace-icon fa fa-book blue"></i> Manual.html', type: 'item'}
            }
            tree_data['music']['additionalParameters'] = {
                'children' : [
                    {text: '<i class="ace-icon fa fa-music blue"></i> song1.ogg', type: 'item'},
                    {text: '<i class="ace-icon fa fa-music blue"></i> song2.ogg', type: 'item'},
                    {text: '<i class="ace-icon fa fa-music blue"></i> song3.ogg', type: 'item'},
                    {text: '<i class="ace-icon fa fa-music blue"></i> song4.ogg', type: 'item'},
                    {text: '<i class="ace-icon fa fa-music blue"></i> song5.ogg', type: 'item'}
                ]
            }
            tree_data['video']['additionalParameters'] = {
                'children' : [
                    {text: '<i class="ace-icon fa fa-film blue"></i> movie1.avi', type: 'item'},
                    {text: '<i class="ace-icon fa fa-film blue"></i> movie2.avi', type: 'item'},
                    {text: '<i class="ace-icon fa fa-film blue"></i> movie3.avi', type: 'item'},
                    {text: '<i class="ace-icon fa fa-film blue"></i> movie4.avi', type: 'item'},
                    {text: '<i class="ace-icon fa fa-film blue"></i> movie5.avi', type: 'item'}
                ]
            }
            tree_data['pictures']['additionalParameters'] = {
                'children' : {
                    'wallpapers' : {text: 'Wallpapers', type: 'folder', 'icon-class':'pink'},
                    'camera' : {text: 'Camera', type: 'folder', 'icon-class':'pink'}
                }
            }
            tree_data['pictures']['additionalParameters']['children']['wallpapers']['additionalParameters'] = {
                'children' : [
                    {text: '<i class="ace-icon fa fa-picture-o green"></i> wallpaper1.jpg', type: 'item'},
                    {text: '<i class="ace-icon fa fa-picture-o green"></i> wallpaper2.jpg', type: 'item'},
                    {text: '<i class="ace-icon fa fa-picture-o green"></i> wallpaper3.jpg', type: 'item'},
                    {text: '<i class="ace-icon fa fa-picture-o green"></i> wallpaper4.jpg', type: 'item'}
                ]
            }
            tree_data['pictures']['additionalParameters']['children']['camera']['additionalParameters'] = {
                'children' : [
                    {text: '<i class="ace-icon fa fa-picture-o green"></i> photo1.jpg', type: 'item'},
                    {text: '<i class="ace-icon fa fa-picture-o green"></i> photo2.jpg', type: 'item'},
                    {text: '<i class="ace-icon fa fa-picture-o green"></i> photo3.jpg', type: 'item'},
                    {text: '<i class="ace-icon fa fa-picture-o green"></i> photo4.jpg', type: 'item'},
                    {text: '<i class="ace-icon fa fa-picture-o green"></i> photo5.jpg', type: 'item'},
                    {text: '<i class="ace-icon fa fa-picture-o green"></i> photo6.jpg', type: 'item'}
                ]
            }


            tree_data['documents']['additionalParameters'] = {
                'children' : [
                    {text: '<i class="ace-icon fa fa-file-text red"></i> document1.pdf', type: 'item'},
                    {text: '<i class="ace-icon fa fa-file-text grey"></i> document2.doc', type: 'item'},
                    {text: '<i class="ace-icon fa fa-file-text grey"></i> document3.doc', type: 'item'},
                    {text: '<i class="ace-icon fa fa-file-text red"></i> document4.pdf', type: 'item'},
                    {text: '<i class="ace-icon fa fa-file-text grey"></i> document5.doc', type: 'item'}
                ]
            }

            tree_data['backup']['additionalParameters'] = {
                'children' : [
                    {text: '<i class="ace-icon fa fa-archive brown"></i> backup1.zip', type: 'item'},
                    {text: '<i class="ace-icon fa fa-archive brown"></i> backup2.zip', type: 'item'},
                    {text: '<i class="ace-icon fa fa-archive brown"></i> backup3.zip', type: 'item'},
                    {text: '<i class="ace-icon fa fa-archive brown"></i> backup4.zip', type: 'item'}
                ]
            }
            var dataSource = function(options, callback){
                var $data = null
                if(!("text" in options) && !("type" in options)){
                    $data = tree_data;//the root tree
                    callback({ data: $data });
                    return;
                }
                else if("type" in options && options.type == "folder") {
                    if("additionalParameters" in options && "children" in options.additionalParameters)
                        $data = options.additionalParameters.children || {};
                    else $data = {}//no data
                }

                if($data != null)//this setTimeout is only for mimicking some random delay
                    setTimeout(function(){callback({ data: $data });} , parseInt(Math.random() * 500) + 200);
            }

            return {'dataSource' : dataSource}
        }

});