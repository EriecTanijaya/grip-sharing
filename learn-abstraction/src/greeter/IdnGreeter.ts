import { GreetProps, Greeter } from "../greeter";
import { gender, period } from "../types";

export class IdnGreeter implements Greeter {
  private getHonorific(gender?: gender) {
    if (gender === "male") return "Pak ";
    if (gender === "female") return "Bu ";

    return "";
  }

  private getPeriodOfTime(period?: period) {
    switch (period) {
      case "morning":
        return "Selamat pagi";
      default:
        return "Halo";
    }
  }

  greet({ name, gender, period }: GreetProps) {
    const greeting = this.getPeriodOfTime(period);
    const honorific = this.getHonorific(gender);

    return `${greeting} ${honorific}${name}`;
  }
}
