import * as React from "react"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import FavoriteIcon from "@mui/icons-material/Favorite"
import PublicIcon from "@mui/icons-material/Public"
import Paper from "@mui/material/Paper"
import { useNavigate, useLocation } from "react-router-dom"
import SearchIcon from "@mui/icons-material/Search"

const BottomBar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [value, setValue] = React.useState<any>(0)

  React.useEffect(() => {
    setValue(location.pathname)
    if (location.pathname.includes("country")) {
      setValue("/")
    }
  }, [location])

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          navigate(newValue)
          setValue(newValue)
        }}
      >
        <BottomNavigationAction
          label="Countries"
          value="/"
          icon={<PublicIcon />}
        />
        <BottomNavigationAction
          label="Search"
          value="/search"
          icon={<SearchIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="/profile"
          icon={<FavoriteIcon />}
        />
      </BottomNavigation>
    </Paper>
  )
}

export default BottomBar
