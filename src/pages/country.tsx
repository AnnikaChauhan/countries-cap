import { useParams } from "react-router-dom"
import { getCountry } from "../api/countries"
import { Typography, IconButton, Button } from "@mui/material"
import { MutableRefObject, useEffect, useRef, useState } from "react"
import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import { useCookies } from "react-cookie"
import { Share } from "@capacitor/share"
import IosShareIcon from "@mui/icons-material/IosShare"
import { Capacitor } from "@capacitor/core"
import { Camera, CameraResultType } from "@capacitor/camera"
import ImageListItem from "@mui/material/ImageListItem"

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
  const [, setCookie] = useCookies(["last-viewed-country"])
  const [imageElement, setImageElement] = useState<any>(null)
  // const imageElement = useRef<HTMLImageElement>(null)

  const share = async () => {
    return await Share.share({
      title: country.name.common,
      text: `Check out this info on this interesting country ${country.name.common}!`,
      url: `http://localhost:3000/country/${id}`,
      dialogTitle: "Share with buddies",
    })
  }

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    })

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath

    // Can be set to the src of an image now
    // imageElement.src = imageUrl
    setImageElement(imageUrl)
  }

  useEffect(() => {
    setCookie("last-viewed-country", id, {})
    getCountry(id)
      .then((data) => setCountry(data?.[0]))
      .catch((e) => console.log(e))
  }, [id, setCookie])

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
          {Capacitor.isNativePlatform() && (
            <IconButton
              size="large"
              style={{ marginTop: "24px" }}
              onClick={Capacitor.isNativePlatform() ? share : () => {}}
            >
              <IosShareIcon />
            </IconButton>
          )}
          <Button
            size="medium"
            variant="outlined"
            style={{ marginTop: "24px" }}
            onClick={takePicture}
          >
            Upload Photo
          </Button>
          <ImageListItem>
            {imageElement && (
              <div style={{ height: 200, width: 200 }}>
                <img
                  src={imageElement}
                  alt="uploaded image"
                  loading="lazy"
                  width="200"
                  height="200"
                />
              </div>
            )}
          </ImageListItem>
        </>
      )}
    </div>
  )
}

export default Country
