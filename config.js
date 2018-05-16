module.exports = {
  cosmicjs: {
    bucket: {
      slug: process.env.COSMIC_BUCKET || '5afa3e56c4f4fe66c8fa15e6',
      read_key: process.env.COSMIC_READ_KEY,
      write_key: process.env.COSMIC_WRITE_KEY
    }
  }
}


