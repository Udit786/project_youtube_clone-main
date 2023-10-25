import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={40} />
      <p className="MuiTypography-root MuiTypography-h6 css-e7wzt0-MuiTypography-root" style={{ color: "white", fontSize: 18, paddingLeft: 10, marginBottom: 0, marginTop: 10 }}>CloudTube</p>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
