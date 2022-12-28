import {useNavigate} from "@solidjs/router";
import {onMount} from "solid-js";

const SUPPORTED_LANGS = ["pt", "en"];

export default function Home() {
    onMount(() => {
        let cachedLang = localStorage.getItem("preferredLang");
        if (cachedLang === null) {
            console.log(navigator.languages);
            for (let language of navigator.languages ?? [navigator.language]) {
                let [lang, _] = language.split("-");
                if (SUPPORTED_LANGS.includes(lang)) {
                    cachedLang = lang;
                    localStorage.setItem("preferredLang", cachedLang);
                    break;
                }
            }
        }
        
        let navigate = useNavigate();
        navigate(import.meta.env.BASE_URL + (cachedLang ?? "en"));
    });
    
    return (
        <div></div>
    );
}
