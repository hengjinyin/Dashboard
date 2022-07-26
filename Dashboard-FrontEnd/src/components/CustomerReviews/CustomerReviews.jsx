import "./CustomerReviews.scss"
import Chart from 'react-apexcharts';
import { ChartData } from "../../data/Data"

const CustomerReviews = () => {
  return (
    <div className="CustomerReviews">
        <Chart series={ChartData.series} options={ChartData.options} type="area"/>
    </div>
  )
}

export default CustomerReviews