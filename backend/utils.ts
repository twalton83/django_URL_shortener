import { nanoid } from "nanoid"
export default function generateLink() {
  const rootURL = process.env.CLIENT_SIDE_URL
  const id = nanoid(8)

  return rootURL + "/" + id
}

