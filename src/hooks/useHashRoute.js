import { useEffect, useState } from "react";

// Minimal hash router. Routes look like "#/software"; anything else (including
// the in-page anchors "#work", "#contact", ...) resolves to the home page, so
// the existing nav links keep working untouched.
const readRoute = () => {
  const hash = window.location.hash;
  return hash.startsWith("#/") ? hash.slice(2) : "";
};

export const useHashRoute = () => {
  const [route, setRoute] = useState(readRoute);

  useEffect(() => {
    const handleHashChange = () => setRoute(readRoute());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return route;
};
