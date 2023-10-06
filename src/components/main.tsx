import { Box, Grid } from "@mui/material"

const Main = ({ children }: any) => {
  return (
    <Grid item={true} xs={12}>
      <Box
        style={{
          margin: "24px",
          padding: "24px",
          borderRadius: "12px",
        }}
      >
        {children}
      </Box>
    </Grid>
  )
}

export default Main
