console.log("Sistema EBAC de Registro de Alumnos");

var registro = [
    {nombre: "Salvador Mora", edad: "30", zonaResidencia: "CDMX", nombrePrograma: "Desarrollador Front End De Cero A Pro", email: "salvadormora@ebac.mx"}, //Valor 0 de variable registro que en for representamos con i//
    {nombre: "Maria Hubert", edad: "34", zonaResidencia: "Edo Mex", nombrePrograma: "Desarrollador Back End con Phyton", email: "maria@ebac.mx"}, //Valor 1 de variable//
    {nombre: "Juan López", edad: "28", zonaResidencia: "GDL", nombrePrograma: "Data Science Avanzado", email: "juanlopez@ebac.mx"},
    {nombre: "Alejandra Ramirez", edad: "32", zonaResidencia: "MTY", nombrePrograma: "Marketing Digital", email: "alejandraramirez@ebac.mx"},
    {nombre: "Carlos Rodríguez", edad: "29", zonaResidencia: "CDMX", nombrePrograma: "UX/UI Design", email: "carlosrodriguez@ebac.mx"},
];

console.log(registro)


function agregarAlumno(){

    var nombre = prompt("Ingresa el nombre del nuevo alumno");
    var edad = prompt("Ingresa la edad del alumno");
    var zonaResidencia = prompt("Ingresa la zona de residencia del alumno");
    var nombrePrograma = prompt("Ingresa el nombre del programa a estudiar");
    var email = prompt("Ingresa el correo electrónico del alumno");

    var nuevoAlumno = {nombre: nombre, edad: edad, zonaResidencia: zonaResidencia, nombrePrograma: nombrePrograma, email: email};

    registro.push(nuevoAlumno);
};

function consultarRegistros(){

    for(var i = 0; i < registro.length; i++);
        console.log("Nombre: " + registro[i].nombre);
        console.log("Edad: " + registro[i].edad);  
        console.log("Zona de Residencia: " + registro[i].zonaResidencia);
        console.log("Nombre del Programa: " + registro[i].nombrePrograma);
        console.log("Correo electrónico: " + registro[i].email); //[i]
 };


   do{
    var opcion = prompt("Seleccione una opción (Representada por un numero del 1 al 4): \n1. Agregar registro \n2. Consultar registro de alumnos \n3. Eliminar registro \n4. Salir ");
    
    if (opcion === "1"){
        agregarAlumno();
    } else if(opcion === "2"){
        alert("Consultar registro de alumnos");
        consultarRegistros();
    } else if(opcion === "3"){
        alert("Eliminar registro de alumno");
    } else if(opcion === "4"){ //Noté que en la lección no agregaron este así, solo lo dejaron hasta el 3
        alert("Salida");
        break;
    }
    else {
        alert("Opción inválida, por favor ingrese otra");
    }
    
    var continuar = prompt("¿Deseas hacer otra acción? (S/N)");
    } while(continuar === "s");
    


