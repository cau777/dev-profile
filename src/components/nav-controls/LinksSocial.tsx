import {Component} from "solid-js";
import {GitHubIcon} from "~/components/icons/GitHubIcon";
import {LinkedInIcon0} from "~/components/icons/LinkedInIcon0";
import {CodersRankIcon} from "~/components/icons/CodersRankIcon";
import {A} from "solid-start";

export const LinksSocial: Component = () => {
    return (
        <div class={"hidden md:block"}>
            <div class={"fixed bottom-0 w-[5rem]"}>
                <div class={"grid-center text-primary-300 gap-1"}>
                    <A class={"cursor-pointer"} href={"https://github.com/cau777"} target={"_blank"} title={"My GitHub account"}>
                        <GitHubIcon width={"1.4rem"}></GitHubIcon>
                    </A>
                    
                    <A class={"cursor-pointer"} href={"https://www.linkedin.com/in/cau%C3%A3-rinaldi-618b6b259/"} target={"_blank"} title={"My Linkedin account"}>
                        <LinkedInIcon0 width={"1.1rem"}></LinkedInIcon0>
                    </A>
    
                    <A class={"cursor-pointer"} href={"https://profile.codersrank.io/user/cau777"} target={"_blank"} title={"My Codersrank account"}>
                        <CodersRankIcon width={"1.3rem"}></CodersRankIcon>
                    </A>
                    <div class={"border-[2px] rounded-t border-primary-400 h-[12rem] w-[4px] mt-1"}></div>
                </div>
            </div>
        </div>
    )
}
