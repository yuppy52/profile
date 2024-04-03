import React from "react";
import { Button, Grid } from "@mui/material"

// Headerコンポーネントの定義
const Header = () => {
  return (
    <>
      <div className="bg-gray-100 rounded-xl w-11/12 py-2 mx-auto my-8 text-center shadow">
        <Grid container>
          <Grid  item xs={4}>
            <Button href="/">
              <div className="text-black text-lg px-2 py-2 rounded-xl">HOME</div>
            </Button>
          </Grid>
          <Grid  item xs={4}>
            <Button href="/product">
              <div className="text-black text-lg px-2 py-2 rounded-xl">PRODUCT</div>
            </Button>
          </Grid>
          <Grid  item xs={4}>
            <Button href="/contact">
              <div className="text-black text-lg px-2 py-2 rounded-xl">CONTACT</div>
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Header;
