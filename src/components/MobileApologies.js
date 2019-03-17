import React from "react";

import Footer from "./Footer";
import ScreenContainer from "./ScreenContainer";

const MobileApologies = () => (
  <ScreenContainer>
    <div />
    <div style={{ marginRight: 20, marginLeft: 20 }}>
      Sorry! This doesn't play nice with mobiles. Check it out on your computer
      :)
    </div>
    <Footer />
  </ScreenContainer>
);

export default MobileApologies;
