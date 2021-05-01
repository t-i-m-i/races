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

export async function getStats() {
  const res = await fetch('http://timiportfolio.com/resume-api/races.php', {
    headers: { 'Api-Key': process.env.API_KEY }
  })
  const data = await res.json()

  const stats = data
    .filter(item => !item.season.includes('up'))
    .map(item => {
      if (item.type === 'run') {
        return (item.distance >= 42) ? 'marathonPlus' : 'marathonMinus'
      } else {
        return item.type
      }
    })
    .reduce((acc, cur) => {
      if (typeof acc[cur] === 'undefined') {
        acc[cur] = 1
      } else {
        acc[cur] += 1
      }
      return acc
    }, {})

  return stats
}
