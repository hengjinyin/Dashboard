import { useState } from "react";
import "./Card.scss"
import { motion, AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import CloseIcon from '@mui/icons-material/Close';
import Chart from 'react-apexcharts';
import { ChartData } from "../../data/Data"

const Card = (props) => {

  const [expanded, setExpanded] = useState(false)

  return (
    <AnimateSharedLayout>
      {
        expanded ? (
          <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
        ) :
          <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      }
    </AnimateSharedLayout>
  )
}

// ExpandedCard
function ExpandedCard({ param, setExpanded }) {

  return (
    <motion.div className="expandedCard"
      style={
        {
          background: param.color.background,
          boxShadow: param.color.boxShadow
        }
      }
      layoutId="expandableCard"
    >
      <div className="closeIcon" >
        <CloseIcon onClick={setExpanded} />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <Chart series={param.series} type='area' options={ChartData.options} />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  )
}

// CompactCard
function CompactCard({ param, setExpanded }) {
  const percentage = param.barValue;
  return (
    <motion.div className="compactCard"
      style={
        {
          background: param.color.background,
          boxShadow: param.color.boxShadow
        }
      }
      onClick={setExpanded}
      layoutId="expandableCard">
      <div className="radialBar">
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
        <span>${param.title}</span>
      </div>
      <div className="detail">
        <param.png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  )
}

export default Card