// Lenient, forgiving answer comparison so a stray space or "x=5" vs "5" doesn't
// punish a correct thinker.

function normalize(str) {
  return String(str)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '')
    .replace(/^x=/, '') // allow "x=5" for "5"
    .replace(/^y=/, '')
}

export function checkAnswer(item, raw) {
  if (raw == null || String(raw).trim() === '') return false

  if (item.type === 'number') {
    // Accept "−7", "-7", "5.0", etc.
    const cleaned = String(raw).replace(/[−–—]/g, '-').replace(/[^0-9.\-]/g, '')
    const got = parseFloat(cleaned)
    if (Number.isNaN(got)) return false
    return Math.abs(got - Number(item.answer)) < 1e-9
  }

  // text
  const candidates = [item.answer, ...(item.accepted || [])].map(normalize)
  return candidates.includes(normalize(raw))
}
