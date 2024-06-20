import { EnglishGreeter } from "./greeter/EnglishGreeter";
import { Greeter } from "./greeter/Greeter";
import type { Gender, Period } from "./greeter/types";

type UserGreetProps = {
  name: string;
  gender?: Gender;
  period?: Period;
  greeter?: Greeter;
};

export class User {
  name: string;
  gender?: Gender;
  friends: User[];

  constructor(name: string) {
    this.name = name;
    this.friends = [];
  }

  greet({
    name,
    gender,
    period,
    greeter = new EnglishGreeter()
  }: UserGreetProps) {
    return greeter.greet({ name, gender, period });
  }

  addFriend(user: User) {
    this.friends.push(user);
  }
}
