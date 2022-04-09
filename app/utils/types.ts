import { Client } from "discord.js"
import CommandHandler from "../commands/CommandHandler"
import CooldownManager from "../commands/CooldownManager";
import { Config } from "../utils/getConfig";

export type AVClient = Client & {
  config: Config;
  commandHandler: CommandHandler
  cooldownManager: CooldownManager
}
