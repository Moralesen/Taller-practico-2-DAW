var combo1=7.25;
var combo2=5.75;
var combo3=3.50;
var total=0;
var d1=1.50,d2=1.25,d3=1.75,d4=1.50,d5=1.25,d6=1.50,d7=1.25,d8=1,d9=0.50,d10=1.25;


function edit() {
 //Ocultar el elemento div
 view.style.display = 'none';
 //Dibujar el campo textarea y ponerle estilos
 area.value = view.innerHTML;
 area.style.display = 'block';
 area.style.height = '80px';
 area.style.padding = '6px';
 area.style.width = '100%';
 area.focus();
}

function save() {
    area.style.display = 'none';
    view.innerHTML = area.value;
    view.style.display = 'block';
    view.style.letterSpacing = '1.2px';
   }
   function cancel() {
    area.style.display = 'none';
    view.style.display = 'block';
   }

function agregar(){
    if(document.getElementById('r1').checked){
       sumar();
        document.getElementById("total").value=total;
    }

    if(document.getElementById('r2').checked){
        
        sumar();
        document.getElementById("total").value=total;
    }
    if(document.getElementById('r3').checked){
        
        sumar();
        document.getElementById("total").value=total;
    }
}

function sumar(){
    //primer combo
if(document.getElementById('r1').checked){
    if(total==0){
        total=combo1+d1;
    }else{
    if(document.getElementById('c1').checked){
    total=d1+total;
    }
    if(document.getElementById('c2').checked){
        
       total=total+d2;
       }
    if(document.getElementById('c3').checked){
        
        total=total+d3;
        }
        if(document.getElementById('c4').checked){
        
            total=total+d4;
         }

         if(document.getElementById('c5').checked){
        
            total=total+d5;
        }
        if(document.getElementById('c6').checked){
        
            total=total+d6;
        }

        if(document.getElementById('c7').checked){
        
            total=total+d7;
        }

        if(document.getElementById('c8').checked){
        
            total=total+d8;
        }

        if(document.getElementById('c9').checked){
        
            total=total+d9;
        }
        if(document.getElementById('c10').checked){
        
            total=total+d10;
        }
    }
}else{

    //Segundo combo
    if(document.getElementById('r2').checked){
        if(total==0){
            total=combo2+d1;
        }else{
        if(document.getElementById('c1').checked){
        total=d1+total;
        }
        if(document.getElementById('c2').checked){
            
           total=total+d2;
           }
        if(document.getElementById('c3').checked){
            
            total=total+d3;
            }
            if(document.getElementById('c4').checked){
            
                total=total+d4;
             }
    
             if(document.getElementById('c5').checked){
            
                total=total+d5;
            }
            if(document.getElementById('c6').checked){
            
                total=total+d6;
            }
    
            if(document.getElementById('c7').checked){
            
                total=total+d7;
            }
    
            if(document.getElementById('c8').checked){
            
                total=total+d8;
            }
    
            if(document.getElementById('c9').checked){
            
                total=total+d9;
            }
            if(document.getElementById('c10').checked){
            
                total=total+d10;
            }
        }
    }else{}
}

    if(document.getElementById('r3').checked){
        if(total==0){
            total=combo3+d1;
        }else{
        if(document.getElementById('c1').checked){
        total=d1+total;
        }
        if(document.getElementById('c2').checked){
            
           total=total+d2;
           }
        if(document.getElementById('c3').checked){
            
            total=total+d3;
            }
            if(document.getElementById('c4').checked){
            
                total=total+d4;
             }
    
             if(document.getElementById('c5').checked){
            
                total=total+d5;
            }
            if(document.getElementById('c6').checked){
            
                total=total+d6;
            }
    
            if(document.getElementById('c7').checked){
            
                total=total+d7;
            }
    
            if(document.getElementById('c8').checked){
            
                total=total+d8;
            }
    
            if(document.getElementById('c9').checked){
            
                total=total+d9;
            }
            if(document.getElementById('c10').checked){
            
                total=total+d10;
            }
        }
    }
}



function init(){
    document.getElementById('btnAgregar').addEventListener('click',agregar);
    var view = document.getElementById('view');
 var area = document.getElementById('area');
 view.onclick = edit;
 document.onkeydown = function(e) {
 e = e || event;
 // Escape
 if(e.keyCode == 27) {
 cancel();
 return false;
 }
 if ((e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)) && !area.offsetHeight) {
 edit();
 return false;
 }
 if((e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) && area.offsetHeight) {
 save();
 return false;
 }
}
}

window.onload=init;
