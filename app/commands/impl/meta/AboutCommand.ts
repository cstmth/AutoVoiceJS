import { SlashCommandBuilder } from "@discordjs/builders"
import { getDefaultBuilder } from "../../../utils/getSlashCommandBuilder"
import Command, { Category, Environment } from "../../Command"
import CommandContext from "../../Context"

class AboutCommand implements Command {
  name = "about"
  description = "Shows developer information"
  usage = "about"
  category = Category.Meta
  builder = getDefaultBuilder(this)

  execute = (ctx: CommandContext) => {
  }
  preExecute = (ctx: CommandContext) => {
    return true;
  }
  postExecute = (ctx: CommandContext) => {
  }
}

export default AboutCommand
