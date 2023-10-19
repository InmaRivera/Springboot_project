// Call the dataTables jQuery plugin
$(document).ready(function() {
    cargarUsuarios();
  $('#usuarios').DataTable();
   actualizarEmailDelUsuario();
});
async function cargarUsuarios(){

  const request = await fetch('api/usuarios', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
  const usuarios = await request.json();


  let listadoHtml = '';
    for (let usuario of usuarios)
    {
      let telefonoTxt = usuario.telefono == null ? '-' : usuario.telefono; //indicamos que si es null pon - sino pues muestre el tlf
      let botonEliminar = "<a href='#' onclick='eliminarUsuario("+ usuario.id +")' class='btn btn-danger btn-circle'><i class='fas fa-trash'></i></a>";
      let usuarioHTML = "<tr> <td>"+usuario.id+"</td><td>"+usuario.nombre +" "+ usuario.apellido+ "</td><td>"
      +usuario.email+"</td><td>"+telefonoTxt+"</td><td>"+botonEliminar+"</td></tr>"
       listadoHtml += usuarioHTML;
    }
  //console.log(usuarios);
document.querySelector('#usuarios tbody').innerHTML = listadoHtml;
}

async function eliminarUsuario(){
    if(!confirm('¿Desea eliminar este usuario?')){
        return;
    }
     const request = await fetch('api/usuarios/' + id, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });
   location.reload();

}