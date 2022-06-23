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
    .then(normalizer)
    .catch((e) => {
      // console.error('api error', e)
      return e
    })

  // 200 （1）成功 have data （2）成功 no data
  res.status(result.status || 200).json(result)
}
