window.onload = function () {
    var divlist = [];
    function creatediv() {
        var maindiv = document.getElementById("container");
        var table = document.createElement("table");
        maindiv.appendChild(table);
        var top = 1;
        var left = 5;
        for (var i = 0; i <= 30; i++) {
            var tr = document.createElement("tr");
            table.appendChild(tr);
            for (var j = 0; j <= 40; j++) {
                var td = document.createElement("td");

                divlist[i] = td;
                
                tr.appendChild(td);
                var img;
                var img2;
                if (i>top&&i<=30&&j>left&&j<=35){

                    if(i==2&&j>left+6&&j<=35-6){

                        if (j==left+6+1){
                            img = document.createElement("img");
                            img.src = "img/8.jpg";
                            var dd = document.createElement("div");
                            dd.style.width = "200px";
                            dd.style.height = "200px";
                            dd.style.display = "none";
                            dd.style.position = "absolute";
                            var ii = document.createElement("img"); 
                            ii.style.width = "200px";
                            ii.style.height = "200px";
                            ii.src = "img/8.jpg";
                            dd.appendChild(ii);
                            td.appendChild(img);
                            td.appendChild(dd);
                           
                            td.addEventListener("mouseenter",function () {
                               dd.style.display = "block"
                            });

                            
                            td.addEventListener("mouseleave",function () {
                                dd.style.display = "none";
                            });
                        }
/*                        if (j==left+6+2){
                            img = document.createElement("img");
                            img.src = "img/9.jpg";
                            td.appendChild(img);

                            td.addEventListener("mouseenter",function () {
                                img.style.width = "200px";
                                img.style.height = "200px";
                            });
                            td.addEventListener("mouseleave",function () {
                                img.style.width = "30px";
                                img.style.height = "30px";
                            })
                        }
                        if (j==left+6+3){
                            img = document.createElement("img");
                            img.src = "img/6.jpg";
                            td.appendChild(img);

                            td.addEventListener("mouseenter",function () {
                                img.style.width = "200px";
                                img.style.height = "200px";
                            });
                            td.addEventListener("mouseleave",function () {
                                img.style.width = "30px";
                                img.style.height = "30px";
                            })
                        }*/

                    }
                    if(i==3&&j>left+5&&j<=35-5){
                        if(j<=left+6+7||j>35-6-7){
                            td.style.backgroundColor = "#ccc";
                        }
                    }
                    if(i==4&&j>left+4&&j<=35-4){
                        if(j<=left+6+8||j>35-6-8){
                            td.style.backgroundColor = "#ccc";
                        }
                    }
                    if(i==5&&j>left+3&&j<=35-3){
                        td.style.backgroundColor = "#ccc";
                    }
                    if(i==6&&j>left+2&&j<=35-2){
                        td.style.backgroundColor = "#ccc";
                    }
                    if(i==7&&j>left+1&&j<=35-1){
                        td.style.backgroundColor = "#ccc";
                    }
                    if(i==8&&j>left&&j<=35){
                        td.style.backgroundColor = "#ccc";
                    }
                    if(i==9&&j>left&&j<=35){
                        td.style.backgroundColor = "#ccc";
                    }
                    if(i==10&&j>left&&j<=35){
                        td.style.backgroundColor = "#ccc";
                    }
                    if(i==11&&j>left+1&&j<=35-1){
                        td.style.backgroundColor = "#ccc";
                    }
                    if(i==12&&j>left+2&&j<=35-2){
                        td.style.backgroundColor = "#ccc";
                    }
                    if(i==13&&j>left+3&&j<=35-3){
                        td.style.backgroundColor = "#ccc";
                    }
                    if(i==14&&j>left+4&&j<=35-4){
                        td.style.backgroundColor = "#ccc";
                    }
                    if(i==15&&j>left+5&&j<=35-5){
                        td.style.backgroundColor = "#ccc";
                    }
                    if(i==16&&j>left+6&&j<=35-6){
                        td.style.backgroundColor = "#ccc";
                    }
                    if(i==17&&j>left+7&&j<=35-7){
                        td.style.backgroundColor = "#ccc";
                    }
                    if(i==18&&j>left+8&&j<=35-8){
                        td.style.backgroundColor = "#ccc";
                    }
                    if(i==19&&j>left+9&&j<=35-9){
                        td.style.backgroundColor = "#ccc";
                    }
                    if(i==20&&j>left+10&&j<=35-10){
                        td.style.backgroundColor = "#ccc";
                    }
                    if(i==21&&j>left+11&&j<=35-11){
                        td.style.backgroundColor = "#ccc";
                    }
                    if(i==22&&j>left+12&&j<=35-12){
                        td.style.backgroundColor = "#ccc";
                    }
                    if(i==23&&j>left+13&&j<=35-13){
                        td.style.backgroundColor = "#ccc";
                    }
                    if(i==24&&j>left+14&&j<=35-14){
                        td.style.backgroundColor = "#ccc";
                    }

                }

            }
        }
        
        
    }
    
    creatediv();
    console.log(divlist)
};