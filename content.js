const TEXT_AREA = document.querySelector('#tw-source-text-ta')
const BUTTON_CHANGE_OF_TRANSLATION = document.querySelector(
  '.tw-menu-btn-image.z1asCe.lA8Tgb'
)
const BUTTON_HEAR_TRANSLATE = document.querySelector(
  '.tw-menu-btn-image.z1asCe.JKu1je'
)

document.addEventListener('visibilitychange', () => focusOnField(TEXT_AREA))
document.addEventListener('keydown', e => {
  if (e.ctrlKey && e.code === 'KeyQ')
    return BUTTON_CHANGE_OF_TRANSLATION.click()
  if (e.ctrlKey && e.code === 'KeyB') return BUTTON_HEAR_TRANSLATE.click()

  const sourceLanguage = document.querySelector('.source-language')
  const russianLanguage = sourceLanguage.textContent === 'Русский'
  const englishLanguage = sourceLanguage.textContent === 'Английский'
  const russianLetter = enKeyCodes[e.key.toLowerCase()]
  const englishLetter = ruKeyCodes[e.key.toLowerCase()]

  if (e.ctrlKey && e.code === 'KeyV') {
    setTimeout(() => {
      const text = TEXT_AREA.value
      const firstLetter = text[0].toLowerCase()
      const isEnglishText = enKeyCodes[firstLetter]
      const isRussianText = ruKeyCodes[firstLetter]
      if (
        (russianLanguage && isEnglishText) ||
        (englishLanguage && isRussianText)
      ) {
        BUTTON_CHANGE_OF_TRANSLATION.click()
        setTimeout(() => (TEXT_AREA.value = text), 0)
      }
    }, 0)
  }

  if (!e.ctrlKey && russianLanguage && russianLetter) {
    changeLetter(e, russianLetter)
  }
  if (!e.ctrlKey && englishLanguage && englishLetter) {
    changeLetter(e, englishLetter)
  }
})

BUTTON_CHANGE_OF_TRANSLATION.addEventListener('click', () => {
  cleanField(TEXT_AREA)
  focusOnField(TEXT_AREA)
})

function cleanField(element) {
  setTimeout(() => (element.value = ''), 0)
}

function focusOnField(element) {
  element.focus()
}

function changeLetter(e, letter) {
  setTimeout(() => {
    const index = TEXT_AREA.value.indexOf(e.key.toLowerCase())
    TEXT_AREA.value =
      TEXT_AREA.value.slice(0, index) +
      letter +
      TEXT_AREA.value.slice(index + 1)
    TEXT_AREA.setSelectionRange(index + 1, index + 1)
  }, 0)
}

focusOnField(TEXT_AREA)

const ruKeyCodes = {
  а: 'f',
  А: 'F',
  б: ',',
  в: 'd',
  В: 'D',
  г: 'u',
  Г: 'U',
  д: 'l',
  Д: 'L',
  е: 't',
  Е: 'T',
  з: 'p',
  З: 'P',
  и: 'b',
  И: 'B',
  й: 'q',
  Й: 'Q',
  к: 'r',
  К: 'R',
  л: 'k',
  Л: 'K',
  м: 'v',
  М: 'V',
  н: 'y',
  Н: 'Y',
  о: 'j',
  О: 'J',
  п: 'g',
  П: 'G',
  р: 'h',
  Р: 'H',
  с: 'c',
  С: 'C',
  т: 'n',
  Т: 'N',
  у: 'e',
  У: 'E',
  ф: 'a',
  Ф: 'A',
  ц: 'w',
  Ц: 'W',
  ч: 'x',
  Ч: 'X',
  ш: 'i',
  Ш: 'I',
  щ: 'o',
  Щ: 'O',
  ы: 's',
  Ы: 'S',
  ь: 'm',
  Ь: 'M',
  ю: '.',
  я: 'z',
  Я: 'Z',
}

const enKeyCodes = {
  a: 'ф',
  A: 'Ф',
  b: 'и',
  B: 'И',
  c: 'с',
  C: 'С',
  d: 'в',
  D: 'В',
  e: 'у',
  E: 'У',
  f: 'а',
  F: 'А',
  g: 'п',
  G: 'П',
  h: 'р',
  H: 'Р',
  i: 'ш',
  I: 'Ш',
  j: 'о',
  J: 'О',
  k: 'л',
  K: 'Л',
  l: 'д',
  L: 'Д',
  m: 'ь',
  M: 'Ь',
  n: 'т',
  N: 'Т',
  o: 'щ',
  O: 'Щ',
  p: 'з',
  P: 'З',
  q: 'й',
  Q: 'Й',
  r: 'к',
  R: 'К',
  s: 'ы',
  S: 'Ы',
  t: 'е',
  T: 'Е',
  u: 'г',
  U: 'Г',
  v: 'м',
  V: 'М',
  w: 'ц',
  W: 'Ц',
  x: 'ч',
  X: 'Ч',
  y: 'н',
  Y: 'Н',
  z: 'я',
  Z: 'Я',
  ',': 'б',
  '.': 'ю',
  ';': 'ж',
  "'": 'э',
  '[': 'х',
  ']': 'ъ',
  '/': '.',
}
