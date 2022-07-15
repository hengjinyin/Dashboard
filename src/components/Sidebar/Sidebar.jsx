import "./Sidebar.scss"
import Logo from "../../img/logo.png"
import { SidebarData } from "../../data/Data";
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { motion, AnimateSharedLayout } from "framer-motion";
import { useState } from "react";

const Sidebar = () => {

  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true:{
      left: "0"
    },
    false:{
      left: "-60%"
    },
  }

  return (
    <div>
      <div className="menuIcon" style={expanded ? {left: "58%"} : {left: "5%"}}
      onClick={()=>setExpanded(!expanded)}>
        <MenuIcon />
      </div>
      <motion.div className="sidebar"
      variants={sidebarVariants}
      animate={window.innerWidth<=768?`${expanded}`:""}>
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="" />
          <span>
            Sh<span>o</span>ps
          </span>
        </div>
        {/* menu */}
        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}>
                <item.icon />
                <span>
                  {item.heading}
                </span>
              </div>
            )
          })}
          <div className="menuItem">
            <LogoutIcon />
            <span>
              Sign out
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Sidebar