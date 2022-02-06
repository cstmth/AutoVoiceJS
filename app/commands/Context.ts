import { ApplicationCommand, CommandInteraction, Guild, GuildMember, GuildTextBasedChannel, User } from "discord.js"
import { AVClient } from "../misc/types"
import Command from "./Command"

class CommandContext {
  interaction: CommandInteraction
  apiCommand: ApplicationCommand
  command: Command
  client: AVClient
  guild: Guild | null
  channel: GuildTextBasedChannel | null
  member: GuildMember | null
  user: User

  constructor(interaction: CommandInteraction, command: Command) {
    this.interaction = interaction
    this.channel = interaction.channel as GuildTextBasedChannel // checked in CommandHandler
    this.client = interaction.client as AVClient // ok because is singleton, see index.ts
    this.apiCommand = interaction.command as ApplicationCommand // checked in CommandHandler
    this.guild = interaction.guild
    this.member = interaction.member as GuildMember // checked in CommandHandler
    this.user = interaction.user
    this.command = command
  }
}

export default CommandContext
