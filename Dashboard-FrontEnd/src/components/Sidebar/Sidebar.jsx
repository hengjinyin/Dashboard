import "./Sidebar.scss"
import Logo from "../../img/logo.png"
import { SidebarData } from "../../data/Data";
// import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {

  const location = useLocation();
  const [selected, setSelected] = useState(() => {
    SidebarData.map((item, index) => {
      if (item.link.toLowerCase() === location.pathname.toLowerCase()) {
        return item.index;
      }
    })
  });
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    SidebarData.map((item, index) => {
      if (item.link.toLowerCase() === location.pathname.toLowerCase()) {
        setSelected(index);
        return;
      }
    })
  });



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
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
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
              <Link to={item.link} style={{ textDecoration: "none" }}>
                <div className={selected === item.index ? "menuItem active" : "menuItem"}
                  key={item.index}
                  // onClick={(item) => handleSidebarOnClick(item, index)}>
                  onClick={() => setSelected(index)}>
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