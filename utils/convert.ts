export default function convert(s: string | number): string {
    const num = +s
    if (num != num) return s.toString()
    return num.toFixed(1)
}