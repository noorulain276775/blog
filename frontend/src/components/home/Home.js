import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="homePage-Container">
        <div className="blogs">
          <Card
            sx={{
              width: { xs : 250, sm: 300, md: 350, lg: 400 },
              maxWidth: "100%",
              boxShadow: "lg",
            }}
          >
            <CardOverflow>
              <AspectRatio sx={{ minWidth: 200 }}>
                <img
                  src="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286"
                  srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Link
                href="#product-card"
                fontWeight="md"
                color="neutral"
                textColor="text.primary"
                overlay
                endDecorator={<ArrowOutwardIcon />}
              >
                Super Rockez A400
              </Link>

              <Typography level="body-sm">
                (Only <b>7</b> left in stock!)
              </Typography>
            </CardContent>
            <CardOverflow>
              <Button
                variant="solid"
                size="lg"
                sx={{
                  backgroundColor: "rgb(216, 229, 216)",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#000",
                    color: "rgb(216, 229, 216)",
                  },
                }}
              >
                Read More
              </Button>
            </CardOverflow>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};
