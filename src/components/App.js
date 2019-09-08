import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";

function App() {
  function getPage() {
<<<<<<< HEAD
    const route = window.location.pathname;
    if (route === "/about") return <AboutPage />;
=======
    if (route === "/about") return <AboutPage />;
    const route = window.location.pathname;
>>>>>>> f3b971e72018c4de7c685b618ecad4c3367bab8e
    return <HomePage />;
  }
  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
