import i18next, {TFunction} from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import {createSignal} from "solid-js";
import EN_TRANSLATION from "./en/translation";
import PT_BR_TRANSLATION from "./pt-BR/translation";

type GlobalI18n = {
    lang?: string;
    t?: TFunction;
};

const [i18n, setI18n] = createSignal<GlobalI18n>({});

i18next.on("languageChanged", lang => {
    console.log("languageChanged", lang);
    setI18n(o => {
        if (o === undefined) throw new TypeError();
        return {...o, lang};
    });
});

// Compile time assertion to check if translations contain the same keys
type AssertKeysEqual<T1 extends Record<keyof T2, any>, T2 extends Record<keyof T1, any>> = never
// noinspection JSUnusedLocalSymbols
type Assertion = AssertKeysEqual<typeof EN_TRANSLATION, typeof PT_BR_TRANSLATION>

i18next
    .use(LanguageDetector)
    .use(resourcesToBackend({
        en: {
            translation: EN_TRANSLATION,
        },
        "pt-BR": {
            translation: PT_BR_TRANSLATION,
        }
    }))
    .init({
        fallbackLng: "en",
        debug: import.meta.env.DEV,
    })
    .then(t => setI18n(s => ({...s, t})), console.error);

export function changeLanguage(lang: string) {
    i18next.changeLanguage(lang)
        .then(t => {
            console.log(t("greeting"));
            return t;
        })
        .then(t => setI18n(s => ({...s, t})));
}

// @ts-ignore
export const t: TFunction<"translation"> = (a, b, c) => i18n().t!(a, b, c);
export const i18nLoaded = () => i18n().lang !== undefined && i18n().t !== undefined;
export const globalLang = () => i18n().lang;