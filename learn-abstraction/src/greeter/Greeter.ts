import { Gender, Period } from "./types";

export type GreetProps = {
  name: string;
  gender?: Gender;
  period?: Period;
};

export interface Greeter {
  greet: ({ name, gender, period }: GreetProps) => string;
}
