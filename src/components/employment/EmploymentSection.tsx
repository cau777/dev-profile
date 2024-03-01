import { Component } from "solid-js"
import { SectionTitle } from "~/components/SectionTitle"
import { AnimatedSlide } from "~/components/animated/AnimatedSlide"
import picture from "../../../img/aerial.png"
import { A } from "solid-start"
import { CustomLink } from "~/components/CustomLink"
import { useLang, useT } from "~/components/LanguagesContext"

export const EmploymentSection: Component = () => {
  const lang = useLang()
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
            <h3 class={"text-2xl text-primary-300 font-semibold"}>Aerial (April 2023 - Now)</h3>
            <p class={"text-gray-100"}>
              Aerial is a platform that helps startups collect, organize and cross-reference
              the core information and documents essential to running and funding their companies.
            </p>
            <p class={"text-gray-100"}>
              Aerial leverages the power of machine learning to automatically organize documents so they’re ready
              for due diligence at a moment’s notice.
            </p>
            <p class={"text-gray-100"}>
              It also automatically identify and report red flags, issues with the legal documents that may jeopardize
              fundraising or acquisition.
            </p>
            <hr class={"my-2"} />
            <p class={"text-gray-100"}>
              <b class={"capitalize"}>{formatter().format(new Date(2023, 3))}</b> - I started as a full-time intern,
              when <CustomLink
              href={"https://www.linkedin.com/in/tianhuili/"}>Michael Li</CustomLink> saw potential in my work, despite
              my lack of professional experience.
              At the time, I focused mainly on developing the web application with NextJS, TS and tRPC.
            </p>
            <p class={"text-gray-100"}>
              <b class={"capitalize"}>{formatter().format(new Date(2023, 8))}</b> - After the internship period, I was
              promoted to a full-time Full-Stack developer.
              My responsibilities increased: besides working on the fronted, I started reviewing code and working on
              the ML side of the company, using Python, sklearn, and OpenAI.
            </p>
          </div>
        </div>
      </AnimatedSlide>
    </section>
  )
}