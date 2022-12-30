import styled from "styled-components"
import { Typography } from "components/Typography"
import { AvatarPicture } from "components/pictureComponent/PictureComponent";
// import { AvatarImage } from "../imageComponents/ImageComponent";


const InstructorProfileWrapper = styled.div`
  padding: 30px;
  max-width: 250px;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    max-width: 60%;
border: 1px solid grey;

  }
  @media(min-width: 1024px){
    display: block;
    margin: 0px;
    margin-left: 10px;
    margin-top: 10px;
  }
`;


const ImageWrapper = styled.div`
  // border: 2px solid grey;
  // width: 100px;
  // height: 100px;
  // border-radius: 50%;
  // background: grey;
  // margin: 0 auto;
`;
const InstructorAchievement = styled.div`
  max-width: 260px;
  @media (min-width: 768px) {
    margin-left: 100px;
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    margin-left: 0px;
  }
`;




function InstructorProfile() {
  return (
        <InstructorProfileWrapper>
          <div>
            <Typography style={{ textAlign: "center" }} variant="bodyMedium">
              Instructor
            </Typography>
            <ImageWrapper>
              {/* <AvatarImage
                src="/assets/img/avatar-image1.png"
                alt="instructor avatar "
              /> */}
              <AvatarPicture src="/assets/img/avatar-image1.png" />
            </ImageWrapper>

            <Typography
              style={{ color: "#5C5C5C", textAlign: "center" }}
              variant="bodyMedium"
            >
              Bosun Jones
            </Typography>
          </div>

          <InstructorAchievement>
            <Typography
              style={{ color: "#5C5C5C", textAlign: "center" }}
              variant="bodySmallFour"
            >
              Drew Bridewell is a senior design specialist at InVision. He
              teaches user experience design on a weekly basis to the community
              and also has piloted UX design programs for middle schools.
            </Typography>
          </InstructorAchievement>
        </InstructorProfileWrapper>

    
  )
}

export default InstructorProfile