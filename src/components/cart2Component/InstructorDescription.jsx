import styled from "styled-components"
import { Typography } from "components/Typography"

const InstructorProfileDescription = styled.div`
  padding: 30px;
  border: 1px solid grey;
  @media (min-width: 1024px) {
    max-width: 400px;
  }
  @media (min-width: 768px) {
    max-width: 500px;
    margin: 0 auto;
  }
  @media(min-width: 1024px){
    margin: 0px 10px 0px 5px;
  }
`;
const ReleaseContainer = styled.div`
  display: flex;
`;
const ReleaseDate = styled.div``;
const ReleaseDateInfo = styled.div`
  margin-left: 60px;
`;

function InstructorDescription() {
  return (
    <InstructorProfileDescription>
            <Typography variant="bodyMedium">Description</Typography>
            <Typography
              style={{
                color: "#5C5C5C",
                textAlign: "justify",
                textJustify: "inter-word",
              }}
              variant="bodySmallFour"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              quo saepe ratione suscipit obcaecati eveniet sint voluptates odit
              magnam officiis repellat itaque aut, dolor mollitia corporis enim
              ut ipsam magni! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Qui quibusdam harum autem consequuntur inventore
              dignissimos voluptas, necessitatibus et illum? Omnis inventore est
              consequatur expedita. Nam voluptates optio deleniti est aut. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Rerum
              accusamus, voluptas voluptatem aliquam ex provident illum delectus
              facilis, suscipit blanditiis distinctio praesentium doloremque
              quidem maiores repellendus. Illum architecto ex odio? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Soluta quo saepe
              ratione suscipit obcaecati eveniet sint voluptates odit magnam
              officiis repellat itaque aut, dolor mollitia corporis enim ut
              ipsam magni! Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Qui quibusdam harum autem consequuntur inventore dignissimos
              voluptas, necessitatibus et illum? Omnis inventore est consequatur
              expedita. Nam voluptates optio deleniti est aut. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Rerum accusamus, voluptas
              voluptatem aliquam ex provident illum delectus facilis, suscipit
              blanditiis distinctio praesentium doloremque quidem maiores
              repellendus. Illum architecto ex odio?
            </Typography>
            <ReleaseContainer>
              <ReleaseDate>
                <Typography
                  style={{ color: "#5C5C5C" }}
                  variant="bodySmallFour"
                >
                  Released Date
                </Typography>
                <Typography
                  style={{ color: "#5C5C5C" }}
                  variant="bodySmallFour"
                >
                  Duration
                </Typography>
                <Typography
                  style={{ color: "#5C5C5C" }}
                  variant="bodySmallFour"
                >
                  Tags
                </Typography>
              </ReleaseDate>
              <ReleaseDateInfo>
                <Typography
                  style={{ color: "#5C5C5C" }}
                  variant="bodySmallFour"
                >
                  01/03/2019
                </Typography>
                <Typography
                  style={{ color: "#5C5C5C" }}
                  variant="bodySmallFour"
                >
                  1h 05mins 00secs
                </Typography>
                <Typography
                  style={{ color: "#5C5C5C" }}
                  variant="bodySmallFour"
                >
                  Modelling, Rendering, Animation
                </Typography>
              </ReleaseDateInfo>
            </ReleaseContainer>
          </InstructorProfileDescription>
  )
}

export default InstructorDescription