import { Text, Title } from "@mantine/core"
import { SectionWrapper } from "../components/section-wrapper.tsx"
import { IconUser, IconUserCode } from "@tabler/icons-react"

export const WhoAmISection: React.FC = () => {
    return (
        <SectionWrapper title={"Who Am I"} size='sm' Icon={IconUserCode}>
            <Text size='lg' ta='center'>
                I'm a Brazilian Software Engineer with 3 years of experience in Full-Stack development. I discovered
                my deep passion for coding when I was 14 and haven't stopped ever since.

                <br/>
                My favorite technologies are TS, Rust and Python.
            </Text>
        </SectionWrapper>
    )
}