import { Greet } from "./greet";

export class User {
  name: string;
  static savedUsers: User[];
  friends: User[];

  constructor(
    name: string,
    savedUsers?: User[]
  ) {
    this.name = name;
    User.savedUsers = savedUsers || [];
    this.friends = [];
  }

  greet(name?: string, greeting?: Greet) {
    if (!greeting) {
      greeting = new Greet()
    }

    const username = name || this.name;

    return greeting.do(username);
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