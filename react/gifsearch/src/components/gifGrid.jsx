import { useEffect, useState } from 'react'
import { IMGGif } from './IMGGif';

export const GifGrid = ({ Element }) => {

    const [Images, setImages] = useState([]);

    
    useEffect(() => {
        getGif();
    }, [])



    const getGif = async () => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(Element)}&limit=5&api_key=ZbawqAHLcWVB8sj1eUSCtFGKYrRwaIem`
        const resp = await fetch(url);
        const { data } = await resp.json();





        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }


        });





        console.log(gifs);
        setImages(gifs);
    }




    return (
        <>
            <h3>{Element}</h3>

            <div>

                <IMGGif img={Images} />
            </div>
        </>
    )
}


