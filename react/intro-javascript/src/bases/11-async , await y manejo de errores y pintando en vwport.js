
///////////////////
//async









// const getImagenPromesa = () => {
//     return new Promise(resolve => 
//     resolve('https://Xblack.blackbox.com')
//     )




// }




//al ponerle la palabra async se vuelve una promesa
// const getImagenPromesa = async() => {
//     return 'https://Xblack.blackbox.com'
// }

// getImagenPromesa().then(console.log)



//utilizando el await para pedirle a la api una imagen y esperar la respuesta

const getImagenPromesa = async () => {

    //manejando los errores
    try {
        //1-guardamos el apokey en una constante
    const apiKey = 'QQsFW0cZtaeEVKzA2xx7FTfZrXFLipUO'

    //2-haciendo el fetch
    const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

    //3-para pedirle el jason a la api ------tambien con esto {} abrimos el json

    const { data } = await respuesta.json();

    //4-aqui abrimos el url  
    const url = data.images.original.url;


    console.log(url);


    //5-aqui mostramos la imagen en el viewport
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
    } catch (error) {
        console.log(error);
    }
    

}

getImagenPromesa()