// Base64-encode contact info so bots can't scrape plain text from HTML source.
// Decoded client-side only via the ObfuscatedLink component.

export const EMAIL_B64 = btoa("nel@shhitsa.show");
export const EMAIL_DISPLAY_B64 = btoa("nel@shhitsa.show");
export const PHONE_B64 = btoa("+12483031126");
export const PHONE_DISPLAY_B64 = btoa("248-303-1126");
