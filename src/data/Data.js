import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import InventoryIcon from '@mui/icons-material/Inventory';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import SettingsIcon from '@mui/icons-material/Settings';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import LogoutIcon from '@mui/icons-material/Logout';
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
export const SidebarData = [
    {
        icon: HomeIcon,
        heading: "Dashboard",
    },
    {
        icon: GroupIcon,
        heading: "Users",
    },
    {
        icon: InventoryIcon,
        heading: "Invertory",
    },
    {
        icon: PointOfSaleIcon,
        heading: "Sale",
    },
    {
        icon: SettingsIcon,
        heading: "Settings",
    },
    {
        icon: LogoutIcon,
        heading: "Sign out",
    },
]

export const ChartData = {
    series: [
        {
            name: "Review",
            data: [10, 50, 30, 90, 40, 120, 100]
        }
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blure: 3,
        color: "#000",
        opacity: 0.35,
      },
      fil: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        surve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:00:00.000Z",
          "2018-09-19T02:00:00.000Z",
          "2018-09-19T03:00:00.000Z",
          "2018-09-19T04:00:00.000Z",
          "2018-09-19T05:00:00.000Z",
          "2018-09-19T06:00:00.000Z",
        ]
      }
    }
  }

export const CardsData =[
    {
        title: "Sales",
        color: {
            background: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "25,970",
        png: AttachMoneyIcon,
        series:[
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100],
            }
        ]
    },
    {
        title: "Revenue",
        color: {
            background: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 80,
        value: "14,970",
        png: CreditCardIcon,
        series:[
            {
                name: "Revenue",
                data: [10, 100, 50, 70, 80, 30, 40],
            }
        ]
    },
    {
        title: "Expenses",
        color: {
            background: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue: 60,
        value: "4,972",
        png: ReceiptLongIcon,
        series:[
            {
                name: "Expenses",
                data: [10, 25, 50, 39, 80, 30, 40],
            }
        ]
    },
]

export const UpdatesData = [
    {
        img: img1,
        name: "Andrew Thomas",
        notification: "has ordered Apple smart watch 2500mh batter.",
        time: "25 seconds ago",
    },
    {
        img: img2,
        name: "James Thomas",
        notification: "has ordered Apple smart watch 2500mh batter.",
        time: "35 seconds ago",
    },
    {
        img: img3,
        name: "Tom Thomas",
        notification: "has ordered Apple smart watch 2500mh batter.",
        time: "55 seconds ago",
    },
]