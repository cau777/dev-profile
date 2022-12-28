export type Institution = {
    degree: string;
    name: string;
    start: Date;
    end?: Date;
}

export const INSTITUTIONS: Institution[] = [
    {
        degree: "elementarySchool",
        name: "Escola Municipal de Ensino Fundamental Santos Anjos",
        start: new Date(2005, 1),
        end: new Date(2019, 11),
    },
    {
        degree: "highSchool",
        name: "Escola Estadual de Ensino Médio Anthonio Mathias Anschau",
        start: new Date(2020, 1),
        end: new Date(2022, 11),
    },
    {
        degree: "englishCourse",
        name: "Fisk Sarandi",
        start: new Date(2014, 2),
        end: new Date(2022, 6),
    },
    {
        degree: "softwareEngineering",
        name: "Unijuí",
        start: new Date(2023, 1),
    }
];