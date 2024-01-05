/////////////////fetch

///peticiones http


//1-guardamos el apokey en una constante
const apiKey = 'QQsFW0cZtaeEVKzA2xx7FTfZrXFLipUO'

//2-haciendo el fetch
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

//como es una promesa lo que devuelve

peticion
    .then(resp => {
        resp.json()//como el .json retorna una promesa ya que pregunta si tiene json



            //.then(json => {console.log(json);})//aqui estamos retornando el objeto como tal




            //pero si queremos retornar lo de adento seria usando la desestructuracion
            .then(({ data }) => { 
                const {url} = data.images.original;
                
                console.log(url); 
                const img = document.createElement('img');
                img.src = url;
                document.body.append(img);
            })






            .catch(err => console.log)



    })



    .catch(err => { console.log(err); })