import {Component, onMount} from "solid-js";
import {A} from "solid-start";

const IGNORE = ["JSON", "Protocol Buffer"];

type EventDetails = {
    detail: {
        scores: [{
            languages: [{ language: string, score: number }],
            date: string,
        }]
    }
}

export const SkillChart: Component = () => {
    onMount(() => {
        document.querySelector("codersrank-skills-chart")!.addEventListener("data", e => {
            let target = e.target as HTMLElement;
            let details = (e as unknown as EventDetails).detail;
            let scores = details.scores[details.scores.length - 1].languages;
            let languages = scores.map(o => o.language).filter(o => !IGNORE.includes(o));
            if (target.getAttribute("skills") == "unset")
                target.setAttribute("skills", languages.join(","));
        });
    })
    return (
        <>
            <div class={"absolute z-10 top-4 left-5 text-sm text-gray-100"}>Powered by <A
                href={"https://codersrank.io/"} target={"_blank"}>CodersRank</A></div>
            {/* @ts-ignore */}
            <codersrank-skills-chart username={"cau777"} labels={true} tooltip={true} legend={true} branding={false} skills={"unset"}></codersrank-skills-chart>
        </>
    )
}