import "@mantine/core/styles.css"
import { AppShell, MantineProvider, Divider, Container, Stack } from "@mantine/core"
import { theme } from "./theme"
import { Hero } from "./sections/hero.tsx"
import { WhoAmISection } from "./sections/whoami.tsx"
import { ExperienceSection } from "./sections/experience.tsx"
import { AwardsSection } from "./sections/awards.tsx"
import { EducationSection } from "./sections/education.tsx"

export default function App() {
    return <MantineProvider theme={theme}>
        <AppShell
            padding="md"
            header={{ height: 60 }}
        >
            <AppShell.Header>
                <div>Logo</div>
            </AppShell.Header>


            <AppShell.Main>
                <Container size={"md"} component={"section"}>
                    <Hero />
                    <Divider my="xl" />
                </Container>
                <Stack gap={100}>
                    <WhoAmISection />
                    <ExperienceSection />
                    <EducationSection/>
                    <AwardsSection/>
                </Stack>
            </AppShell.Main>
        </AppShell>

    </MantineProvider>
}
