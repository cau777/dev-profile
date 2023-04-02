export type Project = {
    "image"?: string,
    "project_title": string,
    "company"?: string,
    "role"?: string,
    "description": string,
    "highlighted_technologies": string[],
    "other_technologies": string[],
    "is_current": boolean,
    "start_date": string,
    "end_date"?: string,
    "link_to_project"?: string,
    "link_to_source_code"?: string
};

export const PROJECTS: Project[] = [{
    "description": "sudokuSolverDescription",
    "end_date": "2022-07",
    "highlighted_technologies": ["rust", "wasm", "react"],
    "image": "https://codersrankpublic.blob.core.windows.net/userdata/630a3a7b2557bf00019c1eee/portfolio/cfbaefd5-8654-44c8-a346-a7a37629a02b",
    "is_current": false,
    "link_to_project": "/projects/sudoku-solver",
    "link_to_source_code": "https://github.com/cau777/sudoku_solver",
    "other_technologies": ["typescript"],
    "project_title": "Sudoku Solver",
    "start_date": "2022-07"
}, {
    "description": "codeShareDescription",
    "end_date": "2022-09",
    "highlighted_technologies": ["next.js", "tailwindcss", "docker"],
    "image": "https://codersrankpublic.blob.core.windows.net/userdata/630a3a7b2557bf00019c1eee/portfolio/e30bb61d-cdec-46ad-a93b-f32ffda2d1bc",
    "is_current": false,
    "link_to_project": "/projects/code-share",
    "link_to_source_code": "https://github.com/cau777/code-share",
    "other_technologies": ["typescript", "asp.net core", "Flask", "i18n", "microservices", "pwa"],
    "project_title": "code-share",
    "start_date": "2022-09"
}, {
    "description": "aipgDescription",
    "highlighted_technologies": ["rust", "ReactJS", "deep learning"],
    "image": "https://codersrankpublic.blob.core.windows.net/userdata/630a3a7b2557bf00019c1eee/portfolio/ace2225f-6cc1-430e-9a94-ec3bedb3d4e9",
    "is_current": true,
    "link_to_project": "https://cau777.github.io/ai_playground/",
    "link_to_source_code": "https://github.com/cau777/ai_playground",
    "other_technologies": ["docker", "docker compose", "glsl"],
    "project_title": "AI Playground",
    "start_date": "2022-09"
}, {
    "description": "graphicalRegexDesignerDescription",
    "end_date": "2022-01",
    "highlighted_technologies": ["Angular", "regex", "pwa"],
    "image": "https://codersrankpublic.blob.core.windows.net/userdata/630a3a7b2557bf00019c1eee/portfolio/3999f0f3-ac7b-474f-b25a-e3ddf4665500",
    "is_current": false,
    "link_to_project": "/projects/regex-designer",
    "link_to_source_code": "https://github.com/cau777/GraphicalRegexDesigner",
    "other_technologies": ["typescript", "angular-material", "less"],
    "project_title": "Graphical Regex Designer",
    "start_date": "2021-12"
}]
