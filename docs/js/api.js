//importando la clase interfaz
import * as IU from './interfaz.js';

class API {
    constructor(artista, cancion){
        this.artista = artista;
        this.cancion = cancion;
    }
    //creando metodo
    crearAPI(){
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`
        fetch( url)
        .then( resp => resp.json() )
        .then( data => {
            const {lyrics} = data
            if( lyrics ){
                IU.divHeading.textContent = `Cancion: ${this.cancion} - Artista: ${this.artista}`;
                IU.divResultado.textContent = lyrics;
            }else{
                IU.divMensajes.textContent = `Cancion no encontrada`;
                IU.divMensajes.classList.add('error');
                setTimeout(() => {
                    IU.divMensajes.textContent = ``;
                    IU.divMensajes.classList.remove('error');               
                }, 2000);
            }
        } )
    }

}

export default API;































/* import * as UI from './interfaz.js';

class API {
    constructor(artista, cancion){
        this.artista = artista
        this.cancion = cancion
    }
    //metodo
    consultarApi(){
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        fetch(url)
        .then( resp => resp.json() )
        .then( data => {
            if(data.lyrics){
                const { lyrics } = data
                UI.divResultado.textContent = lyrics
                UI.headingResultado.textContent = `Letra de la cancion ${this.cancion} de ${this.artista}`
            }else{
                UI.divMensajes.textContent = `Cancion no encontrada`
                UI.divMensajes.classList.add('error')
                setTimeout( ()=>{
                    UI.divMensajes.textContent = ''
                    UI.divMensajes.classList.remove('error');
                },2000 )
            }
        })
    }
}

export default API */