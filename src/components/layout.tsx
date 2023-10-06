import { Grid } from "@mui/material"
import TopBar from "./topbar"
import Main from "./main"
import BottomBar from "./bottombar"
import { Capacitor } from "@capacitor/core"

const Layout = ({ children }: any) => {
  return (
    <body>
      <>
        <Grid container={true} spacing={0}>
          {Capacitor.isNativePlatform() === false && <TopBar />}
          <Main>{children}</Main>
          {Capacitor.isNativePlatform() === true && <BottomBar />}
        </Grid>
      </>
    </body>
  )
}

export default Layout
