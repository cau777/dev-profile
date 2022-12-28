import {createContext, ParentComponent, useContext} from "solid-js";
import EN_TRANSLATION from "~/i18n/en/translation";
import PT_BR_TRANSLATION from "~/i18n/pt-BR/translation";

// Compile time assertion to check if translations contain the same keys
type AssertKeysEqual<T1 extends Record<keyof T2, any>, T2 extends Record<keyof T1, any>> = never
// noinspection JSUnusedLocalSymbols
type Assertion = AssertKeysEqual<typeof EN_TRANSLATION, typeof PT_BR_TRANSLATION>

type LanguagesCtx = {
    t: (typeof EN_TRANSLATION & typeof PT_BR_TRANSLATION);
    lang: string;
}

const LanguagesContext = createContext<LanguagesCtx>();

type Props = {
    lang: string;
}

export const LanguagesProvider: ParentComponent<Props> = (props) => {
    let translation;
    switch (props.lang) {
        case "pt":
            translation = PT_BR_TRANSLATION;
            break
        case "en":
            translation = EN_TRANSLATION;
            break
        default:
            translation = EN_TRANSLATION;
            break;
    }
    document.documentElement.lang = props.lang;
    
    return (
        <LanguagesContext.Provider value={{lang: props.lang, t: translation}}>
            {props.children}
        </LanguagesContext.Provider>
    )
}

export const useTranslation = () => useContext(LanguagesContext);

export const useT = () => useTranslation()!.t;

export const useLang = () => useTranslation()?.lang ?? "en";
