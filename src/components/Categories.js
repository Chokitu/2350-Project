import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  Grow,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import {
  MyStyledComponent,
  MyTypography,
  MyStyledButton,
  MyStyledPhotoCamera,
  MyContainer,
  MyCard,
  MyCardMedia,
  MyCardContent,
  MyFooter,
} from "./styles";

import styled from "@emotion/styled";

const cards = [
  { imageName: "basics.png", heading: "Basics" },
  { imageName: "nlp.png", heading: "NLP" },
  { imageName: "img.png", heading: "Image" },
  { imageName: "robotics.png", heading: "Robotics" },
  { imageName: "recommendations.png", heading: "Recommendations" },
  { imageName: "impact.png", heading: "Impact" },
];



const MyGrid = styled(Grid)`

`;

function Categories() {
    const theme = useTheme();
    return (
      <>
        <MyContainer maxWidth="xl">
          <MyGrid container spacing={4}>
            {cards.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Grow in timeout={(index || 0) * 500}>
                  <Link to={`/${card.heading.toLowerCase()}`} style={{ textDecoration: 'none' }}>
                    <MyCard>
                      <MyCardContent>
                        <MyTypography variant="h5" gutterBottom align="center">
                          {card.heading}
                        </MyTypography>
                      </MyCardContent>
                      <MyCardMedia
                        image={`/images/${card.imageName}`}
                        title="Image title"
                      />
                      <CardActions>
                        <Button size="small" color="primary">
                          &nbsp;
                        </Button>
                      </CardActions>
                    </MyCard>
                  </Link>
                </Grow>
              </Grid>
            ))}
          </MyGrid>
        </MyContainer>
      </>
    );
  }
  
  export default Categories;