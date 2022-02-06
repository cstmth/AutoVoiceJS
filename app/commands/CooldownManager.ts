type Cooldown = {
  timestamp: number // in ms
  duration: number // in ms
}

export default class CooldownManager {
  private cooldowns: Map<string, Cooldown> = new Map()

  hasCooldown(userId: string) {
    const cooldown = this.cooldowns.get(userId)
    if (!cooldown) return false

    const now = Date.now()
    const then = cooldown.timestamp

    return now - then > cooldown.duration;
  }

  setCooldown(userId: string, duration: number = 5000) {
    let cooldown = this.cooldowns.get(userId)
    
    if (cooldown) {
      cooldown.duration += duration
    } else {
      cooldown = { timestamp: Date.now(), duration: duration }
    }

    this.cooldowns.set(userId, cooldown)
  }

  removeCooldown(userId: string) {
    this.cooldowns.delete(userId)
  }
}