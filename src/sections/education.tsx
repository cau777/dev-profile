import React from "react";
import { SectionWrapper } from "../components/section-wrapper.tsx";
import {
  Card,
  Stack,
  Title,
  Text,
  Group,
  Anchor,
  Image,
  SimpleGrid,
  Collapse,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconChevronDown,
  IconChevronUp,
  IconSchool,
} from "@tabler/icons-react";

type Org = "Educative" | "Google Cloud Skills Boost";
type Course = {
  organization: Org;
  name: string;
  date: Date;
  url?: string;
};

const CourseLogo: React.FC<{ org: Org; size: number }> = ({ org, size }) => {
  switch (org) {
    case "Educative":
      return (
        <Image src={"/educative-logo.svg"} w={size} alt={org} title={org} />
      );
    case "Google Cloud Skills Boost":
      return <Image src={"/google.svg"} w={size} alt={org} title={org} />;
  }
};

const COURSES: Course[] = [
  {
    name: "Full Speed Python",
    organization: "Educative",
    date: new Date(2021, 12),
    url: "https://www.educative.io/verify-certificate/3l5A3ZfxYLqnLyv1KcpnVzVQMAP1hZ",
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
    name: "Make Your Own Neural Network in Python",
    organization: "Educative",
    date: new Date(2022, 2),
    url: "https://www.educative.io/verify-certificate/B88QXYG7O9nhA8lAZw0B2MhQVqnqWZmXYTy",
  },
  {
    name: "Become a Rust Web Developer",
    organization: "Educative",
    date: new Date(2023, 0),
    url: "https://www.educative.io/verify-certificate/El5jyzf0K0DGjGKVxi4AMLMZ6ODmIG",
  },
  {
    name: "Google Cloud Computing Foundations",
    organization: "Google Cloud Skills Boost",
    date: new Date(2023, 2),
    url: "https://www.cloudskillsboost.google/public_profiles/29d65f40-ef87-4c02-af1a-da6993a6b2b5",
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
];

const EducationCard: React.FC<{
  title: React.ReactNode;
  range: React.ReactNode;
  descr: React.ReactNode;
  certifications?: React.ReactNode[];
}> = ({ title, range, descr, certifications }) => {
  return (
    <Card withBorder={true} radius="md" w="100%">
      <Title order={4}>{title}</Title>
      <Text>{range}</Text>
      <Text>{descr}</Text>
      {certifications?.length && (
        <Group>
          {certifications.map((node, i) => (
            <Text key={i} c={"dimmed"} size={"sm"}>
              {node}
            </Text>
          ))}
        </Group>
      )}
    </Card>
  );
};

export const EducationSection: React.FC = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <SectionWrapper title={"Education"} size={"md"} Icon={IconSchool}>
      <Stack gap="lg" align="start">
        <EducationCard
          title={"English as second language (C1 level) - Fisk"}
          range={"January/2014 - January/2022"}
          descr={
            <>
              Studied for 8 years to achieve fluency in English and a C1 grade
              on the Michigan English Test (MET)
            </>
          }
        />
        <EducationCard
          title={"Python and Java track - Jetbrains Academy"}
          range={"January/2021 - August/2022"}
          descr={
            <>
              Project-focused programming course that span basic and advanced
              computer science topics, best practices, and Python and Java
              programming languages. Throughout the course, I have developed
              over 20 projects available in{" "}
              <Anchor
                href={"https://github.com/cau777?tab=repositories"}
                target={"_blank"}
              >
                my GitHub
              </Anchor>
              .
            </>
          }
          certifications={[
            <Anchor
              c="dimmed"
              target={"_blank"}
              href={
                "https://hyperskill.org/certificates/a6d2152b-a9c1-4bbb-8acd-b99ea73d30ab.pdf"
              }
            >
              Java Certificate
            </Anchor>,
            <Anchor
              c="dimmed"
              target={"_blank"}
              href={
                "https://hyperskill.org/certificates/4d49e64d-93de-47c1-b1fa-41fa1df85af0.pdf"
              }
            >
              Python Certificate
            </Anchor>,
          ]}
        />
        <Collapse in={opened}>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }}>
            {COURSES.map((course, i) => (
              <Card key={i} withBorder={true} p="lg" radius="lg">
                <Stack justify="center" align={"center"} h="100%">
                  <CourseLogo org={course.organization} size={36} />
                  <Title order={6} ta="center">
                    {course.name}
                  </Title>
                  <Group mt="auto">
                    <Text size="sm" c="dimmed">
                      {course.date.getMonth() + 1}/
                      {course.date.getFullYear() - 2000}
                    </Text>
                    <Text size="sm" c="dimmed">
                      <Anchor href={course.url} target="_blank" c={"dimmed"}>
                        View certificate
                      </Anchor>
                    </Text>
                  </Group>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Collapse>
        <Button onClick={() => toggle()} variant="subtle" w="100%">
          {opened ? <IconChevronUp /> : <IconChevronDown />}{" "}
          {opened ? "Collapse" : "See"} courses
        </Button>
      </Stack>
    </SectionWrapper>
  );
};
