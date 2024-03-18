// styles.js
import styled from "@emotion/styled";
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
import { PhotoCamera } from "@mui/icons-material";

export const MyStyledComponent = styled.div`
  color: ${(props) => props.theme.palette.primary.main};
  padding: ${(props) => props.theme.spacing(3)};
  background-color: lightgrey;
`;

export const MyStyledTypography = styled(Typography)`
  color: ${(props) => props.theme.palette.secondary.main};
`;

export const MyStyledButton = styled(Button)`
  margin-top: 40px;
`;

export const MyStyledPhotoCamera = styled(PhotoCamera)`
  margin-right: 20px;
`;

export const MyContainer = styled(Container)`
  padding: 20px 0;
`;

export const MyCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MyCardMedia = styled(CardMedia)`
  padding-top: 56.25%;
`;

export const MyCardContent = styled(CardContent)`
  flex-grow: 1;
`;

export const MyFooter = styled.footer`
  padding: 50px 0;
  background-color: black;
  color: white
`;
