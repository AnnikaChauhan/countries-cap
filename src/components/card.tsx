import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

const SimpleCard = ({
  name,
  flag,
  onClick,
}: {
  name: string
  flag: string
  onClick: () => any
}) => {
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
      <CardActions>
        <Button size="small" onClick={onClick}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default SimpleCard
