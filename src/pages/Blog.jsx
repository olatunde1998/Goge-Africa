import NavigationComponent from "components/navigationComponents/NavigationComponent";
import HeroComponent from "components/heroComponents/HeroComponent";
import FooterComponent from "components/footerComponents/FooterComponent";
import CardComponentList from "components/cardComponentList/CardComponentList";
import DummyData from "components/dummyData/cardData.json";

function Blog() {
  return (
    <div>
      <NavigationComponent />
      <HeroComponent
        title="Welcome to Our Forever Updated Blog Post!"
        subtitle="Be informed! Never miss a Single post"
        imgURL="/assets/img/blogPage-img.png"
      />
      <CardComponentList dummyData={DummyData} />
      <FooterComponent />
    </div>
  );
}

export default Blog;
