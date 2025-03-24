import { useState } from "react";
import Navbar from "../components/Navbar.tsx";
import DynamicBanner from "../components/DynamicBanner.tsx";

import InfoSection from "../components/InfoSection.tsx";

import Footer from "../components/Footer.tsx";

import ItemsSection from "../components/ItemsSection.tsx";

const Landingpage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query); // Update searchQuery
  };

  return (
    <>
      <Navbar onSearchChange={handleSearchQueryChange} />
      <InfoSection />
      <DynamicBanner />
      {/* <StapleMunch />
      <LocalDelicacies />
          <FruitBlend  /> */}
      <ItemsSection searchQuery={searchQuery} />
      <Footer />
    </>
  );
};

export default Landingpage;
