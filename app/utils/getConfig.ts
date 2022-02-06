import fs from "fs"
import path from "path"

export interface Config {
  environment: "dev" | "prod"
  dev: {
    token: string
    appId: string
    guildId: string
  }
  prod: {
    token: string
    appId: string
  }
}

const getConfig = (): Config => {
  const file = fs.readFileSync(path.resolve(__dirname, "../../config.json"), "utf8")
  return JSON.parse(file)
}

export default getConfig