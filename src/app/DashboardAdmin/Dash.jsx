import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Sidebar from '@/scenes/global/Sidebar';
import Topbar from '@/scenes/global/Topbar';
import HeaderAdminTop from '@/scenes/dashboard/HeadersAdminTop';
import Team from '@/scenes/team/Team';
import Contacts from '@/scenes/Contacts/Contacts';
import Invoices from '@/scenes/invoices/Invoices';
import Form from '@/scenes/form/form';
import Bar from '@/scenes/Bar/Bar';
import PieChart from '@/components/PieChart';
import LineChart from '@/scenes/LineChart/LineChart';
import Home from '@/scenes/Home/Home';
import Logout from '@/scenes/Logout/Logout';
import Categories from '@/components/dashboardAdmin/Categories';
import Register from '@/components/dashboardAdmin/Register';
import { useSelector } from 'react-redux';
import "./app.css";
import ProductPage from '@/components/dashboardAdmin/ProductPage/ProductPage';

const Dash = () => {
  const [mainComponent, setMainComponent] = useState(<HeaderAdminTop />);
  const [loading, setLoading] = useState(true);
  const token = useSelector((state) => state.auth.token);
  const userRole = token ? JSON.parse(atob(token.split('.')[1])).role : null;

  useEffect(() => {
    const verifyTokenAndRole = async () => {
      try {
        if (userRole === "SUPER_ADMIN" || userRole === "ADMIN") {
          // Ensure HeaderAdminTop is displayed initially
          setMainComponent(<HeaderAdminTop />);
        } else {
          // Handle unauthorized access
          throw new Error("Access denied");
        }
      } catch (error) {
        console.error('Error verifying token:', error);
        setLoading(false);
        // Redirect to error page if unauthorized or error occurs
        window.location.href = '/error';
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      verifyTokenAndRole();
    } else {
      setLoading(false);
      // Redirect to error page if token is not present
      window.location.href = '/error';
    }
  }, [token, userRole]);

  const handleMenuClick = (menuItem) => {
    switch (menuItem) {
      case "Manage Team":
        setMainComponent(<Team />);
        break;
      case "Contacts Information":
        setMainComponent(<Contacts />);
        break;
      case "Product Page":
        setMainComponent(<ProductPage />);
        break;
      case "Categories Page":
        setMainComponent(<Categories />);
        break;
      case "Invoices Balances":
        setMainComponent(<Invoices />);
        break;
      case "Profile Form":
        setMainComponent(<Form />);
        break;
      case "Bar Chart":
        setMainComponent(<Bar />);
        break;
      case "Pie Chart":
        setMainComponent(<PieChart />);
        break;
      case "Register Form":
        setMainComponent(<Register />);
        break;
      case "Line Chart":
        setMainComponent(<LineChart />);
        break;
        case "Home":
          setMainComponent(<Home/>);
          break;
          case "Logout":
            setMainComponent(<Logout />);
            break;
      default:
        setMainComponent(<HeaderAdminTop />);
        break;
    }
  };

  if (loading) {
    return null; // Or show a loading spinner/message
  }

  return (
    <Box className="app-container">
      <Sidebar onMenuClick={handleMenuClick} />
      <Box className="main-content">
        <Topbar />
        
        {mainComponent}
      </Box>
    </Box>
  );
};

export default Dash;
