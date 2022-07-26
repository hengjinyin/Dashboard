import { UpdatesData } from "../../data/Data"
import "./Updates.scss"

const Updates = () => {
    return (
        <div className="updates">
            {UpdatesData.map((update) => {
                return (
                    <div className="update">
                        <img src={update.img} alt="" />
                        <div className="notification">
                            <div>
                                <span>{update.name}</span>
                                <span> {update.notification}</span>
                            </div>
                            <span>{update.time}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Updates