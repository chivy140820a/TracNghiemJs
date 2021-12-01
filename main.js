var admincontrol = function(){
    this.init = function(){
        RegisterEvent();
    }   
     
    function RegisterEvent(){
        $('#txtcreate').show();
        $('#test').css("color","red");
        var customerArray=[];
        var arrResult =[];
        var arrdelete = [];
        var dem =1;
        $('body').on('click','.deleteclass',function(){
            var id  = $(this).data('id');
            var demdelete =0;
            for(var i=0;i<arrdelete.length;i++){
                 if(arrdelete[i]<id){
                    demdelete++;
                 }
            }
            var startdelete = id-1-demdelete;
            arrResult.splice(startdelete,1);
            arrdelete.push(id);
            
            $.each($('#txtaddquestion div[class="content"]'),function(i,item){
                if($(item).data('id')==id){
                    $(item).remove();
                }
            })
            
        })
        
        $('#txtcreate').off('click').on('click',function(){
            var name = $('#txtdecripstion').val();
            var A = $('#txtdecripstionA').val();
            var B = $('#txtdecripstionB').val();
            var C  =$('#txtdecripstionC').val();
            var D = $('#txtdecripstionD').val();
            var res = 0;
            var template = $('#table-template').html();
            var ren ='';
            $.each($('input[class="reschooseAdmin"]'),function(i,item){
                  if($(item).prop('checked')==true){
                      var vlu = $(item).val();
                      var response =  parseInt(vlu);
                      arrResult.push(response);
                  }
            })
            ren = Mustache.render(template,{
                 Des:name,
                 Id:dem,
                 DesA:A,
                 DesB:B,
                 DesC:C,
                 DesD:D,
            });
            $('#txtdecripstion').val("");
            $('#txtdecripstionA').val("");
            $('#txtdecripstionB').val("");
            $('#txtdecripstionC').val("");
            $('#txtdecripstionD').val("");
            $.each($('input[class="reschooseAdmin"]'),function(i,item){
                $(item).prop('checked',false);
            })
            $('#txtaddquestion').append(ren);
            dem++;
            $('#txtsendResult').show();
        })


        $('#txtsendResult').off('click').on('click',function(){
            $.each($('#txtaddquestion div[class="content"]'),function(i,item){
                $.each($(item).find('input[type="radio"]'),function(j,jtem){
                    if($(jtem).prop('checked')==true){
                          var value = $(jtem).val();
                          var responsCustomer  =  parseInt(value);
                          customerArray.push(responsCustomer);  
                    }
                })
            })
            $('#txtcheck').show();
            $('#txtsendResult').hide();
            $('#txtcreate').hide();
        })
        $('#txtseen').off('click').on('click',function(){
            var dem =0;
            $.each($('#txtaddquestion div[class="content"]'),function(i,item){
                dem++;
            })
            var total=0;
            for(var i=0;i<arrResult.length;i++){
                 if(arrResult[i]==customerArray[i]){
                     total++;
                 }
            }
            $('#txtshowTextTotal').show();
            $('#txtshowTotal').show();
            $('#txtshowTotalRes').show();
            $('#txtshowTotal').text(total);
            $('#txtshowTotalRes').text(dem);
        })
        
        $('#txtcheck').off('click').on('click',function(){
            var demResult =0;
            $.each($('#txtaddquestion div[class="content"]'),function(i,item){
                 if(arrResult[demResult]==customerArray[demResult]){
                     $.each($(item).find('input[type="radio"]'),function(j,jtem){
                        var result =parseInt($(jtem).val());  
                         if(result==arrResult[demResult]){
                           if(result==1){
                                $(item).find('span[class="spclass1"]').first().css("color","blue");
                           }
                           if(result==2){
                              $(item).find('span[class="spclass2"]').first().css("color","blue");
                           }
                           if(result==3){
                              $(item).find('span[class="spclass3"]').first().css("color","blue");
                           }
                           if(result==4){
                              $(item).find('span[class="spclass4"]').first().css("color","blue");
                           }
                         }
                     })
                     demResult++;
                 }
                 else{
                    $.each($(item).find('input[type="radio"]'),function(j,jtem){
                        var result1 =parseInt($(jtem).val()); 
                        if(result1==arrResult[demResult]){
                            if(result1==1){
                                $(item).find('span[class="spclass1"]').first().css("color","blue");
                           }
                           if(result1==2){
                              $(item).find('span[class="spclass2"]').first().css("color","blue");
                           }
                           if(result1==3){
                              $(item).find('span[class="spclass3"]').first().css("color","blue");
                           }
                           if(result1==4){
                              $(item).find('span[class="spclass4"]').first().css("color","blue");
                           }

                        }
                        if(result1==customerArray[demResult]){
                            if(result1==1){
                                $(item).find('span[class="spclass1"]').first().css("color","red");
                           }
                           if(result1==2){
                              $(item).find('span[class="spclass2"]').first().css("color","red");
                           }
                           if(result1==3){
                              $(item).find('span[class="spclass3"]').first().css("color","red");
                           }
                           if(result1==4){
                              $(item).find('span[class="spclass4"]').first().css("color","red");
                           }
                        }
                    })
                    demResult++;
                 }
            })
        })
        
        
    }
    
    function LoadData(){
         
    }
}

























