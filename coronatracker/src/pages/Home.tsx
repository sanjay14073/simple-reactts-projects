import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Home: React.FC = () => {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial call to set the device width
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {deviceWidth >= 1250 && <Sidebar />}
      <div style={{ marginLeft: deviceWidth >= 1000 ? '15%' : '0' }}>
        <Header />
      </div>
    </div>
  );
};

export default Home;


