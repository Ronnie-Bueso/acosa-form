        var id1 = document.getElementById("area");
        var id2 = document.getElementById("puestos");
        
        if (id1.addEventListener) {    
            id1.addEventListener("change", cambiar);
        } else if (id1.attachEvent) { 
            id1.attachEvent("change", cambiar); 
        }

        function cambiar() {
            for (var i = 0; i < id2.options.length; i++)
            
            if(id2.options[i].getAttribute("codigo") == id1.options[id1.selectedIndex].getAttribute("codigo")){
                id2.options[i].style.display = "block";
            }else{
                id2.options[i].style.display = "none";
            }        
            id2.value = "";
        }

        cambiar();
