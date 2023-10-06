import { Box, IconButton, InputAdornment, Typography } from "@mui/material"
import TextField from "@mui/material/TextField"
import SearchIcon from "@mui/icons-material/Search"
import { useState } from "react"
import { getCountry } from "../api/countries"
import Card from "../components/card"
import { useNavigate } from "react-router-dom"

const Search = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState<null | []>(null)

  const handleSearch = () => {
    getCountry(searchTerm).then((data) => setResults(data))
  }
  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h3">Search</Typography>
      <TextField
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        id="outlined-basic"
        label="Search here"
        variant="outlined"
        style={{ maxWidth: "500px", marginTop: "24px" }}
        fullWidth={true}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleSearch}
                edge="end"
                color="primary"
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {results && (
        <div style={{ marginTop: "12px" }}>
          <Typography variant="h5" gutterBottom>
            Results ({results.length})
          </Typography>
          <Box>
            {results.map((c: any, index: number) => {
              return (
                <Card
                  key={index}
                  name={c.name.common}
                  flag={c.flag}
                  onClick={() => navigate(`/country/${c.name.common}`)}
                />
              )
            })}
          </Box>
        </div>
      )}
    </div>
  )
}

export default Search
