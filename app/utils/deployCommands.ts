import { AVClient } from "./types"
import { REST } from "@discordjs/rest" 
import { RESTPostAPIApplicationCommandsJSONBody, Routes } from "discord-api-types/v9"


const deployCommands = (client: AVClient) => {
  const config = client.config;
  const token = config[config.environment].token
  const clientId = config[config.environment].appId

  const commands: RESTPostAPIApplicationCommandsJSONBody[] = [];
  const rest = new REST({version: '9'}).setToken(token)
  
  for (const command of client.commandHandler.commands.values()) {
    commands.push(command.builder.toJSON())
  }

  if (config.environment == "dev") {
    console.log("+ Attempting command deployment to development server...")
    const guildId = config.dev.guildId
    rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commands }
    )
  } else {
    console.log("+ Attempting global command deployment...")
    rest.put(
      Routes.applicationCommands(clientId),
      { body: commands }
    )
  }

  console.log("+ Deployment successful!")
}

export default deployCommands

