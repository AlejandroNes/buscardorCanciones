//clase principal
import * as UI from './interfaz.js';
import API from './api.js';

//eventos
(function(){
    UI.formularioBuscar.addEventListener('submit', validarForm);
})();


//funciones
function validarForm(e){
e.preventDefault();
//obteniendo valores de los inputs
const artista = document.querySelector('#artista').value;
const cancion = document.querySelector('#cancion').value;
//validando formulario
if( artista == '' || cancion == '' ){
    UI.divMensajes.textContent = 'Llene los campos del formulario';
    UI.divMensajes.classList.add('error');
    setTimeout(() => {
        UI.divMensajes.textContent = '';
        UI.divMensajes.classList.remove('error');
    }, 2000);
    return
}
//mostrar el API de las letras de la cancion
 const mostrarAPI = new API(artista, cancion);
 //llamando el metodo
    mostrarAPI.crearAPI();
}






















/* import * as UI from './interfaz.js';
import API from './api.js';


//evento
UI.formularioBuscar.addEventListener('submit', buscarCancion);




//funciones
function buscarCancion(e){
    e.preventDefault();
    //obtener el valor de los inputs
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;
    //validando
    if(artista == '' || cancion == ''){
        UI.divMensajes.textContent = 'Error todos los campos son obligatorios'
        UI.divMensajes.classList.add('error');
        setTimeout( ()=>{
            UI.divMensajes.textContent = ''
            UI.divMensajes.classList.remove('error')
        },2000 )
    }
    //mostrando API
    const busqueda = new API(artista, cancion);
    busqueda.consultarApi();
}
 */
