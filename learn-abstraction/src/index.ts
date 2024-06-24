type GreetInput = {
  name: string;
  isMale: boolean;
  isFemale: boolean;
  isMorning: boolean;
  isAfternoon: boolean;
  isEvening: boolean;
  isNight: boolean;
  lang: 'indo';
};

export class User {
  name: string;
  friends: User[];

  constructor(name: string) {
    this.name = name;
    this.friends = [];
  }

  greet(input?: Partial<GreetInput>) {
    const { lang, isMorning, isFemale, isMale, isAfternoon, isEvening, isNight, name } = input || {};

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

      return `Halo ${name}`;
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

    if (isMale && isFemale) {
      return `wassup ${name}`;
    }

    if (isMale) {
      return `wassup Mr ${name}`;
    }

    if (isFemale) {
      return `wassup Ms ${name}`;
    }

    return `wassup ${name}`;
  }

  addFriend(user: User) {
    this.friends.push(user);
  }
}
