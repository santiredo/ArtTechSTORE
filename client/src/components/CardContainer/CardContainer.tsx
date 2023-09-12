import { useSelector } from "react-redux";
import { ArtGalleryItem, InitialState } from '../../redux/reducer';
import Card from '../Card/Card';
import style from './cardContainer.module.css'



const CardContainer=()=>{


    const artGallery = useSelector((state:InitialState) => state.artGallery);


    const firstRow = artGallery.slice(0, (artGallery.length/3))
    const secondRow = artGallery.slice((artGallery.length/3), (artGallery.length/3)*2)
    const thirdRow = artGallery.slice((artGallery.length/3)*2, artGallery.length)


    return(
        <div className={style.cardContainer}>
            <div className={style.cardContainerRow}>
                {firstRow?.map((card:ArtGalleryItem) => {
                    return <Card
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        price={card.price}
                        published={card.published}
                        posted={card.posted}
                        auction={card.auction}
                        type={card.type}
                        technique={card.technique}
                        description={card.description}
                        image={card.image}
                        artistName={card.artistName}
                        artistPhoto={card.artistPhoto}
                    />
                })}
            </div>
            <div className={style.cardContainerRow}>
                {secondRow?.map((card: ArtGalleryItem) => {
                    return <Card
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        price={card.price}
                        published={card.published}
                        posted={card.posted}
                        auction={card.auction}
                        type={card.type}
                        technique={card.technique}
                        description={card.description}
                        image={card.image}
                        artistName={card.artistName}
                        artistPhoto={card.artistPhoto}
                    />
                })}
            </div>
            <div className={style.cardContainerRow}>
                {thirdRow?.map((card:ArtGalleryItem) => {
                    return <Card
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        price={card.price}
                        published={card.published}
                        posted={card.posted}
                        auction={card.auction}
                        type={card.type}
                        technique={card.technique}
                        description={card.description}
                        image={card.image}
                        artistName={card.artistName}
                        artistPhoto={card.artistPhoto}
                    />
                })}
            </div>
        </div>


    )
}

export default CardContainer;