// import React from "react";
import LandingPage from "../src/Pages/Landingpage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "aos/dist/aos.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/about-us" element={<WhyUs />} />
        <Route
          path="/GoalsForHomelessness"
          element={<GoalsForHomelessness />}
        />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/builtWithPurpose" element={<BuiltwithPurpose />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/caseStudy" element={<CaseStudy />} />
        <Route path="/career" element={<Career />} />
        <Route path="/donate" element={<Donate />} /> */}
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
