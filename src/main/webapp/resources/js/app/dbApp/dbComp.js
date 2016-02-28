/**
 * 数据库组件
 * @type {{}}
 */
var dbComp = {
    option:{
        grid_data:
            [ {num:"序号",cb:"checkbox",tools:"操作",id:"id",name:"last_sales",note:"Name",stock:"stock",ship:"ship vis", sdate:"notes"},
                {num:"1",cb:"checkbox",tools:"tools",id:"1",name:"Desktop Computer",note:"note",stock:"Yes",ship:"FedEx", sdate:"2007-12-03"},
                {num:"2",cb:"checkbox",tools:"tools",id:"2",name:"Laptop",note:"Long text ",stock:"Yes",ship:"InTime",sdate:"2007-12-03"},
                {num:"3",cb:"checkbox",tools:"tools",id:"3",name:"LCD Monitor",note:"note3",stock:"Yes",ship:"TNT",sdate:"2007-12-03"},
                {num:"4",cb:"checkbox",tools:"tools",id:"4",name:"Speakers",note:"note",stock:"No",ship:"ARAMEX",sdate:"2007-12-03"},
                {num:"5",cb:"checkbox",tools:"tools",id:"5",name:"Laser Printer",note:"note2",stock:"Yes",ship:"FedEx",sdate:"2007-12-03"},
                {num:"6",cb:"checkbox",tools:"tools",id:"6",name:"Play Station",note:"note3",stock:"No", ship:"FedEx",sdate:"2007-12-03"},
                {num:"7",cb:"checkbox",tools:"tools",id:"7",name:"Mobile Telephone",note:"note",stock:"Yes",ship:"ARAMEX",sdate:"2007-12-03"},
                {num:"8",cb:"checkbox",tools:"tools",id:"8",name:"Server",note:"note2",stock:"Yes",ship:"TNT",sdate:"2007-12-03"},
                {num:"9",cb:"checkbox",tools:"tools",id:"9",name:"Matrix Printer",note:"note3",stock:"No", ship:"FedEx",sdate:"2007-12-03"},
                {num:"10",cb:"checkbox",tools:"tools",id:"10",name:"Desktop Computer",note:"note",stock:"Yes",ship:"FedEx", sdate:"2007-12-03"},
                {num:"11",cb:"checkbox",tools:"tools",id:"11",name:"Laptop",note:"Long text ",stock:"Yes",ship:"InTime",sdate:"2007-12-03"},
                {num:"12",cb:"checkbox",tools:"tools",id:"12",name:"LCD Monitor",note:"note3",stock:"Yes",ship:"TNT",sdate:"2007-12-03"},
                {num:"13",cb:"checkbox",tools:"tools",id:"13",name:"Speakers",note:"note",stock:"No",ship:"ARAMEX",sdate:"2007-12-03"},
                {num:"14",cb:"checkbox",tools:"tools",id:"14",name:"Laser Printer",note:"note2",stock:"Yes",ship:"FedEx",sdate:"2007-12-03"},
                {num:"15",cb:"checkbox",tools:"tools",id:"15",name:"Play Station",note:"note3",stock:"No", ship:"FedEx",sdate:"2007-12-03"},
                {num:"16",cb:"checkbox",tools:"tools",id:"16",name:"Mobile Telephone",note:"note",stock:"Yes",ship:"ARAMEX",sdate:"2007-12-03"},
                {num:"17",cb:"checkbox",tools:"tools",id:"17",name:"Server",note:"note2",stock:"Yes",ship:"TNT",sdate:"2007-12-03"},
                {num:"18",cb:"checkbox",tools:"tools",id:"18",name:"Matrix Printer",note:"note3",stock:"No", ship:"FedEx",sdate:"2007-12-03"},
                {num:"19",cb:"checkbox",tools:"tools",id:"19",name:"Matrix Printer",note:"note3",stock:"No", ship:"FedEx",sdate:"2007-12-03"},
                {num:"20",cb:"checkbox",tools:"tools",id:"20",name:"Desktop Computer",note:"note",stock:"Yes",ship:"FedEx", sdate:"2007-12-03"},
                {num:"21",cb:"checkbox",tools:"tools",id:"21",name:"Laptop",note:"Long text ",stock:"Yes",ship:"InTime",sdate:"2007-12-03"},
                {num:"22",cb:"checkbox",tools:"tools",id:"22",name:"LCD Monitor",note:"note3",stock:"Yes",ship:"TNT",sdate:"2007-12-03"},
                {num:"23",cb:"checkbox",tools:"tools",id:"23",name:"Speakers",note:"note",stock:"No",ship:"ARAMEX",sdate:"2007-12-03"}
            ],
        page:{
            currentPage:1,
            allPage:0,
            onePageCount:5,
            length:23
        }
    },
    /**
     * 初始化方法
     * @returns {*|jQuery|HTMLElement}
     */
    init: function () {
        var content = $('<div class="col-xs-12">' +
            '<h4 class="header green clearfix">' +
                '请输入SQL语句' +
                '<span class="block pull-right">' +
                    '<small class="grey middle">脚本提示： &nbsp;</small>' +
                    '<span class="btn-toolbar inline middle no-margin">' +
                        '<span data-toggle="buttons" class="btn-group no-margin">' +
                            '<label class="btn btn-sm btn-yellow" val="SELECT">SELECT<input type="radio" value="1"></label>' +
                            '<label class="btn btn-sm btn-yellow" val="UPDATE">UPDATE<input type="radio" value="2"></label>' +
                            '<label class="btn btn-sm btn-yellow" val="DELETE">DELETE<input type="radio" value="3"></label>' +
                            '<label class="btn btn-sm btn-yellow" val="CREATE">CREATE<input type="radio" value="4"></label>' +
                        '</span>' +
                    '</span>' +
                '</span>' +
            '</h4>' +
            '<div class="wysiwyg-editor" style="height: 200px;" id="dbSqlEditor" contenteditable="true"></div>' +
                '<div class="widget-toolbox padding-4 clearfix">' +
                    '<div class="btn-group pull-left">' +
                        '<button class="btn btn-sm btn-info" val="clean">' +
                            '<i class="ace-icon fa fa-times bigger-125"></i>清除' +
                        '</button>' +
                    '</div>' +
                    '<div class="btn-group pull-right">' +
                        '<button class="btn btn-sm btn-purple" val="run">' +
                            '<i class="ace-icon fa fa-floppy-o bigger-125"></i>执行' +
                        '</button>' +
                    '</div>' +
                '</div>' +
            '<div class="hr hr-double dotted"></div>' +
            '</div>');
        $(content).find('label').click(function(){
            var sqlStr = dbComp.createSQLStr($(this).attr('val'));
            $('#dbSqlEditor').text(sqlStr);
        });
        $(content).find('button').click(function(){
            if($(this).attr('val') === 'clean'){//清除
                $('#dbSqlEditor').text('');
            }else{//执行
                var resultComp = dbComp.createResultTable();
                if(!!dbComp.resultTableResult){
                    $(dbComp.resultTableResult).remove();
                    dbComp.resultTableResult = null;
                }
                dbComp.resultTableResult = resultComp;
                $(resultComp).appendTo(allComp);
            }
        });
        var allComp = $('<div></div>');
        $(content).appendTo(allComp);
        return allComp;
    },
    /**
     * 生成SQL样例脚本语句
     * @param type
     * @returns {string}
     */
    createSQLStr: function(type){
        var sqlStr = '';
        switch (type){
            case 'SELECT':
                sqlStr = 'SELECT * FROM <tableName>;';
                break;
            case 'UPDATE':
                sqlStr = 'UPDATE <tableName> SET <colName=value> * WHERE <condition>;';
                break;
            case 'DELETE':
                sqlStr = 'DELETE FROM <tableName> WHERE <condition>;';
                break;
            case 'CREATE':
                sqlStr = 'CREATE table <tableName> (<colName dataType,...>);';
                break;
        }
        return sqlStr;
    },
    /**
     * 生成查询结果
     * @returns {*|jQuery|HTMLElement}
     */
    createResultTable: function(){
        var content = $('<div class="col-xs-12">' +
            '<h4 class="header green clearfix">SQL语句执行结果</h4>' +
            '</div>');
        //var table = this.createTableTitle();
        var tableList = this.createTableList();
        var pageBar = this.initPageBar();
        //$(table).appendTo(content);
        $(tableList).appendTo(content);
        $(pageBar).appendTo(content);
        return content;
    },
    createTableTitle: function(){
        var table = $('<table style="width: 100%;" cellspacing="0" cellpadding="0" border="0">' +
            '<tr class="ui-jqgrid-labels"></tr>' +
        '</table>');
        var title = ['序号','checkbox','操作','id','last_sales','Name','stock','ship vis','notes'];
        for(var key in title){
            var tempTh = null;
            var value = title[key];
            if(value==='checkbox'){
                tempTh = $('<th class="dbTh" style="width: 25px;">' +
                    '<div class="ui-jqgrid-sortable"><input class="cbox" type="checkbox"></div>' +
                    '</th>');
            }else{
                var width = 'auto';
                if(value==='序号'){
                    width = '75px';
                }
                tempTh = $('<th class="dbTh" style="width: '+width+';">' +
                    '<div class="ui-jqgrid-sortable">'+value+'</div>' +
                    '</th>');
            }
            $(tempTh).appendTo($(table).find('tr'));
        }
        return table;
    },
    /**
     * 根据数据生成SQL查询结果
     * @returns {*|jQuery|HTMLElement}
     */
    createTableList: function(){
        var table = $('<table style="width: 100%;" cellspacing="0" cellpadding="0" border="0">' +
            '<tr class="ui-jqgrid-labels"></tr>' +
            '</table>');
        var grid_data = dbComp.option.grid_data;
        var pageInfo = dbComp.option.page;
        var beginIndex = (pageInfo.currentPage-1)*pageInfo.onePageCount+1;
        var endIndex = (pageInfo.currentPage)*pageInfo.onePageCount;
        endIndex = endIndex > pageInfo.length ? (pageInfo.length) : endIndex;
        var dataLength = grid_data.length;
        var total = parseInt((dataLength-1)/pageInfo.onePageCount);
        if((dataLength-1)%pageInfo.onePageCount===0){
            dbComp.option.page.allPage = total;
        }else{
            dbComp.option.page.allPage = total+1;
        }
        pageInfo.onePageCount = pageInfo.onePageCount > dataLength-1 ? dataLength-1 : pageInfo.onePageCount;

        for(var i=0; i<dataLength; i++){
            if(i==0 || (i>=beginIndex && i<=endIndex)){
                var bColor = '#fff';
                if(i===0){
                    bColor = '#eff3f8';
                }else if(i%2===0){
                    bColor = '#F9F9F9';
                }
                var tempTr = $('<tr class="ui-jqgrid-labels" style="background-color: '+bColor+'"></tr>');
                $(tempTr).appendTo(table);
                var listData = grid_data[i];
                var dataId = listData.id;
                for(var key in listData){
                    var value = listData[key];
                    var tempTh = null;
                    if(value==='checkbox'){
                        tempTh = $('<th class="dbTh" style="width: 25px;">' +
                            '<div class="ui-jqgrid-sortable"><input class="cbox" type="checkbox"></div>' +
                            '</th>');
                    }else if(value==='tools'){
                        tempTh = $('<th class="dbTh" style="width: 80px;">' +
                            '<div class="ui-jqgrid-sortable">' +
                            '<i val="update" dataId="'+dataId+'" class="ace-icon fa fa-pencil align-left bigger-125" style="padding-left: 15px;"></i>' +
                            '<i val="delete" dataId="'+dataId+'" class="ace-icon fa fa-trash-o align-right bigger-125" style="padding-left: 15px;"></i>' +
                            '</div>' +
                            '</th>');
                    }else{
                        var width = 'auto';
                        if(value==='num'){
                            width = '75px';
                        }
                        tempTh = $('<th class="dbTh" style="width: '+width+';">' +
                            '<div class="ui-jqgrid-sortable">'+value+'</div>' +
                            '</th>');
                    }
                    $(tempTh).appendTo(tempTr);
                }
            }else if(i>endIndex){
                break;
            }
        }
        $(table).find('i').click(function(){
            console.info('val',$(this).attr('val'));
            console.info('id',$(this).attr('dataId'));
        });
        return table;
    },
    /**
     * 生成分布工具栏
     */
    initPageBar: function () {
        var content = $('<div class="ui-jqgrid ui-widget ui-widget-content ui-corner-all" style="width: auto;">' +
            '<div class="ui-state-default ui-jqgrid-pager ui-corner-bottom" style="width: auto;">' +
                '<div class="ui-pager-control">' +
                    '<table border="0" class="ui-pg-table" style="width:100%;table-layout:fixed;height:100%;">' +
                        '<tr>' +
                            '<td align="left"></td>' +
                            '<td align="center" style="width: auto;height: auto;"></td>' +
                            '<td align="right">' +
                        '</tr>' +
                    '</table>' +
                '</div>' +
            '</div>' +
            '</div>');

        //生成操作工具栏开始
        var tools = [{name:'add',css:'fa-plus-circle purple',title:'添加记录'},
            {name:'delete',css:'fa-trash-o red',title:'删除当前选中'},
            {name:'find',css:'fa-search orange',title:'在结果中查找'},
            {name:'reload',css:'fa-refresh green"',title:'重新加载'}];
        var toolsBar = $('<table border="0" class="ui-pg-table navtable" style="float:left;table-layout:auto;"><tr></tr></table>');
        for(var key in tools){
            var tempData = tools[key];
            var tempTd = $('<td class="ui-pg-button ui-corner-all" title="'+tempData.title+'">' +
            '<div class="ui-pg-div">' +
            '<span class="ui-icon ace-icon fa '+tempData.css+'"></span>' +
            '</div></td>');
            $(tempTd).appendTo($(toolsBar).find('tr'));
        }

        var $contentTds = $(content).find('td');
        $(toolsBar).appendTo($contentTds[0]);
        //生成操作工具栏结束

        var pageOption = dbComp.option.page;

        //生成分布工具开始
        var pageBar = $('<table border="0" style="table-layout:auto;" class="ui-pg-table">' +
            '<tr>' +
                '<td style="cursor: default;" class="ui-pg-button ui-corner-all ui-state-disabled">' +
                    '<span class="ui-icon ace-icon fa fa-angle-double-left bigger-140"></span>' +
                '</td>' +
                '<td id="prev_grid-pager" class="ui-pg-button ui-corner-all ui-state-disabled" style="cursor: default;">' +
                    '<span class="ui-icon ace-icon fa fa-angle-left bigger-140"></span>' +
                '</td>' +
            '<td>Page <input class="ui-pg-input" type="text" size="2" maxlength="7" value="1" role="textbox"> of <span>'+dbComp.option.page.allPage+'</span></td>' +
            '<td id="next_grid-pager" class="ui-pg-button ui-corner-all" style="cursor: default;">' +
                '<span class="ui-icon ace-icon fa fa-angle-right bigger-140"></span>' +
            '</td>' +
                '<td id="last_grid-pager" class="ui-pg-button ui-corner-all" style="cursor: default;">' +
                    '<span class="ui-icon ace-icon fa fa-angle-double-right bigger-140"></span>' +
                '</td>' +
            '<td>' +
                '<select class="ui-pg-selbox">' +
                    '<option role="option" value="10" selected="selected">'+pageOption.onePageCount+'</option>' +
                    '<option role="option" value="20">'+pageOption.onePageCount*2+'</option>' +
                    '<option role="option" value="30">'+pageOption.onePageCount*3+'</option>' +
                '</select>' +
            '</td>' +
            '</tr>' +
        '</table>');
        $(pageBar).appendTo($contentTds[1]);
        //生成分布工具结束

        //生成记录总数提醒
        var listWarn = $('<div style="text-align:right" class="ui-paging-info">View '+((pageOption.currentPage-1)*pageOption.onePageCount+1)+' - '+pageOption.currentPage*pageOption.onePageCount+' of '+pageOption.length+'</div>');
        $(listWarn).appendTo($contentTds[2]);
        //生成记录总数提醒结束
        return content;
    }
};