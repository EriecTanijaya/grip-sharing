import LanguageModule from "../language";
import { Gender, Period } from "./enum";

interface GreetProps {
    period?: Period,
    gender?: Gender,
    inLanguage?: LanguageModule
}

const defaultGreetProps = {
    inLanguage: new LanguageModule("en")
}

export class Greet {
    constructor(private greetProps: GreetProps = defaultGreetProps) { }

    private getGreet() {
        const { inLanguage = new LanguageModule("en") } = this.greetProps;

        switch (this.greetProps.period) {
            case Period.MORNING:
                return inLanguage.translate("Good morning")
            case Period.AFTERNOON:
                return inLanguage.translate("Good afternoon")
            case Period.EVENING:
                return inLanguage.translate("Good evening")
            case Period.NIGHT:
                return inLanguage.translate("Good night")
            default:
                return inLanguage.translate("wassup");
        }
    }

    do(name: string) {
        const whatPeriodToSay = this.getGreet();

        const { inLanguage = new LanguageModule("en") } = this.greetProps;

        if (this.greetProps?.gender === Gender.MALE) {
            const maleHonorific = inLanguage.translate("Mr")
            return `${whatPeriodToSay} ${maleHonorific} ${name}`
        }

        if (this.greetProps?.gender === Gender.FEMALE) {
            const femaleHonorific = inLanguage.translate("Ms")

            return `${whatPeriodToSay} ${femaleHonorific} ${name}`
        }

        return `${whatPeriodToSay} ${name}`
    }
}