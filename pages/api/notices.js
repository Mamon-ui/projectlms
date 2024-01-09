import * as fs from 'fs/promises'

const path = "./pages/api/notices.json"
const encoding = "utf-8"

const getData = async() => {
  const data = JSON.parse(await fs.readFile(path, encoding))

  return data
}

const postData = async(newNotice) => {
  const data = await getData()

  data.push(newNotice)

  await fs.writeFile(path, JSON.stringify(data), encoding)
}

export default async function handler(req, res) {

  if(req.method === 'POST') {
    const newNotice = req.body
    console.log(newNotice)
    await postData(newNotice)
  }

  const data = await getData()

  res.status(200).json(data)
}
