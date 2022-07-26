import Card from "../Card/Card"
import { CardsData } from "../../data/Data"
import "./Cards.scss"

const Cards = () => {
  return (
    <div className="cards">
        {CardsData.map((card, index) => {
            return(
                <div className="parentContainer">
                    <Card
                    title={card.title}
                    color={card.color}
                    barValue={card.barValue}
                    value={card.value}
                    png={card.png}
                    series={card.series}
                    />
                </div>
            )
        })}
    </div>
  )
}

export default Cards