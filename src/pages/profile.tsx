import { Typography } from "@mui/material"
import { Capacitor } from "@capacitor/core"

const Profile = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        Profile
      </Typography>

      <Typography variant="h4" gutterBottom>
        You are using our {Capacitor.getPlatform()} platform!
      </Typography>
    </div>
  )
}

export default Profile
