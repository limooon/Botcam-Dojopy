const listaTweets = document.querySelector('#lista-tweets');
const formulario = document.querySelector('#formulario');
let tweets = [];

eventListeners();

function eventListeners(){
    formulario.addEventListener('submit', agregarTweet);
    listaTweets.addEventListener('click', borrarTweet);
}
function agregarTweet(event){

    event.preventDefault();

    const tweet = document.querySelector('#tweet').value;
     
     // validación
     if(tweet === '') {
          mostrarError('Un mensaje no puede ir vacio');
          return;
     }

    const  objTwet = {
        id:Date.now(),
        texto:tweet
    }
    tweets =[...tweets, objTwet];
    console.log(tweets)
    CrearHtml();
    formulario.reset();
}

function mostrarError(text){
    const error = document.createElement('p');
    error.classList.add('error');
    error.innerHTML = text;

    const contenido = document.querySelector('#contenido');
    contenido.appendChild(error);

    setTimeout(()=>{
        error.remove();
    },3000);
}

function CrearHtml(){
   
    limpiarHTML();
    if(tweets.length > 0 ) {
        tweets.forEach( tweet =>  {
             // crear boton de eliminar
             const botonBorrar = document.createElement('a');
             botonBorrar.classList = 'borrar-tweet';
             botonBorrar.innerText = 'X';
   
             // Crear elemento y añadirle el contenido a la lista
             const li = document.createElement('li');

             // Añade el texto
             li.innerText = tweet.texto;

             // añade el botón de borrar al tweet
             li.appendChild(botonBorrar);

             // añade un atributo único...
             li.dataset.tweetId = tweet.id;

             // añade el tweet a la lista
             listaTweets.appendChild(li);
        });
   }
}
function borrarTweet(id){
    //e.preventDefault();
    // console.log(e.target.parentElement.dataset.tweetId);
    //const id = e.target.parentElement.dataset.tweetId;
    tweets = tweets.filter( tweet => tweet.id != id );

    CrearHtml();
}
function limpiarHTML() {
    while(listaTweets.firstChild) {
         listaTweets.removeChild(listaTweets.firstChild);
    }
}