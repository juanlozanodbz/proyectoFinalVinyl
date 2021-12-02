const { json } = require("express");

var url="";
var modal=new bootstrap.modal(document.getElementById('modelId'), {keyboard:false});

var aplicacion= new function(){

    this.idEditar= document.getElementById("idEditar");
    this.nombreEditar= document.getElementById("nombreEditar");
    this.autorEditar= document.getElementById("autorEditar");
    this.añoEditar= document.getElementById("añoEditar");
    this.generoEditar= document.getElementById("generoEditar");

    this.nombre= document.getElementById("nombre");
    this.autor= document.getElementById("autor");
    this.año= document.getElementById("año");
    this.genero= document.getElementById("genero");

    this.albumes=document.getElementById("albumes");

    this.Leer=function(){
        var datos="";
        fetch(url)
        .then(r=>r.json())
        .then((respuesta)=>{
            console.log(respuesta);
            respuesta.map(
                function (album,index,array){
                    datos+="<tr>";
                    datos+="<td>"+album.id+"</td>";
                    datos+="<td>"+album.nombre+"</td>";
                    datos+="<td>"+album.año+"</td>";
                    datos+="<td>"+album.genero+"</td>";
                    datos+='<td> <div class="btn-group" role="group" aria-label=""><button type="button" class="btn btn-info" onclick="aplicacion.Editar('+album.id+')">Editar</button><button type="button" class="btn btn-danger" onclick="aplicacion.Borrar('+album.id+')">Borrar</button></div>'+'</td>';
                    datos+="</tr>";
                }
            );
            return this.albumes.innerHTML=datos;
        })
        .catch(console.log);

        //datos="<tr><td>1</td><td>Play Deep</td><td>The Outfield</td><td>1985</td><td>Rock</td><td>Editar | Borrar</td></tr>";
        
    };
    this.Agregar=function(){
        console.log(nombre.value);
        console.log(autor.value);
        console.log(año.value);
        console.log(genero.value);

        var datosEnviar={nombre:this.nombre.value, autor:this.autor.value, año:this.año.value, genero:this.genero.value}

        fetch(url+"?insertar=1", {method:"POST", body:JSON.stringify(datos)})
        .then((respuesta)=>respuesta.json())
        .then((datosDeRespuesta)=>{
            console.log("insertados");
            this.Leer();
        })
        .catch(console.log);
    };

    this.Borrar=function(id){
        console.log(id);
        fetch(url+"?borrar="+id)
        .then((respuesta)=>respuesta.json())
        .then((datosDeRespuesta)=>{
            this.Leer();
        })
        .catch(console.log);
    };

    this.Editar=function(id){
        console.log(id);

        fetch(url+"?consultar="+id)
        .then((respuesta)=>respuesta.json())
        .then((datosDeRespuesta)=>{
            console.log(datosDeRespuesta);

            this.idEditar.value=datosDeRespuesta[0]['id'];
            this.nombreEditar.value=datosDeRespuesta[0]['nombre'];
            this.autorEditar.value=datosDeRespuesta[0]['autor'];
            this.añoEditar.value=datosDeRespuesta[0]['año'];
            this.generoEditar.value=datosDeRespuesta[0]['genero'];
        })
        .catch(console.log);

        modal.show();
    };

    this.Actualizar=function(){

        var datosEnviar={id:this.idEditar.value, nombre:this.nombreEditar.value, autor:this.autorEditar.value, año:this.añoEditar.value, genero:this.generoEditar.value}

        fetch(url+"?actualizar=1", {method:"POST", body:JSON.stringify(datos)})
        .then((respuesta)=>respuesta.json())
        .then((datosDeRespuesta)=>{
            console.log("Actualizados");
            this.Leer();
            modal.hide();
        })
        .catch(console.log);

    }
}
aplicacion.Leer();