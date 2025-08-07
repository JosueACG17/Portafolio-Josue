export const CookieUtils = {
  setCookie(name: string, value: string, minutes: number): void {
    const date = new Date()
    date.setTime(date.getTime() + minutes * 60 * 1000)
    const expires = `expires=${date.toUTCString()}`
    document.cookie = `${name}=${value};${expires};path=/`
  },

  getCookie(name: string): string | null {
    const nameEQ = `${name}=`
    const ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === ' ') c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
    }
    return null
  },

  hasCookie(name: string): boolean {
    return this.getCookie(name) !== null
  },

  deleteCookie(name: string): void {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
  },
}


export const ContactRateLimit = {
  COOKIE_NAME: 'contactFormLastSubmit',
  RATE_LIMIT_MINUTES: 10,
  canSubmit(): boolean {
    const lastSubmit = CookieUtils.getCookie(this.COOKIE_NAME)
    if (!lastSubmit) return true

    const lastSubmitTime = parseInt(lastSubmit)
    const now = Date.now()
    const timeDiff = now - lastSubmitTime
    const minutesPassed = timeDiff / (1000 * 60)

    return minutesPassed >= this.RATE_LIMIT_MINUTES
  },

  markSubmission(): void {
    CookieUtils.setCookie(this.COOKIE_NAME, Date.now().toString(), this.RATE_LIMIT_MINUTES)
  },
  getTimeUntilNextSubmit(): number {
    const lastSubmit = CookieUtils.getCookie(this.COOKIE_NAME)
    if (!lastSubmit) return 0

    const lastSubmitTime = parseInt(lastSubmit)
    const now = Date.now()
    const timeDiff = now - lastSubmitTime
    const minutesPassed = timeDiff / (1000 * 60)
    const remaining = this.RATE_LIMIT_MINUTES - minutesPassed

    return Math.max(0, Math.ceil(remaining))
  },
}
