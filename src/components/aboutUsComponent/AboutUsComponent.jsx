import styled from 'styled-components'
import HeroRedComponent from 'components/heroRedComponents/HeroRedComponent';
import NavigationComponent from "components/navigationComponents/NavigationComponent";
import FooterComponent from "components/footerComponents/FooterComponent";
import CollaborationComponent from "components/aboutUsComponent/CollaborationComponent";
import ProfessionalSupportComponent from "components/aboutUsComponent/ProfessionalSupportComponent";
import TestimonyComponent from "components/aboutUsComponent/TestimonyComponent";
import CreativeTeamComponent from "components/aboutUsComponent/CreativeTeamComponent";
import LetBuildComponent from "components/aboutUsComponent/LetBuildComponent";


const AboutUsWrapper = styled.div`

`
function AboutUsComponent() {
  return (
    <AboutUsWrapper>
      <NavigationComponent/>
      <HeroRedComponent
        title="We're Goge Africa An E-Learning Platform From West Africa"
        subtitle="We are at your call. We serve you always."
        imgURL="/goge-africa/assets/img/about-us-Image1.png"
      />
      <CollaborationComponent
        title="We're Goge Africa"
        subtitle="Semaj africa is an online education platform that delivers videos courses, 
        programs and resources for individual, Advertising & Media Specialist, Online Marketing 
        Professionals, Freelancers and anyone looking to pursue a career in digital marketing, 
        Accounting, web development, programming,Multimedia and CAD design"
        imgURL="/goge-africa/assets/img/about-us-Image2.png"
      />
      <ProfessionalSupportComponent
        title="Professional Support"
        subtitle="Semaj africa is an online education platform that delivers videos courses, 
        programs and resources for individual, Advertising & Media Specialist, Online Marketing 
        Professionals, Freelancers and anyone looking to pursue a career in digital marketing, 
        Accounting, web development, programming,Multimedia and CAD design"
        imgURL="/goge-africa/assets/img/about-us-Image3.png"
      />
      <TestimonyComponent/>
      <CreativeTeamComponent
        title="Meet Our Creative Team"
        subtitle="Semaj africa is an online education platform that delivers videos courses, 
        programs and resources for individual, Advertising & Media Specialist, Online Marketing 
        Professionals, Freelancers and anyone looking to pursue a career in digital marketing, 
        Accounting, web development, programming,Multimedia and CAD design"
        imgURL="/goge-africa/assets/img/creative-team-image.png"
      />
      <LetBuildComponent
        title="Let's Build Something Great Together"
        subtitle="Semaj africa is an online education platform that delivers videos courses, 
        programs and resources for individual"
        imgURL="/assets/img/let-build-image.png"
      />
      <FooterComponent />

    </AboutUsWrapper>
  )
}

export default AboutUsComponent