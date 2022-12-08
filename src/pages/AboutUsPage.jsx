import React from "react";
import NavigationComponent from "components/navigationComponents/NavigationComponent";
import HeroComponent from "components/heroComponents/HeroComponent";
import FooterComponent from "components/footerComponents/FooterComponent";

function AboutUsPage() {
  return (
    <div>
      <NavigationComponent />
      <HeroComponent
        title="We're Goge Africa An E-Learning Platform From West Africa"
        subtitle="We are at your call. We serve you always."
        imgURL="assets/img/about-us-Image.png"
      />
      <FooterComponent />
    </div>
  );
}

export default AboutUsPage;
