import { Gender } from "./enum/gender";
import { Greeter } from "./greeter";

export class User extends Greeter {
  name: string;
  gender?: Gender;
  static savedUsers: User[];
  friends: User[];

  constructor(name: string, savedUsers?: User[]) {
    super();

    this.name = name;
    User.savedUsers = savedUsers || [];
    this.friends = [];
  }

  setGender(gender: Gender) {
    this.gender = gender;
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
