import { SlashCommandBuilder } from "@discordjs/builders"
import Command, { Environment } from "../commands/Command"

export const getDefaultBuilder = (command: Command): SlashCommandBuilder => {
  const allowedInDMs = command.environment == Environment.DM || command.environment == Environment.Both
  const onlyAllowedInDMs = command.environment == Environment.DM
  
  return new SlashCommandBuilder()
    .setName(command.name)
    .setDescription(command.description)
    .setDMPermission(allowedInDMs) // possibly remove this in the future when commands are too hidden
    .setDefaultMemberPermissions(onlyAllowedInDMs ? 0 : null) // goes for this as well
}