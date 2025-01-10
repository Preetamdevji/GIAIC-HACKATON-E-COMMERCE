import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
// import EmailIcon from "@mui/icons-material/Email";
// import InboxIcon from "@mui/icons-material/Inbox";
import { Routes,Route } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Dashboard from "./components/Dashboard"
import CustomerTable from "./components/CustomerTable"
import OrderTable from "./components/OrderTables"
import ProductTable from "./components/ProductTable"
import CreatePrroductForm from "./components/CreatePrroductForm"


const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <DashboardIcon /> },
  { name: "Customers", path: "/admin/customers", icon: <DashboardIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <DashboardIcon /> },
  {
    name: "AddProducts",
    path: "/admin/product/create",
    icon: <DashboardIcon />,
  },
  // {name : "", path : ""},
];

const Admin = () => {
  //Meterial UI
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBar, setSideBar] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}>
      <>
        {/* {isLargeScreen && <Toolbar />} */}
        <List>
          {menu.map((item, index) => (
            <ListItem
              key={item.name}
              disablePadding
              onClick={() => navigate(item.path)}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <div className="flex h-[100vh]">
      <CssBaseline />
      <div className="w-[15%] border border-r-black-900 ">
        {drawer}
      </div>
      
        <div className="w-[85%]">
        <Routes>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/product/create" element={<CreatePrroductForm/>}></Route>
          <Route path="/products" element={<ProductTable/>}></Route>
          <Route path="/customers" element={<CustomerTable/>}></Route>
          <Route path="/orders" element={<OrderTable/>}></Route>
        </Routes>
        </div>
        
      
    </div>
  );
};

export default Admin;
