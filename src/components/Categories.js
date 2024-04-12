import React, { useState, useEffect } from "react";
import axios from "axios";
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
  Modal,
  List,
  ListItem,
  ListItemText,
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

import basics from "../components/images/basics.png";
import nlp from "../components/images/nlp.png";
import imgs from "../components/images/img.png";
import robotics from "../components/images/robotics.png";
import recommendations from "../components/images/recommendations.png";
import impact from "../components/images/impact.png";
import tabs from "../components/images/tabs.png";

const cards = [
  { imageName: basics, heading: "Basics" },
  { imageName: nlp, heading: "NLP" },
  { imageName: imgs, heading: "Image" },
  { imageName: robotics, heading: "Robotics" },
  { imageName: recommendations, heading: "Recommendations" },
  { imageName: impact, heading: "Impact" },
];

const MyGrid = styled(Grid)`
  overflow: auto;
`;

function Categories() {
  const theme = useTheme();
  const [openModal, setOpenModal] = useState(false);
  const [response, setResponse] = useState([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [targetLanguage, setTargetLanguage] = useState("en");

  useEffect(() => {
    // Initial translation
  }, []);

  const handleLanguageChange = (value) => {
    setTargetLanguage(value);
  };

  const handleOpenModal = (index) => {
    setOpenModal(true);
    setSelectedCardIndex(index);

    // Get the heading of the selected card
    const selectedCardHeading = cards[index].heading;

    // Define the prompt based on the card's heading
    const prompt = `What are the best tools for ${selectedCardHeading}?`;

    // Call the backend to get the response
    axios
      .post("https://gentle-pear-houndstooth.cyclic.app/chat", { prompt })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <MyContainer maxWidth="xl">
        <MyGrid container spacing={4}>
          {cards.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Grow in timeout={(index || 0) * 500}>
                <div onClick={() => handleOpenModal(index)} style={{ cursor: "pointer" }}>
                  <MyCard bgImage={tabs}>
                    <MyCardContent>
                      <MyTypography variant="h5" gutterBottom align="center">
                        {card.heading}
                      </MyTypography>
                    </MyCardContent>
                    <MyCardMedia image={card.imageName} title="Image title" />
                    <CardActions>
                      <Button size="small" color="primary">
                        &nbsp;
                      </Button>
                    </CardActions>
                  </MyCard>
                </div>
              </Grow>
            </Grid>
          ))}
        </MyGrid>
      </MyContainer>
      <Modal open={openModal} onClose={handleCloseModal}>
        <div
          style={{
            position: "absolute",
            width: "60%",
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(4),
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
<Typography variant="h6" id="modal-modal-title" align="center">
  The best tools for {selectedCardIndex !== null && cards[selectedCardIndex] ? cards[selectedCardIndex].heading : ""} <br />
  {response}
</Typography>
        </div>
      </Modal>
    </>
  );
}

export default Categories;
