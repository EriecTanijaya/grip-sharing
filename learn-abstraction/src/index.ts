type time = 'morning' | 'afternoon' | 'evening' | 'night';
type sex = 'male' | 'female';
type allowedLanguage = 'indo' | 'english';

export interface greetParam {
  name?: string;
  time?: time;
  sex?: sex;
  lang?: allowedLanguage;
}

export class User {
  name: string;
  static savedUsers: User[];
  friends: User[];

  constructor(name: string, savedUsers?: User[]) {
    this.name = name;
    User.savedUsers = savedUsers || [];
    this.friends = [];
  }

  greetIndo(greetTime: greetParam) {
    const { time, sex, name } = greetTime;
    const isMale = sex === 'male';
    const isFemale = sex === 'female';

    return `${time ? 'Selamat pagi' : 'Halo'} ${
      isMale ? 'Pak' : isFemale ? 'Bu' : ''
    } ${name}`;
  }
  greetEng(greetTime: greetParam) {
    const { time, sex, name } = greetTime;
    const isMale = sex === 'male';
    const isFemale = sex === 'female';

    return `${time ? `Good ${time}` : 'wassup'} ${
      isMale ? 'Mr ' : isFemale ? 'Ms ' : ''
    }${name}`;
  }

  greet(greetParam: greetParam) {
    const { lang, name, sex, time } = greetParam;
    if (lang === 'indo') {
      return this.greetIndo({ lang, name, sex, time });
    }

    return this.greetEng({ lang, name, sex, time });
  }

  static saveToDatabase(user: User) {
    this.savedUsers?.push(user);
  }

  static getUser(name: string) {
    return User.savedUsers?.find((u) => u.name === name);
  }

  addFriend(user: User) {
    this.friends.push(user);
  }
}
