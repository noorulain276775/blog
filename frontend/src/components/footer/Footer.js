import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Divider from "@mui/joy/Divider";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListSubheader from "@mui/joy/ListSubheader";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";

export default function Footer() {
  return (
    <Sheet
      variant="solid"
      invertedColors
      sx={{
        flexGrow: 1,
        p: 2,
        borderRadius: { xs: 0, sm: "sm" },
        backgroundColor: "rgb(216, 229, 216)",
        color: "black",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography>Follow us</Typography>
        <Divider orientation="vertical" />
        <IconButton variant="plain">
          <FacebookRoundedIcon />
        </IconButton>
        <IconButton variant="plain">
          <GitHubIcon />
        </IconButton>

        <Input
          variant="soft"
          placeholder="Email us to get register"
          type="email"
          name="email"
          endDecorator={
            <IconButton variant="soft" aria-label="subscribe">
              <SendIcon />
            </IconButton>
          }
          sx={{ ml: "auto", display: { xs: "none", md: "flex" }, minWidth: '262px'}}
        />
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { md: "flex-start" },
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <List
          size="sm"
          orientation="horizontal"
          wrap
          sx={{ flexGrow: 0, "--ListItem-radius": "8px" }}
        >
          <ListItem nested sx={{ width: { xs: "50%", md: 140 } }}>
            <ListSubheader sx={{ fontWeight: "xl" }}>Sitemap</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton>Login</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Home</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
          <ListItem nested sx={{ width: { xs: "50%", md: 180 } }}>
            <ListSubheader sx={{ fontWeight: "xl" }}>Blogs</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton>Latest</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Most Read</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Box>
    </Sheet>
  );
}
