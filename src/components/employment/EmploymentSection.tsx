import { Component } from "solid-js"
import { SectionTitle } from "~/components/SectionTitle"
import { AnimatedSlide } from "~/components/animated/AnimatedSlide"
import picture from "../../../img/aerial.png"
import { CustomLink } from "~/components/CustomLink"
import { useLang, useT } from "~/components/LanguagesContext"

export const EmploymentSection: Component = () => {
  const lang = useLang()
  const t = useT()
  const formatter = () => new Intl.DateTimeFormat(lang, { month: "long", year: "numeric" })

  return (
    <section class={"mb-32"}>
      <SectionTitle title={"career"}></SectionTitle>

      <AnimatedSlide>
        <div class={"flex mt-10 flex-col md:flex-row justify-center gap-10"}>

          <div class={"xl:mr-8 xl:w-[30rem] xl:grow-0 xl:shrink-0"}>
            <div class={"flex xl:w-full"}>
              <div class={"border-box p-2 max-w-md xl:max-w-max xl:w-full"}>
                <img src={picture} alt={"Project screenshot"} width={"100%"} />
              </div>
            </div>
          </div>

          <div>
            <h3 class={"text-2xl text-primary-300 font-semibold"}>{t.aerialPeriod}</h3>
            <p class={"text-gray-100"}>
              {t.aerialDescription}
            </p>
            <p class={"text-gray-100"}>
              {t.aerialMlDescription}
            </p>
            <p class={"text-gray-100"}>
              {t.aerialRedFlagsDescription}
            </p>
            <hr class={"my-2"} />
            <p class={"text-gray-100"}>
              <b class={"capitalize"}>{formatter().format(new Date(2023, 3))}</b> - {t.aerialIntern()}
            </p>
            <p class={"text-gray-100"}>
              <b class={"capitalize"}>{formatter().format(new Date(2023, 8))}</b> - {t.aerialFullStack}
            </p>
          </div>
        </div>
      </AnimatedSlide>
    </section>
  )
}