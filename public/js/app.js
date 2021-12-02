var url="http://localhost:8083/albums";
        var modal = new bootstrap.Modal(document.getElementById('modelId'), {keyboard:false});

        var aplicacion= new function(){

            this.idBorrar= document.getElementById("idBorrar");

            this.idActualizar= document.getElementById("idActualizar");
            this.nombreActualizar= document.getElementById("nombreActualizar");
            this.autorActualizar= document.getElementById("autorActualizar");
            this.añoActualizar= document.getElementById("añoActualizar");
            this.generoActualizar= document.getElementById("generoActualizar");

            this.id= document.getElementById("id");
            this.nombre= document.getElementById("nombre");
            this.autor= document.getElementById("autor");
            this.año= document.getElementById("año");
            this.genero= document.getElementById("genero");

            this.albumes=document.getElementById("albumes");

            this.Leer=function(){
                var datos="";
                fetch(url+"/getAlbums")
                .then(r=>r.json())
                .then((respuesta)=>{
                    console.log(respuesta);
                    respuesta.map(
                        function (album,index, array){
                            datos+="<tr>";
                            datos+="<td>"+album.id+"</td>";
                            datos+="<td>"+album.nombre+"</td>";
                            datos+="<td>"+album.autor+"</td>";  
                            datos+="<td>"+album.genero+"</td>";
                            datos+="<td>"+album.año+"</td>";
                            datos+="</tr>";
                        }
                    );
                    return this.albumes.innerHTML=datos;
                })
                .catch(console.log);
                
            };
            this.Agregar=function(){
                console.log(nombre.value);
                console.log(autor.value);
                console.log(año.value);
                console.log(genero.value);

                var datosEnviar={id:"1", name:this.nombre.value, artist:this.autor.value, year:this.año.value, genre:this.genero.value}

                fetch(url+"/addAlbum", {method:"POST", body:JSON.stringify(datosEnviar)})
                .then((respuesta)=>respuesta.json())
                .then((datosDeRespuesta)=>{
                    console.log("insertados");
                    console.log(datosEnviar);
                    this.Leer();
                })
                .catch(console.log);
            };

            this.Borrar=function(idBorrar){
                var datosBorrar={id:this.idBorrar.value}
                fetch(url+"/deleteAlbum", {method:"POST", body:JSON.stringify(datosBorrar)})
                .then((res)=>res.json())
                .then((datosDeRes)=>{
                    console.log("borrado");
                    console.log(datosBorrar);
                    this.Leer();
                })
                .catch(console.log);
            };

            

            this.Actualizar=function(idActualizar){

                var datosActualizar={id:this.idActualizar.value, name:this.nombreActualizar.value, artist:this.autorActualizar.value, year:this.añoActualizar.value, genre:this.generoActualizar.value}

                fetch(url+"/updateAlbum", {method:"POST", body:JSON.stringify(datosActualizar)})
                .then((respuesta)=>respuesta.json())
                .then((datosDeRespuesta)=>{
                    console.log("Actualizados");
                    console.log(datosActualizar);
                    this.Leer();
                })
                .catch(console.log);

            }
        }
        aplicacion.Leer();