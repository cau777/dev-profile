import {Component} from "solid-js";
import {t} from "~/i18n/i18n-config";
import {AnimatedUnderline} from "~/components/animated/AnimatedUnderline";

// TODO: pattern to occupy space

export const BioSection: Component = () => {
    return (
        <section class={"flex mt-10 flex-col md:flex-row min-h-screen"}>
            <div class={"mr-10"}>
                <img class={"w-64 h-auto"}
                     src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1SNpYAOMy3ZYbkp95RoG2igrT_B-uhq0SsEf_1KuoVBC9LTI7hBZgK7b_26MH9OGqQDw&usqp=CAU"}
                     alt={"A picture of me with my arms crossed"}/>
            </div>
            
            <header>
                <h1 class={"text-primary-300 font-semibold text-xl mb-1 mt-3"}>
                    {t("greeting")}
                </h1>
                <div class={"text-5xl font-bold max-w-lg"}>
                    {t("description_1")} <AnimatedUnderline>{t("description_2")}</AnimatedUnderline> {t("description_3")} <AnimatedUnderline
                    >{t("description_4")}</AnimatedUnderline> <br/>{t("description_5")}
                </div>
                <p class={"mt-12 text-gray-100 max-w-lg"}>
                    {t("subtitle_1")} <span class={"text-secondary-200"}>{t("subtitle_2")}</span> {t("subtitle_3")}
                    <br/>
                    {t("subtitle_4")}
                </p>
            </header>
        </section>
    )
}