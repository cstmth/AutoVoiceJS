<<<<<<< HEAD
<<<<<<< HEAD
import { Client, CommandInteraction, Interaction } from "discord.js"
import Command from "./Command"
=======
import { CommandInteraction, Interaction } from "discord.js"
import { errorDmOnly, errorGuildOnly } from "../misc/embeds/errorMessager"
import { AVClient } from "../misc/types"
import Command, { Environment } from "./Command"
import CommandContext from "./Context"
>>>>>>> 59364f4 (feat: read config.json)
import HelpCommand from "./impl/meta/HelpCommand"
class CommandHandler {
  commands: { [name: string]: Command } = {}

<<<<<<< HEAD
  constructor(private readonly client: Client) {
    this.commands["help"] = new HelpCommand() // TODO: Use HelpCommand.name instead of "help"
=======
import { CommandInteraction, Interaction } from "discord.js"
import { AVClient } from "../misc/types"
import Command from "./Command"
import { hasCooldown, hasEnvironment, hasPermissions, isOwnerOnly, passesCooldownCheck, passesEnvironmentCheck, passesOwnerOnlyCheck, passesPermissionsCheck } from "./commandChecks"
import CommandContext from "./Context"
import AboutCommand from "./impl/meta/AboutCommand"
=======
  constructor(client: AVClient) {
    ;[new HelpCommand()].forEach((command) => (this.commands[command.name] = command))
>>>>>>> 59364f4 (feat: read config.json)

class CommandHandler {
  commands: Map<string, Command> = new Map()

  constructor(client: AVClient) {
    const commands = [
      new AboutCommand()
    ]
    
    commands.forEach((command) => {
      this.commands.set(command.name, command)
    })
>>>>>>> 32a44c8 (fixup! feat: WIP add command support)

    // STEP 0
    client.on("interactionCreate", (interaction: Interaction) => {
      if (!interaction.isCommand()) return

<<<<<<< HEAD
<<<<<<< HEAD
      // This is not the place to handle Interactions other than CommandInteractions ;.)
=======
      this.checkInvocationValidity(interaction)
>>>>>>> 59364f4 (feat: read config.json)
    })
  }

  private checkInvocationValidity(interaction: CommandInteraction) {
    // Check if there is a command with the given name
    if (!this.commands[interaction.commandName]) {
      throw new Error(`Command ${interaction.commandName} not found but requested`)
    }

    const ctxt = new CommandContext(interaction, this.commands[interaction.commandName])

    if (this.isValidEnvironment(ctxt)) {
      ctxt.command.execute(ctxt)
    }
  }

<<<<<<< HEAD
  private isAuthorized() {}
=======
      const ctx = this.getContext(interaction)
      if (this.passesChecks(ctx)) {
        this.runCommand(ctx)
      }
    })
  }

  // STEP 1
  private getContext(interaction: CommandInteraction) {
    if (!this.commands.has(interaction.commandName)) {
      throw new Error(`Command ${interaction.commandName} not found but requested`)
    }

    return new CommandContext(interaction, this.commands.get(interaction.commandName) as Command)
  }
  // STEP 2
  private passesChecks = (ctx: CommandContext): boolean => {
    return (!hasCooldown(ctx) || passesCooldownCheck(ctx)) &&
      (!hasPermissions(ctx) || passesPermissionsCheck(ctx)) &&
      (!hasEnvironment(ctx) || passesEnvironmentCheck(ctx)) &&
      (!isOwnerOnly(ctx) || passesOwnerOnlyCheck(ctx))
  }

  // STEP 3
  private runCommand(ctx: CommandContext) {
    const command = ctx.command
    if (command.preExecute(ctx)) {
      command.execute(ctx)
      command.postExecute(ctx)
    }
  }
>>>>>>> 32a44c8 (fixup! feat: WIP add command support)
=======
  private isValidEnvironment(ctxt: CommandContext): boolean {
    if (ctxt.guild == null && ctxt.command.environment == Environment.Guild) {
      errorGuildOnly(ctxt)
    } else if (ctxt.guild != null && ctxt.command.environment == Environment.DM) {
      errorDmOnly(ctxt)
    } else {
      return true
    }

    return false
  }
>>>>>>> 59364f4 (feat: read config.json)
}

export default CommandHandler
