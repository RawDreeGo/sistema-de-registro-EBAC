console.log("Sistema EBAC de Registro de Alumnos");
console.log("\n"); 

//Array o Arreglo, ocn la información, añadí los campos telefono para el numero telefonico y inscripcion para determinar si el alumno esta activo o inactivo 
var registro = [
    {nombre: "Salvador Mora", edad: "30", zonaResidencia: "CDMX", nombrePrograma: "Desarrollador Front End De Cero A Pro", email: "salvadormora@ebac.mx", telefono: "1234567890", inscripcion: "Activo"},
    {nombre: "Maria Hubert", edad: "34", zonaResidencia: "Edo Mex", nombrePrograma: "Desarrollador Back End con Phyton", email: "maria@ebac.mx", telefono: "10987654321", inscripcion: "Activo"},
    {nombre: "Juan López", edad: "28", zonaResidencia: "GDL", nombrePrograma: "Data Science Avanzado", email: "juanlopez@ebac.mx", telefono: "19740375849", inscripcion: "Inctivo"},
    {nombre: "Alejandra Ramirez", edad: "32", zonaResidencia: "MTY", nombrePrograma: "Marketing Digital", email: "alejandraramirez@ebac.mx", telefono: "15437842985", inscripcion: "Activo"},
    {nombre: "Carlos Rodríguez", edad: "29", zonaResidencia: "CDMX", nombrePrograma: "UX/UI Design", email: "carlosrodriguez@ebac.mx", telefono: "8394027584", inscripcion: "Inactivo"},
];  

//Aqui comienza la funcion Do While, todo el codigo contenido aqui se repetira mientras que el usuario seleccione S a la pregunta de realizar otra accion
do{ 
    //funcion llamada para ingresar los datos de un alumno, a continuacion vemos los prompts que iran pidiendole la informacion al usuario
    function agregarAlumnos(){ 
        var nombre = prompt("Ingresa el nombre del nuevo alumno"); 
        var edad = prompt("Ingresa la edad del alumno"); 
        var zonaResidencia = prompt("Ingresa la zona de residencia del alumno"); 
        var nombrePrograma = prompt("Ingresa el nombre del programa a estudiar"); 
        var email = prompt("Ingresa el correo electrónico del alumno");
        var telefono = prompt("Ingresa el telefono del alumno");
        var inscripcion = prompt("Ingresa el status del alumno (Activo/Inactivo)");
        
        //aqui creamos una relacion de donde se debe guardar la informacion del prompt para que el programa lo asocie con la informacion del registro
        var nuevoAlumno = {nombre: nombre, edad: edad, zonaResidencia: zonaResidencia, nombrePrograma: nombrePrograma, email: email, telefono: telefono, inscripcion: inscripcion};
        //añade la informacion de nuevoAlumno al final del registro con push
        registro.push(nuevoAlumno);
                
    };
    //Funcion para consultar los registros en console
    function consultarRegistros(){ 
        //ciclo for para mostrar los datos de manera ordenada en la consola cada ves que el usuario lo requiera
        for(var index = 0; index < registro.length; index++){ 
            
            console.log("- - - - - - Informacion del alumno - - - - - - - - \n");  
            console.log("Nombre: " + registro[index].nombre); 
            console.log("Edad: " + registro[index].edad);
            console.log("Zona: " + registro[index].zonaResidencia);
            console.log("Programa: " + registro[index].nombrePrograma);
            console.log("Email: " +  registro[index].email);
            console.log("\n");  
        };
    };
    //funcion permite generar un nuevo arreglo en registro que no contenga la informaci[on del alumno deseado]
    function eliminarAlumno(){

        //solicita al usuario el nombre del alumno a eliminar
        var nombreAeliminar = prompt("Ingresa el nombre del alumno a eliminar");

        //utiliza el metodo filter para crear un nuevo arreglo sin el alumno a eliinar
        registro = registro.filter(alumno => alumno.nombre !== nombreAeliminar);
    };
    
    //Este menu se repetira dentro del ciclo do. Esta variable toma la eleccion del usuario para ejecutar la funcion indicada
    var opcion = prompt("Seleccione una opcion (Del 1 al 5): \n1. Agregar Registro: \n2. Consultar Registros: \n3. Editar Datos del Alumno: \n4. Eliminar Alumno: \n5. Salir: \n");
    
    //opciones del menu

    if (opcion === "1"){
        agregarAlumnos();
    } else if(opcion === "2"){
        consultarRegistros();
    } else if(opcion === "3"){
        alert("Editar información del alumno"); 
    } else if(opcion === "4"){
        eliminarAlumno();
    } else if(opcion === "5"){
        alert("Gracias por visitar EBAC");
        break 
        
    }else{console.log("Opcion invalida, porfavor elige otra")};

    //Variable para continuar o terminar

    var continuar = prompt("¿Deseas realizar otra accion? (S/N)");
//if else para tomar el valor N y salir, o cualquier otro valor, se convierte en S y la alerta avisa que regresamos al menú
    if(continuar === "n") {
        alert("Gracias por visitar EBAC");
        break;
    }else{alert("Volviendo al menú"); continuar = "s";}

} while(continuar === "s");



