import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CSSObject, styled } from "@mui/material/styles";
import {
  Info,
  InfoEyebrow,
  InfoSlotStyles,
  InfoSubtitle,
  InfoTitle,
} from "../info-basic";


const useStyles = (): CSSObject & Partial<InfoSlotStyles> => {
  return {
    eyebrow: {
      color: "rgba(255, 255, 255, 0.92)",
      // fontFamily: '"Spartan", san-serif',
      lineHeight: 1.4,
      fontSize: "1.0625rem",
      letterSpacing: "1px",
      textTransform: "initial",
      marginBottom: 0,
    },
    title: {
      color: "#fff",
      fontSize: "1.25rem",
      fontWeight: "bold" as const,
      lineHeight: 1.2,
    },
    subtitle: {
      color: "rgba(255, 255, 255, 0.72)",
      lineHeight: 1.5,
      "&:last-child": {
        marginTop: "0rem",
      },
    },
  };
};

const StyledCard = styled(Card)({
  borderRadius: "1rem",
  boxShadow: "none",
  position: "relative",
  minWidth: 200,
  minHeight: 200,
  "&:after": {
    content: '""',
    display: "block",
    position: "absolute",
    width: "100%",
    height: "64%",
    bottom: 0,
    zIndex: 1,
    background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
  },
});

const StyledCardMedia = styled(CardMedia)({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 0,
  backgroundPosition: "center"
});

const Content = styled("div")(({ theme }) => ({
  padding: theme.spacing(3, 2),
  position: "absolute",
  zIndex: 2,
  bottom: -14,
  width: "100%",
}));

export function CardGalaxy({ data }) {
  return (
    <>
      {(data || []).map((item) => (
        <a href={item.link} key={item.id} target="_blank" rel="noopener noreferrer">
          <StyledCard key={item.id}>
            <StyledCardMedia image={item.image} />
            <Content>
              <Info useStyles={useStyles}>
                <InfoEyebrow>{item.eyebrow}</InfoEyebrow>
                <InfoTitle sx={{color: item.color}}>{item.title}</InfoTitle>
                <InfoSubtitle>{item.subtitle}</InfoSubtitle>
              </Info>
            </Content>
          </StyledCard>
        </a>
      ))}
    </>
  );
}
