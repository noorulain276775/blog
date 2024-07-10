import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { blogsData } from "../../redux/actions/blogActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../apiConstants";
import "./Home.css";
import Grouped from "./categorySearchFilter";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myBlogData = useSelector((state) => state.blogData);
  const handleGetBlog = () => {
    navigate("/detail");
  };

  useEffect(() => {
    dispatch(blogsData());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <div className="homePage-Container">
        <div className="blog-topContent">
          <h1>All Blogs</h1>
          <Grouped />
        </div>

        <div className="blogs">
          {myBlogData.map((blog) => (
            <div className="card-div" key={blog.id}>
              <Card
                sx={{
                  width: { xs: 300, sm: 350, md: 350, lg: 400 },
                  maxWidth: "100%",
                  boxShadow: "lg",
                }}
              >
                <CardOverflow>
                  <AspectRatio sx={{ minWidth: 200 }}>
                    <img
                      src={`${API_URL}` + blog.image}
                      alt=""
                      height="195.5px"
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
                    sx={{ minHeight: 80 }}
                  >
                    {blog.title}
                  </Link>

                  <Typography level="body-sm" sx={{ minHeight: 100 }}>
                    {blog.short_description}
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
                    onClick={handleGetBlog}
                  >
                    Read More
                  </Button>
                </CardOverflow>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
