let arr_id = ["#button_btc","#button_bnb","#button_eth","#button_usdt","#button_sol","#button_ada","#button_usd","#button_dot","#button_doge","#button_terra","#button_avax","#button_xrp"];
            let arr_slide = ["#slide","#slide1","#slide2","#slide3","#slide4","#slide5","#slide6","#slide7","#slide8","#slide9","#slide10","#slide11"];
            for(let i=0; i<13; i++){
                $(document).ready(function(){
                    $(arr_id[i]).click(function(){
                        $(arr_slide[i]).slideToggle("slow");
                    });
                });
            }