import { ItemGif } from "./ItemGif"





export const IMGGif = ({ img }) => {
    return (
        <div className="card-grid">

            {
                img.map(img => (
                    <ItemGif
                        key={img.id}
                        {...img} />
                ))
            }

        </div>
    )
}
