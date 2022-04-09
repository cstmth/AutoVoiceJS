import { MessageEmbed, MessageEmbedOptions } from "discord.js"
import { colors } from "../../misc/constants"

/*
  How the EmbedFactory™ works

  Create a new MessageEmbed, then
  1: Set the properties that are not related to the modifications requested. Do not set anything related to the mods because it will be overriden in step 3
  2 (optional): Adjust the requested modifications to your liking (for example prefix or suffix modded text).
  3: Apply the modifications to the embed

  The EmbedFactory™ can be called with special requirements, called modifications. These modifications, when supplied, override the standard settings from step 1.
  This is why we modify text in modifications rather than set it in the first step. It would be overriden. To circumvent that, we change the modifications and then
  let applyModifications do the heavy lifting.
  */

export const createInfoEmbed = (mods: MessageEmbedOptions): MessageEmbed => {
  let embed = new MessageEmbed().setColor(colors.info)

  return applyModifications(embed, mods)
}

export const createWarningEmbed = (mods: MessageEmbedOptions): MessageEmbed => {
  let embed = new MessageEmbed().setColor(colors.warning)

  return applyModifications(embed, mods)
}

export const createErrorEmbed = (mods: MessageEmbedOptions): MessageEmbed => {
  let embed = new MessageEmbed().setColor(colors.error)

  mods.title = `Error${mods.title ? `: ${mods.title}` : ""}`
  mods.description = mods.description ?? "Something must have gone pretty wrong. Someone will be fired, I promise!"

  return applyModifications(embed, mods)
}

// This is step 3 (taking a look at the top of the file) and is always the same
const applyModifications = (embed: MessageEmbed, mods: MessageEmbedOptions): MessageEmbed => {
  if (mods.title) embed = embed.setTitle(mods.title)
  if (mods.description) embed = embed.setDescription(mods.description)
  if (mods.url) embed = embed.setURL(mods.url)
  if (mods.timestamp) embed = embed.setTimestamp(mods.timestamp)
  if (mods.color) embed = embed.setColor(mods.color)
  if (mods.fields) embed = embed.setFields(mods.fields)
  if (mods.author?.name)
    embed = embed.setAuthor({ name: mods.author.name, iconURL: mods.author.iconURL, url: mods.author.url })
  if (mods.thumbnail?.url) embed = embed.setThumbnail(mods.thumbnail.url)
  if (mods.image?.url) embed = embed.setImage(mods.image.url)
  if (mods.footer?.text) embed = embed.setFooter({ text: mods.footer.text, iconURL: mods.footer.iconURL })

  return embed
}
