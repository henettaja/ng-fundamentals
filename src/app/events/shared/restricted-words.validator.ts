import { AbstractControl } from '@angular/forms'

export function restrictedWords(words: string[]) {
  return (control: AbstractControl): { restrictedWords: string } | null => {
    if (!words) {
      return null
    }

    const invalidWords = words
      .map((w: string | null) => (control.value.includes(w) ? w : null))
      .filter((w: string | null) => w != null)

    return invalidWords && invalidWords.length > 0
      ? { restrictedWords: invalidWords.join(', ') }
      : null
  }
}
