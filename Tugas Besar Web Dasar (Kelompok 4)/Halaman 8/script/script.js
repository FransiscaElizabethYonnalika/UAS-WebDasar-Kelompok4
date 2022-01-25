let arr_id = ["#img","#img1","#img2","#img3"];
            let arr_slide = ["#tulisan","#tulisan1","#tulisan2","#tulisan3"];
            for(let i=0; i<5; i++){
                $(document).ready(function(){
                    $(arr_id[i]).mouseover(function(){
                        $(arr_slide[i]).fadeToggle("slow");
                    });
                });
            }