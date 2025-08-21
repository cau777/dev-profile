import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import {
  AppShell,
  MantineProvider,
  Container,
  Stack,
  Group,
  Anchor,
  Box,
} from "@mantine/core";
import { themeOverride } from "./theme";
import { Hero } from "./sections/hero.tsx";
import { WhoAmISection } from "./sections/whoami.tsx";
import { ExperienceSection } from "./sections/experience.tsx";
import { AwardsSection } from "./sections/awards.tsx";
import { EducationSection } from "./sections/education.tsx";
import { ProjectsSection } from "./sections/projects.tsx";
import { Contacts } from "./components/contacts.tsx";

const HEADER_HEIGHT = 60;

const NavAnchor: React.FC<React.PropsWithChildren<{ id: string }>> = ({
  children,
  id,
}) => {
  return (
    <Anchor
      c="gray.4"
      onClick={() => {
        const el = document.getElementById(id);
        if (!el) throw new Error("No element with id " + id);
        el.scrollIntoView({ block: "center", behavior: "smooth" });
      }}
      size="sm"
    >
      {children}
    </Anchor>
  );
};

export default function App() {
  return (
    <MantineProvider theme={themeOverride} forceColorScheme="dark">
      <AppShell padding="md" header={{ height: HEADER_HEIGHT }}>
        <AppShell.Header>
          <Container size="md" h="100%">
            <Group justify={"end"} h="100%">
              <NavAnchor id={"whoami"}>Who am I</NavAnchor>
              <NavAnchor id={"work"}>Work Experience</NavAnchor>
              <NavAnchor id={"education"}>Education</NavAnchor>
              <NavAnchor id={"awards"}>Awards</NavAnchor>
              <NavAnchor id={"projects"}>Projects</NavAnchor>

              <Box ml="lg" />
              <Contacts />
            </Group>
          </Container>
        </AppShell.Header>

        <AppShell.Main>
          <Container size={"md"} component={"section"}>
            <Stack gap={120}>
              <Hero />
              <WhoAmISection />
              <ExperienceSection />
              <EducationSection />
              <AwardsSection />
              <ProjectsSection />
              <Group mb={50} gap="xl" justify={"center"}>
                <Contacts />
              </Group>
            </Stack>
          </Container>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
