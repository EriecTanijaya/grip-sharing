export type GreetInput = Partial<{
  name: string;
  isMale: boolean;
  isFemale: boolean;
  lang: Language;
  time: Time;
}>;

type Language = 'indo';

type Time = 'morning' | 'afternoon' | 'evening' | 'night';

export class User {
  name: string;
  friends: User[];

  constructor(name: string) {
    this.name = name;
    this.friends = [];
  }

  greet(input?: GreetInput) {
    const { lang, isFemale, isMale, name, time } = input || {};

    const isBothMaleAndFemale = isMale && isFemale;

    const hasGender = isMale || isFemale;

    const isMorning = time === 'morning';

    const isAfternoon = time === 'afternoon';

    const isEvening = time === 'evening';

    const isNight = time === 'night';

    const hasTimeSpecified = !!time;

    if (!input || isBothMaleAndFemale || !hasGender) {
      if (!hasTimeSpecified) {
        if (lang === 'indo') {
          return `Halo ${name}`;
        }
        return `wassup ${name}`;
      }
    }

    if (lang === 'indo') {
      if (isMorning) {
        if (isFemale) {
          return `Selamat pagi Bu ${name}`;
        }

        if (isMale) {
          return `Selamat pagi Pak ${name}`;
        }

        return `Selamat pagi ${name}`;
      }

      if (isMale) {
        return `Halo Pak ${name}`;
      }

      if (isFemale) {
        return `Halo Bu ${name}`;
      }
    }

    if (isMorning) {
      if (isMale && isFemale) {
        return `Good morning ${name}`;
      }

      if (isFemale) {
        return `Good morning Ms ${name}`;
      }

      return `Good morning ${name}`;
    }

    if (isAfternoon) {
      return `good afternoon ${name}`;
    }

    if (isEvening) {
      return `good evening ${name}`;
    }

    if (isNight) {
      return `good night ${name}`;
    }

    if (isMale) {
      return `wassup Mr ${name}`;
    }

    if (isFemale) {
      return `wassup Ms ${name}`;
    }
  }

  addFriend(user: User) {
    this.friends.push(user);
  }
}
