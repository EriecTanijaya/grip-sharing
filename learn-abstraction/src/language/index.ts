import { LangOptions } from "./schema";
import { Translation } from "./config"

export default class LanguageModule {
    lang: string
    translation: Record<string, string>;

    constructor(private language: LangOptions = "en") {
        this.lang = language
        this.translation = Translation[language]
    }

    translate(text: string) {
        return this.translation[text] || ""
    }
}