import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const NavbarCondition = ({ children }) => {
  const [shownav, setshownav] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/form") {
      setshownav(false);
    } else {
      setshownav(true);
    }
  }, [location]);

  return <div>{shownav && children}</div>;
};

export default NavbarCondition;
