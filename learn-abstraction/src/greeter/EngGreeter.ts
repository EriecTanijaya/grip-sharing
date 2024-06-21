import { GreetProps, Greeter } from "../greeter";
import { gender, period } from "../types";

export class EngGreeter implements Greeter {
  private getHonorific(gender?: gender) {
    if (gender === "male") return "Mr ";
    if (gender === "female") return "Ms ";

    return "";
  }

  private getPeriodOfTime(period?: period) {
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
    const greeting = this.getPeriodOfTime(period);
    const honorific = this.getHonorific(gender);

    return `${greeting} ${honorific}${name}`;
  }
}
