import { Greeter, GreetProps } from "./Greeter";
import type { Gender, Period } from "./types";

export class EnglishGreeter implements Greeter {
  private getHonorific(gender?: Gender) {
    switch (gender) {
      case "male":
        return "Mr ";
      case "female":
        return "Ms ";
      default:
        return "";
    }
  }

  private getPeriodGreeting(period?: Period) {
    switch (period) {
      case "morning":
        return "Good morning";
      case "afternoon":
        return "Good afternoon";
      case "evening":
        return "Good evening";
      case "night":
        return "Good night";
      default:
        return "wassup";
    }
  }

  greet({ name, gender, period }: GreetProps) {
    const greeting = this.getPeriodGreeting(period);
    const honorific = this.getHonorific(gender);
    return `${greeting} ${honorific}${name}`;
  }
}
