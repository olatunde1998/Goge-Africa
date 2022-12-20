import { Typography } from "components/Typography";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CardComponentList from "./CardComponentList";

const CourseDashboardWrapper = styled.div`
  margin-bottom:100px;
`;
const CourseDashboardBox = styled.div`
    max-width: 900px;
    background-color:  #FFF7DF;
    margin: 0 auto;
    margin-top: 70px;
    border-radius: 10px;
    padding: 20px;
    justify-content: center;

`;
const CourseHeading = styled.div`
    max-width: 500px;
    margin: 5px auto;
    justify-content: center;
    display: flex;
    justify-content: center;
`
const FreePremium = styled.div`
    // border: 2px solid blue;
    max-width: 500px;
    margin: 5px auto;
    display: flex;
    justify-content: space-between;
`


function CourseDashboard() {
  return (
  <CourseDashboardWrapper>
    <CourseDashboardBox>
        <CourseHeading>
            <Typography variant="bodySmallThree">My Courses</Typography>
        </CourseHeading>
        <FreePremium>
            <Typography variant="bodySmallThree">My Courses</Typography>
            <Typography variant="bodySmallThree">My Courses</Typography>
            <Link to="/orders" style={{ textDecoration: "none" }}><Typography variant="bodySmallThree">Order</Typography></Link>
        </FreePremium>
        <CardComponentList/>

    </CourseDashboardBox>
    
    </CourseDashboardWrapper>)
}

export default CourseDashboard;
