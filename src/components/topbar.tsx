import MenuIcon from "@mui/icons-material/Menu"
import { Button, IconButton, Menu, MenuItem } from "@mui/material"
import * as React from "react"
import { useNavigate } from "react-router-dom"
import { AppLauncher } from "@capacitor/app-launcher"
import { Capacitor } from "@capacitor/core"

const TopBar = () => {
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const openApp = async () => {
    await AppLauncher.openUrl({
      url: "com.countries.app",
    })
  }

  return (
    <div
      style={{
        width: "100%",
        textAlign: "right",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h3>The countries app</h3>
      {Capacitor.isNativePlatform() === false && window.innerWidth < 400 && (
        <Button onClick={openApp}>Open App</Button>
      )}
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleClick}
        style={{ marginLeft: "24px" }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={(e) => {
            e.preventDefault()
            navigate("/")
          }}
        >
          Home
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            e.preventDefault()
            navigate("/search")
          }}
        >
          Search
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            e.preventDefault()
            navigate("/profile")
          }}
        >
          Profile
        </MenuItem>
      </Menu>
    </div>
  )
}

export default TopBar
