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

  private getHonorific({ lang, isMale, isFemale }: { lang: Language; isMale: boolean; isFemale: boolean }) {
    const isBothMaleAndFemale = isMale && isFemale;
    const hasGender = isMale || isFemale;

    if (isBothMaleAndFemale || !hasGender) {
      return '';
    }

    if (lang === 'eng') {
      return isMale ? `Mr` : `Ms`;
    } else {
      return isMale ? `Pak` : `Bu`;
    }
  }

  greet(input?: GreetInput) {
    const { lang = 'eng', isFemale = false, isMale = false, name, time } = input || {};

    const hasTimeSpecified = !!time;

    const baseGreeting = hasTimeSpecified ? this.getTimeGreeting(time, lang) : this.getDefaultGreeting(lang);

    if (!name) {
      return baseGreeting;
    }

    const honorific = this.getHonorific({ lang, isMale, isFemale });

    return honorific ? `${baseGreeting} ${honorific} ${name}` : `${baseGreeting} ${name}`;
  }

  addFriend(user: User) {
    this.friends.push(user);
  }
}
