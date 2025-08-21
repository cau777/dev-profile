import { SectionWrapper } from "../components/section-wrapper.tsx"
import { Carousel } from "@mantine/carousel"
import { Group, Image, Stack, Title, useMatches, Text, Pill, Button } from "@mantine/core"
import { IconCode } from "@tabler/icons-react"

type Project = {
    "image"?: string,
    "project_title": string,
    "company"?: string,
    "role"?: string,
    "description": string,
    "highlighted_technologies": string[],
    "other_technologies": string[],
    "start_date": string,
    "end_date"?: string,
    "link_to_project"?: string,
    "link_to_source_code"?: string
};

const PROJECTS: Project[] = [{
    "description": "An algorithm made to solve sudoku puzzles of various sizes efficiently. " +
        "It's implemented in Rust and runs in the browser using Web Assembly. " +
        "The project includes a simple interface made in React to visualize the algorithm step-by-step.",
    "end_date": "2022-07",
    "highlighted_technologies": ["rust", "wasm", "react"],
    "image": "https://codersrankpublic.blob.core.windows.net/userdata/630a3a7b2557bf00019c1eee/portfolio/cfbaefd5-8654-44c8-a346-a7a37629a02b",
    "link_to_project": "/projects/sudoku-solver",
    "link_to_source_code": "https://github.com/cau777/sudoku_solver",
    "other_technologies": ["typescript"],
    "project_title": "Sudoku Solver",
    "start_date": "2022-07",
}, {
    "description": "A social network that allows users to write and post snippets in different " +
        "languages with a code editor, and interact with other users' posts and profiles. " +
        "It uses Supabase as the database and includes 2 containerized microservices.",
    "end_date": "2022-09",
    "highlighted_technologies": ["next.js", "tailwindcss", "docker"],
    "image": "https://codersrankpublic.blob.core.windows.net/userdata/630a3a7b2557bf00019c1eee/portfolio/e30bb61d-cdec-46ad-a93b-f32ffda2d1bc",
    "link_to_project": "/projects/code-share",
    "link_to_source_code": "https://github.com/cau777/code-share",
    "other_technologies": ["typescript", "asp.net core", "Flask", "i18n", "microservices", "pwa"],
    "project_title": "code-share",
    "start_date": "2022-09",
}, {
    "description": "A GPU-accelerated deep learning library built in Rust almost from scratch. Plus an online playground to use it to recognize digits (MNIST dataset).",
    "highlighted_technologies": ["rust", "ReactJS", "deep learning"],
    "image": "https://codersrankpublic.blob.core.windows.net/userdata/630a3a7b2557bf00019c1eee/portfolio/ace2225f-6cc1-430e-9a94-ec3bedb3d4e9",
    "link_to_project": "https://cau777.github.io/ai_playground/",
    "link_to_source_code": "https://github.com/cau777/ai_playground",
    "other_technologies": ["docker", "docker compose", "glsl"],
    "project_title": "AI Playground",
    "start_date": "2022-09",
}, {
    "description": "A website made in Angular to help you create regular expressions using colored blocks. It also supports variables and testing, and outputs the expression in the JavaScript format.",
    "end_date": "2022-01",
    "highlighted_technologies": ["Angular", "regex", "pwa"],
    "image": "https://codersrankpublic.blob.core.windows.net/userdata/630a3a7b2557bf00019c1eee/portfolio/3999f0f3-ac7b-474f-b25a-e3ddf4665500",
    "link_to_project": "/projects/regex-designer",
    "link_to_source_code": "https://github.com/cau777/GraphicalRegexDesigner",
    "other_technologies": ["typescript", "angular-material", "less"],
    "project_title": "Graphical Regex Designer",
    "start_date": "2021-12",
}]

const ProjectDisplay: React.FC<Project> = ({
                                               image,
                                               project_title,
                                               description,
                                               highlighted_technologies,
                                               other_technologies,
                                               link_to_project,
                                               link_to_source_code,
                                           }) => {
    const wrap = useMatches({
        base: "wrap",
        md: "nowrap",
    } as const)

    return (
        <Group wrap={wrap}>
            <Image src={image} alt="Project screenshot" w={400} />
            <Stack>
                <Title order={4}>{project_title}</Title>
                <Text>{description}</Text>
                <Group>
                    {highlighted_technologies.map(tech => (
                        // TODO: highlight
                        <Pill key={tech}>{tech}</Pill>
                    ))}
                    {other_technologies.map(tech => (
                        <Pill key={tech}>{tech}</Pill>
                    ))}
                </Group>
                <Group>
                    {link_to_project && <Button>Check Demo</Button>}
                    {link_to_source_code && <Button>Check Code</Button>}
                </Group>
            </Stack>
        </Group>
    )
}

export const ProjectsSection: React.FC = () => {
    return (
        <SectionWrapper size="md" title={"Projects"} Icon={IconCode}>
            <Carousel withIndicators={true}
                      emblaOptions={{
                          loop: true,
                      }}>
                {PROJECTS.map(project => (
                    <Carousel.Slide key={project.project_title}>
                        <ProjectDisplay {...project} />
                    </Carousel.Slide>
                ))}
            </Carousel>
        </SectionWrapper>
    )
}