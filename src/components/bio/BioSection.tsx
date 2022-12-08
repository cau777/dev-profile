import {Component} from "solid-js";

export const BioSection: Component = () => {
    return (
        <section class={"flex"}>
            <img class={"mr-7"}
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1SNpYAOMy3ZYbkp95RoG2igrT_B-uhq0SsEf_1KuoVBC9LTI7hBZgK7b_26MH9OGqQDw&usqp=CAU"}
                alt={"A picture of me with my arms crossed"}/>
            
            <header>
                <h1 class={"text-primary-300 font-semibold text-xl mb-1 mt-4"}>
                    Hi, I'm Cauã Rinaldi!
                </h1>
                <span class={"text-4xl font-bold"}>
                    A <u>proactive</u> and <u>studious</u>
                    <br/>Full-Stack Developer
                </span>
            </header>
        </section>
    )
}

/*
<section>
            <h1 class={"uppercase font-bold text-4xl mb-8"}>Cauã Rinaldi</h1>
            <div class={"flex flex-col justify-center align-middle gap-2 md:flex-row"}>
                <img class={"mx-auto lg:mr-5 border-4 border-secondary-200 w-[15rem]"} src={photo}
                     alt={"A half-body photo of me"}/>
                <p class={"text-sm text-gray-100"}>
                    I program primarily as a hobby, but would like to start doing it
                    professionally. I'm always learning new
                    technologies and doing courses in my free time. Besides, I love challenging myself with different
                    projects and concepts. My favorite areas are backend and frontend development. Throughout the years,
                    I
                    explored many technologies and created various projects, primarily open-source on GitHub.
                </p>
            </div>
        </section>
 */