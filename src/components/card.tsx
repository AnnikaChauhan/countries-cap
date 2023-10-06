import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { IconButton } from "@mui/material"
import StarOutlineIcon from "@mui/icons-material/StarOutline"
import StarIcon from "@mui/icons-material/Star"
import { useEffect, useState } from "react"

const SimpleCard = ({
  name,
  flag,
  onClick,
  favourites,
  toggleFavourite,
}: {
  name: string
  flag: string
  onClick: () => any
  favourites?: any
  toggleFavourite?: any
}) => {
  const [favourite, setFavourite] = useState(false)

  useEffect(() => {
    setFavourite(false)
    if (favourites && favourites.includes(name)) {
      setFavourite(true)
    }
  }, [favourites, name])

  return (
    <Card sx={{ minWidth: 200 }} style={{ margin: "10px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
          {flag}
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
        <Button size="small" onClick={onClick}>
          Learn More
        </Button>
        <IconButton onClick={() => toggleFavourite(name, favourite)}>
          {favourite ? <StarIcon /> : <StarOutlineIcon />}
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default SimpleCard
