export type Course = {
    organization: string;
    name: string;
    date: Date;
    url?: string;
}

export const COURSES: Course[] = [
    {
        name: "Java Developer",
        organization: "JetBrains Academy",
        date: new Date(2022, 8),
        url: "https://hyperskill.org/certificates/a6d2152b-a9c1-4bbb-8acd-b99ea73d30ab.pdf",
    },
    {
        name: "Python Core",
        organization: "JetBrains Academy",
        date: new Date(2022, 8),
        url: "https://hyperskill.org/certificates/4d49e64d-93de-47c1-b1fa-41fa1df85af0.pdf",
    },
    {
        name: "Full Speed Python",
        organization: "Educative",
        date: new Date(2021, 12),
        url: "https://www.educative.io/verify-certificate/3l5A3ZfxYLqnLyv1KcpnVzVQMAP1hZ",
    },
    {
        name: "Michigan Language Assessment C1",
        organization: "University of Michigan",
        date: new Date(2022, 6),
    },
    {
        name: "TypeScript for Front-End Developers",
        organization: "Educative",
        date: new Date(2022, 1),
        url: "https://www.educative.io/verify-certificate/3l5A3Zfxm3p2pvgmGTpnVzVQMAP1hZ",
    },
    {
        name: "Become an Angular Developer",
        organization: "Educative",
        date: new Date(2022, 1),
        url: "https://www.educative.io/verify-certificate/lOn30BI69kA7XAX9LfN5xlx1RrvBhM",
    },
    {
        name: "Modern CSS with Tailwind",
        organization: "Educative",
        date: new Date(2022, 7),
        url: "https://www.educative.io/verify-certificate/WnDG1YSPLv2yPrOZ0tBWkJkm792Vsk",
    },
    {
        name: "The Ultimate Guide to Rust Programming",
        organization: "Educative",
        date: new Date(2022, 7),
    },
    {
        name :"Make Your Own Neural Network in Python",
        organization: "Educative",
        date: new Date(2022, 2),
        url: "https://www.educative.io/verify-certificate/B88QXYG7O9nhA8lAZw0B2MhQVqnqWZmXYTy"
    },
    {
        name: "Web Security and Access Management: JWT, OAuth2 & OpenId Connect",
        organization: "Educative",
        date: new Date(2022, 3),
        url: "https://www.educative.io/verify-certificate/GwjxmvLOZOXs2oOr4D3GQxiWRDPDkq8MVfm",
    },
    {
        name: "Practical Security: Simple Practices for Defending Your Systems",
        organization: "Educative",
        date: new Date(2022, 11),
        url: "https://www.educative.io/verify-certificate/X6EJPZiGZk4yOV88vFQwKLKmYyG3TL",
    },
    {
        name: "Become a Rust Web Developer",
        organization: "Educative",
        date: new Date(2023, 0),
        url: "https://www.educative.io/verify-certificate/El5jyzf0K0DGjGKVxi4AMLMZ6ODmIG",
    },
]
