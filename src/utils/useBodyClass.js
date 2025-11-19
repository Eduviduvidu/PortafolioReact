import { useEffect } from "react";
import routes from "@conf/RouteMap";
import { useLocation } from "react-router-dom";

export function useBodyClass (className){
  const location = useLocation();
  useEffect(() => {
    const route = routes[location.pathname];
    const className = route?.bodyClass;

    if (className) {
      document.body.classList.add(className);
    }

    return () => {
      if (className) {
        document.body.classList.remove(className);
      }
    };
  }, [location.pathname]);

};



