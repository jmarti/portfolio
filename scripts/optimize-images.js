const sharp = require(`sharp`)
const glob = require(`glob`)
const fs = require(`fs-extra`)

const matches = glob.sync('content/**/*.{png,jpg,jpeg}', {
  ignore: ['content/**/*-optimized.*']
})
const MAX_WIDTH = 1000
const QUALITY = 70


Promise.allSettled(
  matches.map(async match => {
    const stream = sharp(match)
    const info = await stream.metadata()

    if (info.width < MAX_WIDTH) {
      return
    }

    const optimizedName = match.replace(
      /(\..+)$/,
      (_, ext) => `-optimized${ext}`
    )

    try {
      await stream
        .resize(MAX_WIDTH)
        .jpeg({ quality: QUALITY })
        .toFile(optimizedName)
    } catch(err) {
      console.log(err)
    }
    return fs.rename(match, optimizedName)
  })
)