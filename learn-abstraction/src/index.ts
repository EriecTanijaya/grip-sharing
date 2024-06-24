export type GreetInput = Partial<{
  name: string;
  isMale: boolean;
  isFemale: boolean;
  lang: Language;
  time: Time;
}>;

type Language = 'indo';

type Time = 'morning' | 'afternoon' | 'evening' | 'night';

type TimeGreetingInLanguage = {
  [lang in Language]: TimeGreeting;
};

const timeGreeting: TimeGreetingInLanguage = {
  indo: {
    afternoon: 'Selamat siang',
    evening: 'Selamat sore',
    morning: 'Selamat pagi',
    night: 'Selamat malam',
  },
};

type TimeGreeting = {
  [time in Time]: string;
};

const defaultTimeGreeting: TimeGreeting = {
  afternoon: 'Good afternoon',
  evening: 'Good evening',
  morning: 'Good morning',
  night: 'Good night',
};

export class User {
  name: string;
  friends: User[];

  constructor(name: string) {
    this.name = name;
    this.friends = [];
  }

  private getTimeGreeting(time: Time, lang?: Language) {
    if (!lang || lang !== 'indo') {
      return defaultTimeGreeting[time];
    }
    return timeGreeting[lang][time];
  }

  greet(input?: GreetInput) {
    const { lang, isFemale, isMale, name, time } = input || {};

    const isBothMaleAndFemale = isMale && isFemale;

    const hasGender = isMale || isFemale;

    const hasTimeSpecified = !!time;

    if (!input || isBothMaleAndFemale || !hasGender) {
      if (!hasTimeSpecified) {
        if (lang === 'indo') {
          return `Halo ${name}`;
        }
        return `wassup ${name}`;
      }
    }

    const baseGreeting = hasTimeSpecified && this.getTimeGreeting(time, lang);

    if (isBothMaleAndFemale || !hasGender) {
      return `${baseGreeting} ${name}`;
    }

    if (isFemale) {
      if (lang === 'indo') {
        return `${baseGreeting} Bu ${name}`;
      } else {
        return `${baseGreeting} Ms ${name}`;
      }
    }

    if (isMale) {
      if (lang === 'indo') {
        return `${baseGreeting} Pak ${name}`;
      } else {
        return `${baseGreeting} Mr ${name}`;
      }
    }
  }

  addFriend(user: User) {
    this.friends.push(user);
  }
}
