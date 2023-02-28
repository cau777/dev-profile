import {useNavigate} from "@solidjs/router";
import {onMount} from "solid-js";
import {A} from "solid-start";

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
        navigate(import.meta.env.BASE_URL + (cachedLang ?? "en"), {replace: true});
    });
    
    return (
        <div>
            <h1 class={"text-2xl"}>
                Redirecting to translated page
            </h1>
            
            <A href={import.meta.env.BASE_URL + "en"}>English page</A>
            <br/>
            <A href={import.meta.env.BASE_URL + "pt"}>Portuguese page</A>
        </div>
    );
}
