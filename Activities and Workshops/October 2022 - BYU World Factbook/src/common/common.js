export const emojify = (str) => {
    let unicode = str[1].unicode.replace(/U\+/g, '').split(` `)
    unicode = [parseInt(unicode[0], 16,), parseInt(unicode[1], 16)]
    unicode = [String.fromCodePoint(unicode[0]), String.fromCodePoint(unicode[1])]
    const flagIcon = unicode[0] + unicode[1]
    return flagIcon
}
