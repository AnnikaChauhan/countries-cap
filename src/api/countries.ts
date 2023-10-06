export const getCountries = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all")
  const data = await response.json()
  return data
}

export const getCountry = async (name: any) => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
  const data = await response.json()
  return data
}
