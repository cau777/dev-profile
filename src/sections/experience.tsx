import { SectionWrapper } from "../components/section-wrapper.tsx";
import {
  Timeline,
  Text,
  Group,
  Stack,
  useMatches,
  Anchor,
  ModalProps,
  Modal,
  Image,
  List,
  Card,
  ImageProps,
  Title,
} from "@mantine/core";
import { IconBriefcase, IconBriefcase2 } from "@tabler/icons-react";
import { theme } from "../theme.ts";
import React from "react";

const CaptionedImage: React.FC<{ title: string } & ImageProps> = ({
  title,
  ...props
}) => (
  <Card withBorder={true} p="xs">
    <Card.Section withBorder={true}>
      <Image {...props} alt={title} title={title} />
    </Card.Section>
    <Text ta="center" mt="xs">
      {title}
    </Text>
  </Card>
);

const AerialModal: React.FC<ModalProps> = (props) => {
  const wrap = useMatches({
    base: "wrap",
    md: "nowrap",
  } as const);

  return (
    <Modal {...props} title={<Title order={3}>About Aerial</Title>} size="60vw">
      <Group wrap={wrap} align="start">
        <Stack>
          <Text>
            Aerial was an AI-powered platform to help companies keep track of
            their legal documents. After the user uploads documents to the
            website, AI models automatically classify it and extract metadata
            (like date and title). Based on that, the document is organized into
            an easy-to-understand data room and the software looks at the
            company as a whole to find and report issues with legal
            documentation (like an employee missing an offer letter).
          </Text>
          <Text>
            Our most impressive feature was a reliable AI chatbot that could
            search the company data to answer simple and complex questions. I
            was responsible for planning and coding this feature, and I'm really
            proud of how it turned out! The final agent had multiple steps
            including:
          </Text>
          <Text>
            <b>•</b> Moderation checks to avoid giving legal advice
          </Text>
          <Text>
            <b>•</b> RAG system to read document contents
          </Text>
          <Text>
            <b>•</b> Many functions to access structured data from the database
          </Text>
        </Stack>
        <Stack>
          <CaptionedImage
            src={"/aerial-red-flags2.png"}
            title={"Red flags page"}
            w={450}
            maw={"60vw"}
          />
          <CaptionedImage
            src={"/aerial-assistant1.png"}
            title={"AI Assistant Chatbot"}
            w={450}
            maw={"60vw"}
          />
        </Stack>
      </Group>
    </Modal>
  );
};

export const ExperienceSection: React.FC = () => {
  const [modalOpened, setModalOpened] = React.useState(false);
  const wrap = useMatches({
    base: "wrap",
    md: "nowrap",
  } as const);

  return (
    <SectionWrapper title={"Work Experience"} size={"md"} Icon={IconBriefcase2}>
      <Group wrap={wrap}>
        <Timeline
          active={4}
          bulletSize={24}
          lineWidth={2}
          styles={{
            itemBullet: { backgroundColor: theme.colors.orange[5] },
          }}
        >
          <Timeline.Item
            title={
              <Text size="lg" fw={600}>
                Mentored Internship - Aerial
              </Text>
            }
          >
            <Text>
              Mentored by industry expert{" "}
              <Anchor
                href="https://www.linkedin.com/in/tianhuili/"
                target={"_blank"}
              >
                Michael Li
              </Anchor>{" "}
              (former Google and NASA employee), I worked on{" "}
              <Anchor onClick={() => setModalOpened(true)} target={"_blank"}>
                Aerial
              </Anchor>
              's web application, and learned about clean code, intuitive UX
              and, above all, teamwork. Later in the internship, I focused on
              the ML and NLP models trained to classify and extract information
              from legal documents.
            </Text>
            <Text c="dimmed" size="sm" mt={4}>
              April/2023 - September/2023
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title={
              <Text size="lg" fw={600}>
                Full Stack Developer - Aerial
              </Text>
            }
          >
            Finished my internship and got a permanent role in the company.
            Besides the previous full-stack responsibilities, I was also trusted
            with{" "}
            <Text span c={"primary"}>
              code reviews
            </Text>
            , design and implementation of full UX workflows, and integrations.
            <Text c="dimmed" size="sm" mt={4}>
              October/2023 - November/2024
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title={
              <Text size="lg" fw={600}>
                Product Engineer - Aerial
              </Text>
            }
          >
            Earned a more active role in the company, dealing with not only the
            code, but the product as a whole. I continued with my previous
            responsibilities, but also had meetings with the CEO to discuss the
            next steps for the product and proposed the tech stack and
            implementation requirements for major features. My biggest project
            in this role (and in my career) was developing a{" "}
            <Anchor onClick={() => setModalOpened(true)} target={"_blank"}>
              reliable AI assistant
            </Anchor>
            , capable of looking through documents and tables to find answers
            for questions about a company.
            <Text c="dimmed" size="sm" mt={4}>
              November/2024 - August/2025
            </Text>
          </Timeline.Item>

          {/* TODO: emphasis*/}
          <Timeline.Item
            title={
              <Text size="lg" fw={600}>
                Available for hire. Contact me!
              </Text>
            }
          />
        </Timeline>
        <Stack gap="xl">
          <Card
            withBorder={true}
            p={0}
            shadow="xs"
            style={{ cursor: "pointer" }}
            w={350}
          >
            <Image
              w="100%"
              src={"/aerial-logo.png"}
              onClick={() => setModalOpened(true)}
              p="sm"
            />
            <Text py="xs" px="sm" size="sm" c={"dimmed"}>
              More info about Aerial
            </Text>
          </Card>
          <Card withBorder={true} p={0} shadow="xs" w={350}>
            <Image w="100%" src={"/aerial-team.jpg"} />
            <Text py="xs" px="sm" size="sm" c={"dimmed"}>
              Aerial Team
            </Text>
          </Card>
        </Stack>
        <AerialModal
          opened={modalOpened}
          onClose={() => setModalOpened(false)}
        />
      </Group>
    </SectionWrapper>
  );
};
