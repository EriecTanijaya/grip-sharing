import { UserGender, getUserGreet } from "./genderEnum";
import { GreetTime, getGreetTime } from "./greetEnum";
import { Language } from "./languageEnum";

export class User {
  name: string;
  gender?: UserGender;

  
  static savedUsers: User[];
  friends: User[];

  constructor(name: string, gender?: UserGender, savedUsers?: User[]) {
    this.name = name;
    this.gender = gender;
    User.savedUsers = savedUsers || [];
    this.friends = [];
  }

  greet(
    user?: User | null, time?: GreetTime | null, language: Language = Language.ENGLISH, 
  ) {
    if(user) {
      return `${getGreetTime(language, time)} ${getUserGreet(user.name, language, user.gender)}`;
    }
    return `${getGreetTime(language, time)} ${getUserGreet(this.name, language, this.gender)}`;
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
