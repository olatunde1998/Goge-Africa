import NavigationComponent from 'components/navigationComponents/NavigationComponent';
import AdvertComponent from 'components/advertComponents/AdvertComponent';
import FooterComponent from 'components/footerComponents/FooterComponent';
import CardComponentList from 'components/cardComponentList/CardComponentList';
import DummyData from "components/dummyData/cardData.json"

function Blog() {
  return (
    <div>
      <NavigationComponent />
      <AdvertComponent />
      <CardComponentList dummyData={DummyData}/>
      <FooterComponent />

    </div>
  )
}

export default Blog;