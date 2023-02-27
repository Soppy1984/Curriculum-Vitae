
function agregarCurso(cursoNuevo){           
  li = document.createElement("li");
  li.textContent = cursoNuevo;
  cursos.appendChild(li);  
  };


const boton=document.getElementById("lapiz");
const cursos=document.querySelector(".cursos");

boton.addEventListener ('click', function(){ 
      const contraseña = prompt("Ingrese la contraseña: patagonias");
      if(contraseña=="patagonias"){
        const cursoNuevo = prompt("Ingresar Nuevo Curso o Carrera: "); 
        agregarCurso(cursoNuevo); 
      }       
      else
         alert("Error de Contraseña");       
})





