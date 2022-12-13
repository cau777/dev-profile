import {Component} from "solid-js";

export const SkillChart: Component = () => {
    return (
        <>
            <div class={"absolute z-10 top-4 left-5 text-sm text-gray-100"}>Powered by <a href={"https://codersrank.io/"} target={"_blank"}>CodersRank</a></div>
            {/* @ts-ignore */}
            <codersrank-skills-chart  username={"cau777"} labels={true} tooltip={true} legend={true} branding={false}></codersrank-skills-chart>
        </>
    )
}