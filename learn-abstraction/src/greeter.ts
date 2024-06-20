import { User } from ".";
import { greetingText } from "./constant/greetingText";
import { title } from "./constant/title";
import { Gender } from "./enum/gender";
import { Language } from "./enum/language";
import { PeriodOfTime } from "./enum/time";

export interface GreetParam {
  periodOfTime?: PeriodOfTime;
  lang?: Language;
}

export class Greeter {
  private getTitle(lang: Language, gender?: Gender): string {
    return title[gender as keyof typeof title]?.[lang] ?? "";
  }

  private getGreetingText(lang: Language, periodOfTime?: PeriodOfTime): string {
    if (periodOfTime) return greetingText[periodOfTime][lang];

    return greetingText.default[lang];
  }

  public greet(user?: User, greetParam?: GreetParam): string {
    const { name = "", gender } = user ?? {};
    const { periodOfTime, lang = Language.English } = greetParam ?? {};

    const greetingText = this.getGreetingText(lang, periodOfTime);

    const title = this.getTitle(lang, gender);

    return `
    ${greetingText ? greetingText + " " : ""}${title ? title + " " : ""}${name}
    `;
  }
}
