const OficiosPersonas = [
    {
     nombre: "Jose Vargas",
     oficio: "Ingeniero Ambiental"
    },
    {
     nombre: "Paula Diaz",
     oficio: "Docente"
    },
    {
     nombre: "Mikaela Ramos",
     oficio: "Secretaria"
    },   {
     nombre: "Julisa Rojas",
     oficio: "Teleoperadora"
    },   {
     nombre: "Maikol Gutierres",
     oficio: "Administrador"
    },
    {
     nombre: "Mikaela Ramos",
     oficio: "Secretaria"
    },   
    {
     nombre: "Julisa Rojas",
     oficio: "Teleoperadora"
    },   
    {
     nombre: "Maikol Gutierres",
     oficio: "Administrador"
    },
 ];
 
 const personasElement = document.getElementById("listapersonas");
 
 function writePersona() {
     let contenido = "";
     OficiosPersonas.forEach(persona => {
         const template = `
             <div class="persona">
                 <div class="data">
                 <h4>${persona.nombre}</h4>
                 <h4>${persona.oficio}</h4>
                 </div>
                 <button class="btn" onclick="contratar('${persona.nombre}')">Contratar</button>            
                 </div>
         `;
         contenido = contenido + template;
     });
     personasElement.innerHTML = contenido;
 
 }
 
 function contratar(nombre) {
     Swal.fire({
         title: 'Contratar',
         text: `¿Desea contratar a ${nombre}?`,
         icon: 'question',
         showCancelButton: true,
         confirmButtonText: 'Sí',
         cancelButtonText: 'Mirar más opciones'
     }).then((result) => {
         if (result.isConfirmed) {
             Swal.fire('¡Felicidades!', `${nombre} ha sido contratado.`, 'success');
         }
     });
 }
 writePersona();