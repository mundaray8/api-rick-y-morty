// //alert("hola mundo")


// // prompt para ingresar valores del usurario
// //var nombreUs = prompt("Wilmy Mundaray")

// //alert para mostrar mensaje al usuario
// //alerta( nombreUs + "Bienvenido a la api de rick y morty") 

// var numero = parseInt(prompt("ingresa un numero"));
// //combierte un string ea un numero entenro

// var numero2 = parseInt(prompt("ingresa otro numero"));
// //combierte un string ea un numero entenro

// var suma = numero + numero2;
// alert("la suma de los numero es:" + suma) 

// //parseInt ("1"); // combierte un string a un numero entero

personajes (mostrarDatos)
function personajes(done) {

    const url = 'https://rickandmortyapi.com/api/character';
    
    fetch(url)
        .then(Resp => Resp.json())
        .then(data => done (data))
        .catch(error => consola)
        .const (results => consola.log (error))
        .finally(() => console.log('finalizado'));


    return resultados
}

function mostrarDatos(data) {
    console.log(data.results);
    const results = data.results;
    const section = document.querySelector('.section');
    let html = '';
    results.forEach(element => {
        html += `
        <div class="card">
        <img src="${element.image}" alt="${element.name}">
        <h2>${element.name}</h2>
        <p>${element.species}</p>
        </div>
        `
    });
    section.innerHTML = html;
}

obtenerDatos(mostrarDatos);