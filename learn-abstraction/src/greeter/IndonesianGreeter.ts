import { Greeter, GreetProps } from "./Greeter";
import type { Gender, Period } from "./types";

export class IndonesianGreeter implements Greeter {
  private getHonorific(gender?: Gender) {
    switch (gender) {
      case "male":
        return "Pak ";
      case "female":
        return "Bu ";
      default:
        return "";
    }
  }

  private getPeriodGreeting(period?: Period) {
    switch (period) {
      case "morning":
        return "Selamat pagi";
      default:
        return "Halo";
    }
  }

  greet({ name, gender, period }: GreetProps) {
    const greeting = this.getPeriodGreeting(period);
    const honorific = this.getHonorific(gender);
    return `${greeting} ${honorific}${name}`;
  }
}
