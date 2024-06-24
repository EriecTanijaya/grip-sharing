export type GreetInput = Partial<{
  name: string;
  isMale: boolean;
  isFemale: boolean;
  lang: Language;
  time: Time;
}>;

type Language = 'indo' | 'eng';

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
  eng: {
    afternoon: 'Good afternoon',
    evening: 'Good evening',
    morning: 'Good morning',
    night: 'Good night',
  },
};

type TimeGreeting = {
  [time in Time]: string;
};

export class User {
  name: string;
  friends: User[];

  constructor(name: string) {
    this.name = name;
    this.friends = [];
  }

  private getTimeGreeting(time: Time, lang: Language) {
    return timeGreeting[lang][time];
  }

  private getDefaultGreeting(lang: Language) {
    let baseGreet = lang === 'indo' ? `Halo` : `wassup`;

    return baseGreet;
  }

  greet(input?: GreetInput) {
    const { lang = 'eng', isFemale, isMale, name, time } = input || {};

    const isBothMaleAndFemale = isMale && isFemale;

    const hasGender = isMale || isFemale;

    const hasTimeSpecified = !!time;

    const baseGreeting = hasTimeSpecified ? this.getTimeGreeting(time, lang) : this.getDefaultGreeting(lang);

    if (!name) {
      return baseGreeting;
    }

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
