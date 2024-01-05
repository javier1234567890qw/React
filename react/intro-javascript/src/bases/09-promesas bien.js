import { getHeroresbyID, getHeroresbyOnwer } from "./bases/08-export import  y utilizando ";


// const promesa = new Promise((resolve, reject) => {
    
//     setTimeout(() => {
//         const hero = getHeroresbyID(2);
        
//         //resolve(hero);//esto una vez cumplido lo manda para el then
//         reject(hero); //esto una vez cumplido lo manda para el 
//     }, 2000);
    


// });

// //la promesa es correcta despues de el resultado positivo de la promesa
// //dentro del then se hace lo que se quiere hacer depues de ese
// //resultado positivo

// promesa.then((p1)=> {
//     //lo que se hace despues de la promesa
//     console.log(`el nombre del heroe es ${p1.name}`)
// })
// .catch((p2) => {
//     console.log(`el nombre del heroe no aparece`);
    
// });
//p1 es lo que recibe la funcion del then despues de que se cumpla 
//el evento positivo de la promesa  

//p2 es ;o que recibe la funcion del catch despues de que el reject 
//mande la respuesta negativa de la promesa

const getHeroresbyIDAsync = (id) => {

    const promesa = new Promise((resolve, reject) => { 
    
        setTimeout(() => {
            const hero = getHeroresbyID(id);//get heroe by id da el heroe por el id
            console.log(hero)
            if (hero !== undefined) {
                resolve(hero);//esto una vez cumplido lo manda para el then
            } else {
                reject("no se encuentra")
            }
            
            //reject(hero); //esto una vez cumplido lo manda para el 
        }, 2000);
        
    
    
    });
    return promesa;
}

getHeroresbyIDAsync(1).then(heroe => console.log(heroe.name))
.catch(err => console.log(err));












/////////////////////////////////////////////////////////////////////////


/**Resumen de las promesas una proesa
 * no es mas que una funcion que recibe por parametos un valor y con ese 
 * valor retorna una new Promise con dos resultados el resolve y el reject 
 * y esos resultados a la hora de llamar la promesa se manejan con el catch el reject
 * y el then el resolve (promesa positiva),y dentro del catch y el then entonces
 * se decide lo que se quiere hacer con esa promesa
 * 
 */
