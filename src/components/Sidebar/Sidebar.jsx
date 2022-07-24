import "./Sidebar.scss"
import Logo from "../../img/logo.png"
import { SidebarData } from "../../data/Data";
// import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from "framer-motion";
import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Sidebar = () => {

  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const handleSidebarOnClick = (item, index) => {
    setSelected(index);
  }

  const sidebarVariants = {
    true: {
      left: "0"
    },
    false: {
      left: "-60%"
    },
  }

  return (
    <div>
      <div className="menuIcon" style={expanded ? { left: "58%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}>
        <MenuIcon />
      </div>
      <motion.div className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}>
        {/* logo */}
        <Link to="/orders" style={{ textDecoration: "none" }}>
          <div className="logo">
            <img src={Logo} alt="" />
            <span>
              Sh<span>o</span>ps
            </span>
          </div>
        </Link>
        {/* menu */}
        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <Link to={item.link} >
                <div className={selected === index ? "menuItem active" : "menuItem"}
                  key={index}
                  onClick={(item) => handleSidebarOnClick(item, index)}>
                  <item.icon />
                  <span>
                    {item.heading}
                  </span>
                </div>
              </Link>
            )
          })}
          {/* <div className="menuItem">
            <LogoutIcon />
            <span>
              Sign out
            </span>
          </div> */}
        </div>
      </motion.div>
    </div>
  )
}

export default Sidebar