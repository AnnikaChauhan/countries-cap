import { useEffect, useState } from "react"
import { getCountries } from "../api/countries"
import Box from "@mui/material/Box"
import Card from "../components/card"
import Typography from "@mui/material/Typography"
import { useNavigate } from "react-router-dom"
import { Toast } from "@capacitor/toast"

const Home = () => {
  const navigate = useNavigate()
  const [countryNames, setCountryNames] = useState<null | []>(null)
  const [favouriteCountries, setFavouriteCountries] = useState<any>([])

  const showHelloToast = async () => {
    await Toast.show({
      text: "Added to favourites",
    })
  }

  const toggleFavourite = (name: any, isFavourite: boolean) => {
    if (isFavourite) {
      const newFavCountries = favouriteCountries.filter(
        (country: any) => country !== name
      )
      setFavouriteCountries(newFavCountries)
      localStorage.setItem("favourites", JSON.stringify(newFavCountries))
    } else {
      const newFavCountries = [...favouriteCountries, name]
      setFavouriteCountries(newFavCountries)
      localStorage.setItem("favourites", JSON.stringify(newFavCountries))
      showHelloToast()
    }
  }

  useEffect(() => {
    const favCountries =
      localStorage.getItem("favourites") || JSON.stringify([])
    setFavouriteCountries(JSON.parse(favCountries))
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
                favourites={favouriteCountries}
                toggleFavourite={toggleFavourite}
              />
            )
          })}
        </Box>
      )}
    </div>
  )
}

export default Home
