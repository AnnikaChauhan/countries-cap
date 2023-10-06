import { useParams } from "react-router-dom"
import { getCountry } from "../api/countries"
import { Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import { useCookies } from "react-cookie"

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}))

const Country = () => {
  const { id } = useParams()
  const [country, setCountry] = useState<any>(null)
  const [_cookies, setCookie] = useCookies(["last-viewed-country"])

  useEffect(() => {
    setCookie("last-viewed-country", id, {})
    getCountry(id)
      .then((data) => setCountry(data?.[0]))
      .catch((e) => console.log(e))
  }, [])

  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h3">{id}</Typography>
      {country && (
        <>
          <Typography variant="h1">{country.flag}</Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item>Population</Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                {country.population
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>Capital City</Item>
            </Grid>
            <Grid item xs={8}>
              <Item>{country.capital.join(", ")}</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>Continent</Item>
            </Grid>
            <Grid item xs={8}>
              <Item>{country.continents.join(", ")}</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>Region</Item>
            </Grid>
            <Grid item xs={8}>
              <Item>{country.region}</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>Sub Region</Item>
            </Grid>
            <Grid item xs={8}>
              <Item>{country.subregion}</Item>
            </Grid>
          </Grid>
        </>
      )}
    </div>
  )
}

export default Country
