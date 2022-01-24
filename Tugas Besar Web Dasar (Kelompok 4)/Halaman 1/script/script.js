let arr_button = ["#button","#button1","#button2","#button3","#button4","#button5","#button6","#button7","#button8","#button9",];
            for(let i=0; i<11; i++){
            $(document).ready(function(){
                    $(arr_button[i]).mouseover(function(){
                        $(arr_button[i]).toggleClass("black");
                    });
                });
            }