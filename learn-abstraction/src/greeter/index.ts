import { gender, period } from "../types";

export type GreetProps = {
  name: string;
  gender?: gender;
  period?: period;
};

export interface Greeter {
  greet: ({ name, gender, period }: GreetProps) => string;
}
