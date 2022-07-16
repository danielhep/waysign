const buildId = (req, res) => {
  res.status(200).json({ buildId: process.env.VERCEL_GIT_COMMIT_SHA })
}

export default buildId
