import {Component} from "solid-js";
import {GitHubIcon} from "~/components/icons/GitHubIcon";
import {LinkedInIcon0} from "~/components/icons/LinkedInIcon0";
import {CodersRankIcon} from "~/components/icons/CodersRankIcon";

export const LinksSocial: Component = () => {
    return (
        <div class={""}>
            <div class={"hidden md:block fixed bottom-0 w-[5rem]"}>
                <div class={"grid-center text-primary-300 gap-1"}>
                    <a class={"cursor-pointer"} href={"https://github.com/cau777"} target={"_blank"}>
                        <GitHubIcon width={"1.4rem"}></GitHubIcon>
                    </a>
                    {/* TODO: linkedin */}
                    <a class={"cursor-pointer"} href={""} target={"_blank"}>
                        <LinkedInIcon0 width={"1.1rem"}></LinkedInIcon0>
                    </a>
    
                    <a class={"cursor-pointer"} href={"https://profile.codersrank.io/user/cau777"} target={"_blank"}>
                        <CodersRankIcon width={"1.3rem"}></CodersRankIcon>
                    </a>
                    <div class={"border-[2px] rounded-t border-primary-400 h-[12rem] w-[4px] mt-1"}></div>
                </div>
            </div>
        </div>
    )
}