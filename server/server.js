const express = require('express')
const utils = require('./utils')
const router = express.Router()
const axios = require('axios')
const bodyParser = require('body-parser')
const app = express(); 

const port = 5000

const cookie = 'search=6|1664422385144%7Crect%3D25.84172643246964%252C-80.0824785232544%252C25.74056594782679%252C-80.18744945526123%26disp%3Dmap%26mdm%3Dauto%26p%3D1%26sort%3Ddays%26z%3D1%26fs%3D1%26fr%3D0%26mmm%3D0%26rs%3D0%26ah%3D0%26singlestory%3D0%26housing-connector%3D0%26abo%3D0%26garage%3D0%26pool%3D0%26ac%3D0%26waterfront%3D0%26finished%3D0%26unfinished%3D0%26cityview%3D0%26mountainview%3D0%26parkview%3D0%26waterview%3D0%26hoadata%3D1%26zillow-owned%3D0%263dhome%3D0%26featuredMultiFamilyBuilding%3D0%09%09%09%09%09%09%09%09; zgsession=1|47270e56-d51f-4d5c-a918-948f71ee240e; zguid=24|%24c16a7412-7b54-48e1-a500-3b3d243005eb; AWSALB=LTTFLVXJSFQwPugUEyggPmR22hu0Mh5fMzjWlLOjWoeTzSUZUmvbVaS3eaiS7JU+thfVvmS93VVyPHS37S66z97IVaHJm0owrvPtyXx/2RdDqJ4kjmOK3HkZHLic; AWSALBCORS=LTTFLVXJSFQwPugUEyggPmR22hu0Mh5fMzjWlLOjWoeTzSUZUmvbVaS3eaiS7JU+thfVvmS93VVyPHS37S66z97IVaHJm0owrvPtyXx/2RdDqJ4kjmOK3HkZHLic; JSESSIONID=079A002956072EDF282B4A513BDECD9F'

router.use('/test', async (req, res) => {
  res.status(200).json({msg: "test ok"})
})

router.use('/d/:url?', async (req, res) => {
  const url = req.query.url.toString()
  const out = "cookies"
  if (url !== undefined) {
    try {
      console.log("z")
      let response = await axios.get({url, headers: Cookie})
      
      let out = utils.process(response)
      res.status(200).json({data: out, url})
    } catch (err) {
      res.status(500).json({data: url, error: err})
    }
  } else {
    res.status(200).json({data: out, url: url, msg: "url is not present"})
  }
})

app.use(bodyParser.json())
app.use('/api/', router)



app.listen(port, () => console.log(`Server listening on port: ${port}`))