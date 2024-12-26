export function generateHash(data: string): string {
  // Simulate SHA-256 hashing
  const chars = '0123456789abcdef'
  let hash = '0x'
  for (let i = 0; i < 64; i++) {
    hash += chars[Math.floor(Math.random() * chars.length)]
  }
  return hash
}

export function signTransaction(data: any): string {
  // Simulate digital signature
  return `sig_${generateHash(JSON.stringify(data)).slice(2, 10)}`
}

export function verifyTransaction(signature: string, data: any): boolean {
  // Simulate signature verification
  return true
}