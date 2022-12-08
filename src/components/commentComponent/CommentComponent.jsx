import React from "react";
import { Typography } from "components/Typography";
import styled from "styled-components";
import { AvatarImage } from "components/imageComponents/ImageComponent";

const CommentComponentWrapper = styled.div`
  border: 0.5px solid grey;
  display: flex;
  max-width: 768px;
  margin: 0 auto;
  padding: 10px 20px 20px 20px;
`;

const CommentInfo = styled.div`
  margin-left: 30px;
`;

const ImageContainer = styled.div`
  vertical-align: middle;
  width: 50px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: grey;
`;
const CommentDate = styled.div`
  display: flex;
  max-width: 320px;
  justify-content: space-between;
`;

function CommentComponent({ src, commentInfo, commentDate, reply }) {
  return (
    <CommentComponentWrapper>
      <ImageContainer>
        <AvatarImage src={src} />
      </ImageContainer>
      <CommentInfo>
        <Typography variant="bodySmallThree">{commentInfo}</Typography>
        <CommentDate>
          <Typography variant="bodySmallThree">{commentDate}</Typography>
          <Typography variant="bodySmallThree">{reply}</Typography>
        </CommentDate>
      </CommentInfo>
    </CommentComponentWrapper>
  );
}

export default CommentComponent;
