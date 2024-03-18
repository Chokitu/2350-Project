import React from "react";
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

const cards = [
  { imageName: "basics.png", heading: "Basics" },
  { imageName: "nlp.png", heading: "NLP" },
  { imageName: "img.png", heading: "Image" },
  { imageName: "robotics.png", heading: "Robotics" },
  { imageName: "recommendations.png", heading: "Recommendations" },
  { imageName: "impact.png", heading: "Impact" },
];

function Categories() {
  const theme = useTheme();
  return (
    <>
      <MyContainer maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
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
                    View
                  </Button>
                </CardActions>
              </MyCard>
            </Grid>
          ))}
        </Grid>
      </MyContainer>
    </>
  );
}

export default Categories;
