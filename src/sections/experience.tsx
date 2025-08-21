import { SectionWrapper } from "../components/section-wrapper.tsx"
import { Timeline, Text, Group, Stack, useMatches } from "@mantine/core"
import { CaptionImage } from "../components/caption-image.tsx"

const Item: React.FC<React.PropsWithChildren<{ title: string, range?: string }>> = ({ title, children, range }) => {
    return (
        <Timeline.Item title={<Text size="lg" fw={600}>{title}</Text>}>
            {children}
            {range && (
                <Text c="dimmed" size="sm" mt={4}>{range}</Text>
            )}
        </Timeline.Item>
    )
}

export const ExperienceSection: React.FC = () => {
    const wrap = useMatches({
        base: "wrap",
        md: "nowrap",
    } as const)

    return (
        <SectionWrapper title={"Work Experience"} size={'md'}>
            <Group wrap={wrap}>
                <Timeline active={1} bulletSize={24} lineWidth={2} styles={{ item: { size: "lg" } }}>
                    <Item title="Mentored Internship - Aerial" range={"April/2023 - September/2023"}>
                        Mentored by industry expert Michael Li (former Google NASA employee), I learned
                        and contributed to several aspects of Aerial.
                        • Developed responsive NextJS applications, enhancing user experience through
                        intuitive design.
                        • Trained and optimized machine learning models for classifying, ranking and
                        extracting information from legal docs.
                        • Integrated various third-party services to boost application functionality.
                        Biggest project: Improved SkLearn model for document type classification
                    </Item>

                    <Item title="Full Stack Developer - Aerial" range={"October/2023 - November/2024"}>
                        Finished my internship and got a permanent role in the company. Besides the previous
                        full-stack responsibilities, I also got to:
                        • Review code, ensuring quality and conformity with the existing codebase.
                        • Design and implement full UX workfows.
                        • Discuss with the team to make impactful architectural decisions.
                        Biggest project: Redesigned dashboard and other main pages
                    </Item>

                    <Item title="Product Engineer">
                        Earned a more active role in the company, dealing with not only the code, but the
                        product as a whole. I continued with my full-stack developer role, but also:
                        • Had meetings with the CEO to discuss the next steps for the product.
                        • Proposed the tech stack and implementation requirements for major features.
                        • Planned feature roll-out on different environments.
                        Biggest project: Developed a reliable AI assistant
                    </Item>

                    {/*TODO*/}
                    <Item title="Available for hire. Contact me!"/>
                </Timeline>
                <Stack gap='xl'>
                    <CaptionImage caption={"Our product"} src={"aerial-product.png"}/>
                    <CaptionImage caption={"Our team"} src={"aerial-team.jpg"}/>
                </Stack>
            </Group>
        </SectionWrapper>
    )
}