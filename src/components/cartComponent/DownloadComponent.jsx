import styled from "styled-components";
import { Typography } from "components/Typography";

const DownloadComponentWrapper = styled.div`
  padding: 20px 20px 20px 20px;
  margin-top: 30px;
  @media (min-width: 768px) {
  margin-top: 0px;
padding: 100px 0px 100px 0px;
    
  }
`;
const DownloadBox = styled.div`
border: 0.1px solid grey;
max-width: 600px;
margin: 0 auto;
padding: 20px 0px 20px 0px;
`;

const DownloadText = styled.div`
  max-width: 550px;
  margin: 0 auto;
 
`;
const ButtonWrapper = styled.div`
    max-width: 150px;
  margin: 0 auto;
  display: flex;



`;
const Button = styled.button`
width: 100%;
border-radius: 20px;
padding: 20px 0px 20px 10px;
background-color:  #ff8a00;
border: none;
color: white;
margin: 0 10px 0 10px;


`

function DownloadComponent() {
  return (
    <DownloadComponentWrapper>
      <DownloadBox>
        <DownloadText>
          <Typography style={{textAlign: "center", color: "#FF8A00"}}  variant="bodySmallThree">
            Download Course Exercise Files
          </Typography>
          <Typography style={{textAlign: "center", color: "#5C5C5C"}} variant="bodySmallFour">
            You can either enroll for this course to gain access and also to the
            materials been attached to its online only or you can add to cart
            for checkout to view offline
          </Typography>
        </DownloadText>
        <ButtonWrapper>
            <Button>Download</Button>
        </ButtonWrapper>
      </DownloadBox>
    </DownloadComponentWrapper>
  );
}

export default DownloadComponent;
