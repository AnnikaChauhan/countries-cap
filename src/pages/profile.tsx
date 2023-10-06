import { Typography } from "@mui/material"
import { Capacitor } from "@capacitor/core"
import { LocalNotifications } from "@capacitor/local-notifications"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import Grid from "@mui/material/Grid"
import { Item } from "./country"

const Profile = () => {
  const [display, setDisplay] = useState<any>(null)
  const [cookies] = useCookies(["cookie-set", "last-viewed-country"])

  useEffect(() => {
    console.log("COOKIES", cookies)
    LocalNotifications.requestPermissions().then((data) => {
      setDisplay(data)
      if (data.display === "denied") {
        alert("Please allow notifications")
      }
      LocalNotifications.schedule({
        notifications: [
          {
            title: "You just viewed your profile!",
            body: "Click here to join us back on the app.",
            id: Math.floor(Math.random() * 6000000),
            schedule: {
              at: new Date(Date.now() + 1000 * 5), // in 5 secs
              repeats: false,
            },
          },
        ],
      })
    })
  }, [cookies])

  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        Profile
      </Typography>
      <Typography variant="h4" gutterBottom>
        You are using our {Capacitor.getPlatform()} platform!
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>Notification Pref</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>{JSON.stringify(display)}</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Cookie Set</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>{cookies["cookie-set"] && "true"}</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Last Country Viewed</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>{cookies["last-viewed-country"]}</Item>
        </Grid>
      </Grid>
    </div>
  )
}

export default Profile
