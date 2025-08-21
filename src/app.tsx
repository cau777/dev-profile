import "@mantine/core/styles.css"
import { AppShell, MantineProvider, Divider, Container, Stack } from "@mantine/core"
import { theme } from "./theme"
import { Hero } from "./sections/hero.tsx"
import { WhoAmI } from "./sections/whoami.tsx"
import { ExperienceSection } from "./sections/experience.tsx"

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
                <Stack>
                    <WhoAmI />
                    <ExperienceSection />
                </Stack>
            </AppShell.Main>
        </AppShell>

    </MantineProvider>
}
