import type {Component} from "solid-js";
import {Dynamic} from "solid-js/web";

export default {
    "headDescription":"A personal portfolio website for Cauã Rinaldi, highlighting education, courses, programming languages, and projects.",
    
    "greeting": "Hi, I'm Cauã Rinaldi!",
    description: (adj1Tag: Component<any>, adj2Tag: Component<any>) => <>
        A <Dynamic component={adj1Tag}>proactive</Dynamic> and <Dynamic component={adj2Tag}>studious</Dynamic> Web Developer
    </>,
    subtitle: (tag: Component<any>) => <>
        I'm almost 18 and if there's <Dynamic component={tag}>one</Dynamic> thing I know is that I love finding creative solutions for problems.
        <br/>
        Also, I enjoy designing small and big applications, while working in the frontend and/or backend.
    </>,
    aboutMeText: () => <>
        I'm from Brazil and Portuguese is my native language, but I'm also fluent in English (C1). <br/>
        I started programming in 2017 as a hobby, but began learning seriously in the start of 2021. <br/>
        In this time, I took various courses and made a lot of open-source projects in my GitHub account, exploring different technologies. <br/>
        Now, I'll be studying Software Engineering in Unijuí from 2023 to 2028. <br/>
    </>,
    
    "elementarySchool": "Elementary School",
    "highSchool": "High School",
    "englishCourse": "English Course",
    "softwareEngineering": "Software Engineering",
    "presentTime": "Present",
    
    "viewCertificate": "View Certificate",
    
    "checkDemo": "Check Demo",
    "checkSource": "Check Code",
    "prev": "Previous",
    "next": "Next",
    "scrollDown": "Scroll down",
    
    "aboutMe": "About Me",
    "education": "Education",
    "courses": "Courses",
    "projects": "Projects",
    "languages": "Languages",
    "languagesDescription": "My coding experience in different languages throughout the time, measured by CodersRank based on my GitHub activity",
    
    "sudokuSolverDescription": "An algorithm made to solve sudoku puzzles of various sizes efficiently. " +
        "It's implemented in Rust and runs in the browser using Web Assembly. " +
        "The project includes a simple interface made in React to visualize the algorithm step-by-step.",
    
    
    "handwrittenDigitsRecognitionDescription": "A GPU-accelerated deep learning library built in Rust almost from scratch. " +
        "Plus an online playground to use it to recognize digits (MNIST dataset).",
    
    "graphicalRegexDesignerDescription": "A website made in Angular to help you create regular expressions using colored blocks. " +
        "It also supports variables and testing, and outputs the expression in the JavaScript format.",
    
    "codeShareDescription": "A social network that allows users to write and post snippets in different languages with a code editor, " +
        "and interact with other users' posts and profiles. It uses Supabase as the database and includes 2 containerized microservices.",
}