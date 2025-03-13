
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MoveToTop = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      }, [pathname]); // Scrolls to top whenever pathname changes
 
      return null;
}

export default MoveToTop
