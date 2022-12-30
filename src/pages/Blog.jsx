import NavigationComponent from "components/navigationComponents/NavigationComponent";
import HeroRedComponent from "components/heroRedComponents/HeroRedComponent";
import FooterComponent from "components/footerComponents/FooterComponent";
import CardComponentList from "components/cardComponentList/CardComponentList";
// import DummyData from "components/dummyData/cardData.json";

function Blog() {
  return (
    <div>
      <NavigationComponent />
      <HeroRedComponent
        title="Welcome to Our Forever Updated Blog Post!"
        subtitle="Be informed! Never miss a Single post"
        imgURL="/assets/img/blogPage-img.png"
      />
      <CardComponentList/>
      <FooterComponent />
    </div>
  );
}

export default Blog;
