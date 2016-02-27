/**
 * 数据库组件
 * @type {{}}
 */
var dbComp = {
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
                $(resultComp).appendTo(allComp);
            }
        });
        var allComp = $('<div></div>');
        $(content).appendTo(allComp);
        return allComp;
    },
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
    createResultTable: function(){
        var content = $('<div class="col-xs-12">' +
            '<h4 class="header green clearfix">SQL语句执行结果</h4>' +
            '</div>');
        //var table = this.createTableTitle();
        var tableList = this.createTableList();
        //$(table).appendTo(content);
        $(tableList).appendTo(content);
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
    createTableList: function(){
        var table = $('<table style="width: 100%;" cellspacing="0" cellpadding="0" border="0">' +
            '<tr class="ui-jqgrid-labels"></tr>' +
            '</table>');
        var grid_data =
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
            ];

        var dataLength = grid_data.length;
        for(var i=0; i<dataLength; i++){
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
        }
        $(table).find('i').click(function(){
            console.info('val',$(this).attr('val'));
            console.info('id',$(this).attr('dataId'));
        });
        return table;
    }
};