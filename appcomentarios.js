console.log("Sistema EBAC de Registro de Alumnos");
console.log("\n");  // Deje este para que tenga un poco mas de espacio y presentación

//Moví la variable Registro hacia arriba del código para que cuando llamemos utilizando function, el programa sepa de que estoy hablando.
var registro = [
    {nombre: "Salvador Mora", edad: "30", zonaResidencia: "CDMX", nombrePrograma: "Desarrollador Front End De Cero A Pro", email: "salvadormora@ebac.mx"},
    {nombre: "Maria Hubert", edad: "34", zonaResidencia: "Edo Mex", nombrePrograma: "Desarrollador Back End con Phyton", email: "maria@ebac.mx"},
    {nombre: "Juan López", edad: "28", zonaResidencia: "GDL", nombrePrograma: "Data Science Avanzado", email: "juanlopez@ebac.mx"},
    {nombre: "Alejandra Ramirez", edad: "32", zonaResidencia: "MTY", nombrePrograma: "Marketing Digital", email: "alejandraramirez@ebac.mx"},
    {nombre: "Carlos Rodríguez", edad: "29", zonaResidencia: "CDMX", nombrePrograma: "UX/UI Design", email: "carlosrodriguez@ebac.mx"},
];  

//Los nuevos registros solo se guardan en el navegador mientras se ejecuta la app. Se pierden al cerrar el programa.

do{ 
    
    //Tambien dejé las funciones y todo dentro del ciclo DO WHILE, y funciona

function agregarAlumnos(){  //ESTA ES LA FUNCION INCLUIR, al ponerla aquí, podemos llamarla como parte de las opciones del menú y que salga con el prompt, al incluirla dentro del ciclo Do WHILE nos aseguramos de poder usarla mientras el usuario selecciones S para continuar
    
    var nombre = prompt("Ingresa el nombre del nuevo alumno"); 
    var edad = prompt("Ingresa la edad del alumno"); 
    var zonaResidencia = prompt("Ingresa la zona de residencia del alumno"); 
    var nombrePrograma = prompt("Ingresa el nombre del programa a estudiar"); 
    var email = prompt("Ingresa el correo electrónico del alumno");

    //Los datos agregados los aterrisamos al registro con la siguiente formula nuevoAlumno, siguiendo el mismo orgen que se ve en el Arreglo o Array de registro; es algo asi como unir las lineas para el programa, que entienda que los datos ingresados corresponden a los datos a incluir en el registro.
    var nuevoAlumno = {nombre: nombre, edad: edad, zonaResidencia: zonaResidencia, nombrePrograma: nombrePrograma, email: email};
    registro.push(nuevoAlumno);
    //Esta es la parte que incluye los nuevos datos en el registro, mediante la acción PUSH añade los datos que ponemos al final del registro 
        
};

function consultarRegistros(){ 
    
    //ESTA ES LA FUNCION CONSULTAR, esto solo se muestra en la conosola por ahora, aunque de una manera un poco mas ordenada. 
    
    
  
 
    for(var index = 0; index < registro.length; index++){ //cambié el nombre de la variable i por index, cheque tambien las llaves y parentesis para que todo quedara dentro, y al parecer funcionó 
        
        console.log("- - - - - - Informacion del alumno - - - - - - - - \n");  //Es para tener un encabezado y separar los diferentes alumnos visualmente. 
        console.log("Nombre: " + registro[index].nombre); 
        console.log("Edad: " + registro[index].edad);
        console.log("Zona: " + registro[index].zonaResidencia);
        console.log("Programa: " + registro[index].nombrePrograma);
        console.log("Email: " +  registro[index].email);
        console.log("\n");     // linea que funciona como enter.
    };

       //El programa no funcionaba al tener comentarios entre las lineas de la función, no maracaba error pero no funcionaba bien. No me mostraba en la consola los datos de los alumnos al marcar la opcion 2
};



var opcion = prompt("Seleccione una opcion (Del 1 al 4): \n1. Agregar Registro: \n2. Consultar Registros: \n3. Eliminar Alumno: \n4. Salir: \n");
//Añadí la indicación 1 al 4 para que sea mas claro con el usuario
if (opcion === "1"){
    agregarAlumnos();
} else if(opcion === "2"){
    consultarRegistros();
} else if(opcion === "3"){
    alert("Eliminar registro de alumno");
} else if(opcion === "4"){
    alert("Gracias por visitar EBAC");
    break 
    //Añadí este break para que el programa termine cuando seleccionas salir. Y un pequeño mensaje de despedida :)

}else{console.log("Opcion invalida, porfavor elige otra")};

var continuar = prompt("¿Deseas hacer otra accion? \n (Pulse S para continuar / o cualquier tecla para Salir)");
//Lo escribí asi ya que me parecía un poco ilogico poner la opcion N especificamente si cualquier tecla terminaba el programa.

} while(continuar === "s");
