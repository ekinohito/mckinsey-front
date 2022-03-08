export default function convert(s?: string | number): string {
    if (!s) return ''
    const num = +s
    if (num != num) return s.toString()
    return num.toFixed(1)
}