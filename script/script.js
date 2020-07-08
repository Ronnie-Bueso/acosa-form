        var id1 = document.getElementById("ciudad");
        var id2 = document.getElementById("area");
        
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

        var id3 = document.getElementById("area");
        var id4 = document.getElementById("puestos");
        
        if (id3.addEventListener) {    
            id3.addEventListener("change", cambiar);
        } else if (id3.attachEvent) { 
            id3.attachEvent("change", cambiar); 
        }

        function cambiar() {
            for (var i = 0; i < id4.options.length; i++)
            
            if(id4.options[i].getAttribute("codigo") == id3.options[id3.selectedIndex].getAttribute("codigo")){
                id4.options[i].style.display = "block";
            }else{
                id4.options[i].style.display = "none";
            }        
            id4.value = "";
        }

        cambiar();

        
