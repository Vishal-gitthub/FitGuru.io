import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const Home = lazy(() => import("./components/Pages/Home"));
const About = lazy(() => import("./components/Pages/About"));
const Pricing = lazy(() => import("./components/Pages/Pricing"));
const Blog = lazy(() => import("./components/Pages/Blog"));
const Contact = lazy(() => import("./components/Pages/Contact"));
const Classes = lazy(() => import("./components/Pages/Classes"));
const Gallery = lazy(() => import("./components/Pages/Gallery"));
const LoginPage = lazy(() => import("./components/Pages/LoginPage"));
const Schedule = lazy(() => import("./components/Pages/Schedule"));
const GalleryPage2 = lazy(() =>
  import("./components/Pages/Gallery-component/GalleryPage2")
);
// weekdays imported for schedule component

const Monday = lazy(() =>
  import("./components/Pages/ScheduleComponents/weekComp/Monday")
);
const Tuesday = lazy(() =>
  import("./components/Pages/ScheduleComponents/weekComp/Tuesday")
);
const Wednesday = lazy(() =>
  import("./components/Pages/ScheduleComponents/weekComp/Wednesday")
);
const Thursday = lazy(() =>
  import("./components/Pages/ScheduleComponents/weekComp/Thursday")
);
const Friday = lazy(() =>
  import("./components/Pages/ScheduleComponents/weekComp/Friday")
);
const Saturday = lazy(() =>
  import("./components/Pages/ScheduleComponents/weekComp/Saturday")
);
const Sunday = lazy(() =>
  import("./components/Pages/ScheduleComponents/weekComp/Sunday")
);
const SignUp = lazy(() => import("./components/Pages/LoginP-Component/SignUp"));

const App = () => {
  return (
   <Router>
  <div>
    <Suspense
      fallback={
        <div className="suspense-Wd">
          <div className="suspense"></div>
        </div>
      }
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/galpage" element={<GalleryPage2 />} />

        <Route path="/schedule" element={<Schedule />}>
          <Route path="monday" element={<Monday />} />
          <Route path="tuesday" element={<Tuesday />} />
          <Route path="wednesday" element={<Wednesday />} />
          <Route path="thursday" element={<Thursday />} />
          <Route path="friday" element={<Friday />} />
          <Route path="saturday" element={<Saturday />} />
          <Route path="sunday" element={<Sunday />} />
        </Route>
      </Routes>
      <Footer />
    </Suspense>
  </div>
</Router>

  );
};

export default App;
