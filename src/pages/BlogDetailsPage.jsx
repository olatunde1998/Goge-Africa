import styled from "styled-components";
import NavigationComponent from "components/navigationComponents/NavigationComponent";
import HeroComponent from "components/heroComponents/HeroComponent";
import FooterComponent from "components/footerComponents/FooterComponent";
import { Typography } from "components/Typography";
import ImageComponent from "components/imageComponents/ImageComponent";
import CommentComponent from "components/commentComponent/CommentComponent";
import CommentFormComponent from "components/commentComponent/CommentFormComponent";

const BlogDetailsPageWrapper = styled.div``;
const BlogImageContainer = styled.div`
  background-color: #ffc000;
  border-radius: 20px;
`;
const BlogFullText = styled.div`
  max-width: 768px;
  padding-top: 60px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
  margin: 0 auto;
`;
const CommentWrapper = styled.div`
  border: 1px solid grey;
  max-width: 768px;
  margin: 80px auto 0px auto;
`;

function BlogDetailsPage() {
  return (
    <BlogDetailsPageWrapper>
      <NavigationComponent />
      <HeroComponent
        title="How To; Have A Good Music Listening Ear"
        subtitle="19 Augs, 2019 -by Tommy Lang"
        imgURL="/assets/img/blogDetailPage-image1.png"
      />
      <BlogFullText>
        <Typography variant="bodySmallThree">
          Luxury is something everyone deserves from time to time, such an
          indulgence can make a vacation a truly rejuvenating experience . One
          of the best ways to get the luxury of the rich and famous to fit into
          your budget can be yours through yacht companies. These companies
          specializes in creating custom sailing vacations that redefine travel.
        </Typography>
        <Typography variant="bodySmallThree">
          Planning Your Luxury Trips
        </Typography>
        <Typography variant="bodySmallThree">
          With your budget in mind, it is easy to plan a chartered yacht
          vacation companies often have a fleet of sailing vessels that can
          accommodate parties of various size. You may want to make it a more
          intimate trip with only close family. These are charters, that can be
          rented for as few as two people. These include either a sailboat or
          motorboat and can come with or without a crew and captain to sail the
          ship for you. If you choose not to hire a crew, you will have to show
          that you are knowledgeable of sailing and can handle the ship
          completely.
        </Typography>
        <Typography variant="bodySmallThree">
          The next part of planning is to determine your starting and ending
          ports. This could be a place close to home and sail in one area or
          start and finish at two different ports. Generally, starting and
          stopping in the same port will save you money and is usually more
          convenient. You can also fly to a destination far firm home and then
          sail another exotic sea. There are luxury yacht charter companies that
          cruise the Caribbean and Meditarranean seas or around Alaska, the
          Panama Canal or any place you can imagine.
        </Typography>
        <Typography variant="bodySmallThree">
          Determining the type of cruise is another aspect of planning a
          chartered yachting trip. You can have as little or many crew members
          as the strip will hold. A captain takes all the worries out of
          navigating and onboard housekeeping services make it a real vacation
          that rival the finest hotel services. You can also choose to have a
          chef and service crew as part of your vacation package.
        </Typography>
        <Typography variant="headingSmall">
          Another Sub-heading Information will be a perfect fit here.
        </Typography>
        <Typography variant="bodySmallThree">
          Luxury is something everyone deserves from time to time, such an
          indulgence can make a vacation a truly rejuvenating experience . One
          of the best ways to get the luxury of the rich and famous to fit into
          your budget can be yours through yacht companies. These companies
          specializes in creating custom sailing vacations that redefine travel.
        </Typography>
        <Typography variant="bodySmallThree">
          Planning Your Luxury Trips
        </Typography>
        <Typography variant="bodySmallThree">
          With your budget in mind, it is easy to plan a chartered yacht
          vacation companies often have a fleet of sailing vessels that can
          accommodate parties of various size. You may want to make it a more
          intimate trip with only close family. These are charters, that can be
          rented for as few as two people.
        </Typography>
        <BlogImageContainer>
          <ImageComponent src="/assets/img/blogDetailPage-image2.png" />
        </BlogImageContainer>
        <Typography variant="bodySmallThree">
          Luxury is something everyone deserves from time to time, such an
          indulgence can make a vacation a truly rejuvenating experience . One
          of the best ways to get the luxury of the rich and famous to fit into
          your budget can be yours through yacht companies. These companies
          specializes in creating custom sailing vacations that redefine travel.
        </Typography>
        <Typography variant="bodySmallThree">
          Planning Your Luxury Trips
        </Typography>
        <Typography variant="bodySmallThree">
          With your budget in mind, it is easy to plan a chartered yacht
          vacation companies often have a fleet of sailing vessels that can
          accommodate parties of various size. You may want to make it a more
          intimate trip with only close family. These are charters, that can be
          rented for as few as two people.
        </Typography>
      </BlogFullText>
      <CommentWrapper>
        <Typography variant="headingNormal">4 Comment</Typography>
        <CommentComponent
          src="/assets/img/avatar-image1.png"
          commentInfo="With your budget in mind, it is easy to plan a chartered yacht
          vacation. Companies often have a fleet of sailing vessels that can be
          accommodate parties of various sizes."
          reply="Reply"
          commentDate="35 mins ago, 15 November 2019"
        />
        <CommentComponent
          src="/assets/img/avatar-image2.png"
          commentInfo="With your budget in mind, it is easy to plan a chartered yacht
          vacation. Companies often have "
          reply="Reply"
          commentDate="35 mins ago, 15 November 2019"
        />
        <CommentComponent
          src="/assets/img/avatar-image3.png"
          commentInfo="With your budget in mind, it is easy to plan a chartered yacht
          vacation. Companies often have."
          reply="Reply"
          commentDate="35 mins ago, 15 November 2019"
        />
        <CommentComponent
          src="/assets/img/avatar-image4.png"
          commentInfo="With your budget in mind, it is easy to plan a chartered yacht
          vacation. Companies often have a fleet of sailing vessels that can be
          accommodate parties of various sizes."
          reply="Reply"
          commentDate="35 mins ago, 15 November 2019"
        />
      </CommentWrapper>
      <CommentFormComponent />

      <FooterComponent />
    </BlogDetailsPageWrapper>
  );
}

export default BlogDetailsPage;
