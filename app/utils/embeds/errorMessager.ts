import CommandContext from "../../commands/Context"

const errorEmoteId = "" // TODO

const errorInsufficientPermissions = (ctx: CommandContext) => {
  responseTemplate(
    ctx,
    "Insufficient Permissions",
    `You need the following permissions to run this command: ${ctx.command.permissions?.toArray().join("`, `")}`,
    "Tip: Server administrators can define permission overrides on a command-by-command basis. See `/help override` for more information.",
  )
}


const errorPermissionsOutsideGuild = (ctx: CommandContext) => {
  responseTemplate(ctx, "This command has permissions that cannot be verified", `This command can only be used in a server.`)
}

const errorGuildOnly = (ctx: CommandContext) => {
  responseTemplate(ctx, "Guild Only", `This command can only be used in a server.`)
}

const errorDmOnly = (ctx: CommandContext) => {
  responseTemplate(ctx, "DM Only", `This command can only be used in a DM.`)
}

const errorOwnerOnly = (ctx: CommandContext) => {
  responseTemplate(ctx, "Owner Only", `This command can only be used by the server owner.`)
}

const responseTemplate = (ctx: CommandContext, title: string, message: string, tip?: string) => {
  const content = `
  Error: ${title}

  ${message}

  ${tip ?? ""}
  `

  ctx.interaction.reply({ content, ephemeral: true })
}

export { errorInsufficientPermissions, errorPermissionsOutsideGuild, errorGuildOnly, errorDmOnly, errorOwnerOnly }
