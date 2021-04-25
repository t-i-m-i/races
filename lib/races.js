export async function getSeasons() {
  const res = await fetch('http://timiportfolio.com/resume-api/races.php', {
    headers: { 'Api-Key': process.env.API_KEY }
  })
  const data = await res.json()
  const seasons = data
    .map(({ season }) => season)
    .filter((val, idx, self) => self.indexOf(val) === idx)

  return seasons
}

export async function getSeasonsPaths() {
  const res = await fetch('http://timiportfolio.com/resume-api/races.php', {
    headers: { 'Api-Key': process.env.API_KEY }
  })
  const data = await res.json()
  const seasons = data
    .map(({ season }) => season)
    .filter((val, idx, self) => self.indexOf(val) === idx)

  return seasons.map(season => {
    return {
      params: {
        season: season
      }
    }
  })
}

export async function getRaces(season) {
  const res = await fetch('http://timiportfolio.com/resume-api/races.php', {
    headers: { 'Api-Key': process.env.API_KEY }
  })
  const data = await res.json()

  if (season) {
    return data
      .filter(item => item.season === season)
      .sort((a, b) => (a.date > b.date ? 1 : -1))
  } else {
    return data.sort((a, b) => (a.date > b.date ? 1 : -1))
  }
}
