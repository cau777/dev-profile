import axios from "axios";

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

type ProjectsResponse = {
    projects: Project[];
}

export async function fetchProjects() {
    return axios.get<ProjectsResponse>("https://api.codersrank.io/v2/users/cau777/projects")
        .then(o => o.data)
        .then(o => o.projects);
}