interface GreetParams {
  name?: string;
  isMale?: boolean;
  isFemale?: boolean;
  isMorning?: boolean;
  isAfternoon?: boolean;
  isEvening?: boolean;
  isNight?: boolean;
  lang?: "indo";
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

  greetByGender({ lang, isFemale, isMale, name }: GreetParams) {
    const isIndo = lang === "indo";

    if ((!isMale && !isFemale) || (isMale && isFemale)) return name;

    let greetGender = undefined;

    if (isFemale) greetGender = isIndo ? "Bu" : "Ms";

    if (isMale) greetGender = isIndo ? "Pak" : "Mr";

    return `${greetGender} ${name}`;
  }

  getGreetTime({
    isMorning,
    isAfternoon,
    isEvening,
    isNight,
    lang,
    name,
  }: GreetParams) {
    const isIndo = lang === "indo";

    if (isMorning) return isIndo ? "Selamat pagi" : "Good morning";
    if (isAfternoon) return "good afternoon";
    if (isEvening) return "good evening";
    if (isNight) return "good night";

    return `${isIndo ? "Halo" : "wassup"} ${name}`;
  }

  greet(params?: GreetParams) {
    if (!params) return "wassup";

    return `${this.getGreetTime(params)} ${this.greetByGender(params)}`;
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
