import { useEffect, useState } from "react"
import { getCountries } from "../api/countries"
import Box from "@mui/material/Box"
import Card from "../components/card"
import Typography from "@mui/material/Typography"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  const [countryNames, setCountryNames] = useState<null | []>(null)
  useEffect(() => {
    getCountries().then((data) =>
      setCountryNames(
        data.map((c: any) => ({ flag: c.flag, name: c.name.common }))
      )
    )
  }, [])

  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        All Countries
      </Typography>
      {countryNames && (
        <Box
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {countryNames.map((c: any, index: number) => {
            return (
              <Card
                key={index}
                name={c.name}
                flag={c.flag}
                onClick={() => navigate(`/country/${c.name}`)}
              />
            )
          })}
        </Box>
      )}
    </div>
  )
}

export default Home
