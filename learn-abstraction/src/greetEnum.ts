import { Language } from "./languageEnum";

export enum GreetTime {
  MORNING = 'morning',
  AFTERNOON = 'afternoon',
  EVENING = 'evening',
  NIGHT = 'night',
}

const GreetTimeLanguage = {
  [Language.ENGLISH]: {
    [GreetTime.MORNING]: 'Good morning',
    [GreetTime.AFTERNOON]: 'Good afternoon',
    [GreetTime.EVENING]: 'Good evening',
    [GreetTime.NIGHT]: 'Good night',
  },
  [Language.INDONESIAN]: {
    [GreetTime.MORNING]: 'Selamat pagi',
  }
}

export function getGreetTime(language: Language, time?: GreetTime | null): string {
  if(language === Language.INDONESIAN) {
    if(time && Object.keys(GreetTimeLanguage[language]).includes(time.toString())) {
      return GreetTimeLanguage[language][GreetTime.MORNING]
    }  else {
      return "Halo"
    }
  } else {
    return time ? GreetTimeLanguage[language][time] : "wassup";
  }

}