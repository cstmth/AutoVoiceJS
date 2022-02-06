import { Permissions } from "discord.js"
import { SlashCommandBuilder } from "@discordjs/builders"
import CommandContext from "./Context"

enum Environment {
  Guild,
  DM,
  Both,
}

enum Category {
  Meta,
}

interface Command {
  readonly name: string
  readonly description: string
  readonly usage: string
<<<<<<< HEAD
<<<<<<< HEAD
  readonly category: string
  readonly cooldown: number
  readonly aliases: string[]
  readonly permissions: string[]
  readonly enabled: boolean
  readonly guildOnly: boolean
  readonly ownerOnly: boolean

  constructor(commandObject: {
    name: string
    description: string
    usage: string
    category: string
    cooldown: number
    aliases?: string[]
    permissions?: string[]
    enabled?: boolean
    guildOnly?: boolean
    ownerOnly?: boolean
  }) {
    this.name = commandObject.name
    this.description = commandObject.description
    this.usage = commandObject.usage
    this.category = commandObject.category
    this.cooldown = commandObject.cooldown
    this.aliases = commandObject.aliases || []
    this.permissions = commandObject.permissions || []
    this.enabled = commandObject.enabled !== false
    this.guildOnly = commandObject.guildOnly !== false
    this.ownerOnly = commandObject.ownerOnly !== false
  }

  public execute(interaction: Interaction) {
    console.error(`${this.name} was called but is not implemented yet.`)
  }

  /**
   * Command-specific post execution logic, possibly for cleanup or logging
   */
  public postExecuteHook() {}

  /**
   * Command-specific check whether the user is authorized to use the command
   *
   * @returns true if the user is authorized to use this command, false otherwise. Returns true by default.
   */
  public isAuthorizedCall(interaction: Interaction): boolean {
    return true
  }

  /**
   * Command-specific check whether the command should be able to run based on the environment
   *
   * @returns true if the environment allows for the command to be run, false otherwise. Returns true by default.
   */
  public isValidCall(interaction: Interaction): boolean {
    return true
  }
=======
  readonly category: Category
  readonly builder: SlashCommandBuilder
  readonly cooldown?: number // TODO
  readonly aliases?: string[] // TODO
  readonly permissions?: Permissions // TODO
  readonly environment?: Environment
  readonly ownerOnly?: boolean

  execute: (ctx: CommandContext) => void
  preExecute: (ctx: CommandContext) => boolean
  postExecute: (ctx: CommandContext) => void
>>>>>>> 32a44c8 (fixup! feat: WIP add command support)
=======
  readonly category: Category
  readonly builder: SlashCommandBuilder
  readonly cooldown?: number
  readonly aliases?: string[]
  readonly permissions?: Permissions
  readonly enabled?: boolean
  readonly environment?: Environment
  readonly ownerOnly?: boolean

  execute: (ctxt: CommandContext) => void
  preExecute: (ctxt: CommandContext) => boolean
  postExecute: (ctxt: CommandContext) => void
>>>>>>> 59364f4 (feat: read config.json)
}

export default Command
export { Environment, Category }
