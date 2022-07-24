import CustomerReviews from "../CustomerReviews/CustomerReviews"
import Updates from "../Updates/Updates"
import "./RightSide.scss"

const RightSide = () => {
  return (
    <div className="rightSide">
        <div>
            <h2>Updates</h2>
            <Updates/>
        </div>
        <div>
            <h2>Customer Reviews</h2>
            <CustomerReviews/>
        </div>
    </div>
  )
}

export default RightSide