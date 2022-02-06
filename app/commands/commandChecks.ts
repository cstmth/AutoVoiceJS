import { GuildMember, Permissions } from "discord.js"
import { errorDmOnly, errorGuildOnly, errorInsufficientPermissions, errorPermissionsOutsideGuild } from "../utils/embeds/errorMessager"
import { Environment } from "./Command"
import CommandContext from "./Context"

export const hasCooldown = (ctx: CommandContext): boolean => {
  return ctx.command.cooldown !== 0 && ctx.command.cooldown !== undefined
}

export const passesCooldownCheck = (ctx: CommandContext): boolean => {
  return !ctx.client.cooldownManager.hasCooldown(ctx.user.id)
}



export const hasPermissions = (ctx: CommandContext): boolean => {
  return ctx.command.permissions !== undefined
}

export const passesPermissionsCheck = (ctx: CommandContext): boolean => {
  if (!ctx.member) {
    errorPermissionsOutsideGuild(ctx)
    return false
  } else if (!ctx.member.permissions.has(ctx.command.permissions as Permissions)) {
    errorInsufficientPermissions(ctx)
    return false
  }

  return true
}



export const hasEnvironment = (ctx: CommandContext): boolean => {
  return ctx.command.environment !== undefined
}

export const passesEnvironmentCheck = (ctx: CommandContext): boolean => {
  if (ctx.command.environment === Environment.Guild && ctx.guild) {
    errorGuildOnly(ctx)
    return false
  } else if (ctx.command.environment === Environment.DM && !ctx.guild) {
    errorDmOnly(ctx)
    return false
  }

  return true
}



export const isOwnerOnly = (ctx: CommandContext): boolean => {
  return ctx.command.ownerOnly === true
}

export const passesOwnerOnlyCheck = (ctx: CommandContext): boolean => {
  return ctx.guild?.ownerId == ctx.member?.id
}