// Call the dataTables jQuery plugin
$(document).ready(function() {
//on ready
});
async function iniciarSesion(){
let datos = {};//creamos variable vacía para guardar las variables con info
datos.email = document.getElementById('txtEmail').value;
datos.password = document.getElementById('txtPassword').value;


  const request = await fetch('api/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)

  });

  const respuesta = await request.json();
  if(respuesta != 'FAIL'){
    window.location.href = 'usuarios.html'
  }
  else
  {
    alert('El usuario o contraseña es incorrecto.');
  }

}

