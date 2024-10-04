import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Loading from "./componets/Loader";
import "./App.css";

function App() {
  //useState() for the loader
  const [loading, setLoading] = useState(true);

  //useEffect to add a delay before showing the content
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full h-screen bg-black">
          <h1 className="text-white text-center text-3xl">Test</h1>
        </div>
      )}
    </>
  );
}

export default App;
