import { EngGreeter } from "./greeter/EngGreeter";
import { Greeter } from "./greeter";
import type { gender, period } from "./types";

type UserGreeterProps = {
  name: string;
  gender?: gender;
  period?: period;
  greeter?: Greeter;
};

export class User {
  name: string;
  static savedUsers: User[];
  friends: User[];

  constructor(name: string, savedUsers?: User[]) {
    this.name = name;
    User.savedUsers = savedUsers || [];
    this.friends = [];
  }

  greet({
    name,
    gender,
    period,
    greeter = new EngGreeter(),
  }: UserGreeterProps): string {
    return greeter.greet({ name, gender, period });
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
