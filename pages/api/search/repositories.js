import { normalizer } from '../../../utils/normalizer'

export default async function handler(req, res) {
  const { keyword, page } = req.query

  const result = await fetch(
    `https://api.github.com/search/repositories?q=${keyword}&page=${page}`,
    {
      headers: {
        Accept: 'application/vnd.github.mercy-preview+json',
        ...(process.env.GITHUB_TOKEN
          ? { Authorization: `token ${process.env.GITHUB_TOKEN}` }
          : {}),
      },
    }
  )
    .then((res) => {
      if (!res.ok) {
        throw res
      }
      return res.json()
    })
    .catch((e) => {
      console.error('[GitHub API] error', e)
      return {}
    })
    .then(normalizer)

  // console.log('---> server api', result)

  res.status(200).json(result)
}
