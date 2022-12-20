import NavigationComponent from "components/navigationComponents/NavigationComponent";
import FooterComponent from "components/footerComponents/FooterComponent";
import HeroComponent from "components/heroComponents/HeroComponent";
import CourseDashboard from "components/coursesDashboard/CourseDashboard";

function Courses() {
  return (
    <div>
      <NavigationComponent />
      <HeroComponent />
      <CourseDashboard/>
      <FooterComponent />
    </div>
  );
}

export default Courses;
