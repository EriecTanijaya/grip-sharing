import { Language } from "./languageEnum";

export enum UserGender {
  MALE = 'male',
  FEMALE = 'female',
}

const UserGenderPronounce = {
  [Language.ENGLISH]: {
    [UserGender.MALE]: 'Mr',
    [UserGender.FEMALE]: 'Ms',
  },
  [Language.INDONESIAN]: {
    [UserGender.MALE]: 'Pak',
    [UserGender.FEMALE]: 'Bu',
  } 
}

export function getUserGreet(name: string, language: Language, gender?: UserGender): string | null {
  return gender ? `${UserGenderPronounce[language][gender]} ${name}` : name
}