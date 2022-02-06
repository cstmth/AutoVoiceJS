import { Client, Intents, Interaction } from "discord.js"
import CommandHandler from "./commands/CommandHandler"
import getConfig from "./utils/getConfig"
<<<<<<< HEAD
<<<<<<< HEAD
=======
import deployCommands from "./misc/deployCommands"
import { AVClient } from "./misc/types"
>>>>>>> b26378d (fixup! feat: add basic client creation)
=======
import deployCommands from "./misc/deployCommands"
import { AVClient } from "./misc/types"
>>>>>>> e674d21 (fixup! feat: add basic client creation)

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })
const config = getConfig()

client.once("ready", () => {
  console.log("⚡ AutoVoice is ready!")
})

client.login(config[config.environment].token)
