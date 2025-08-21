import { Text } from "@mantine/core";
import { SectionWrapper } from "../components/section-wrapper.tsx";
import { IconUserCode } from "@tabler/icons-react";

export const WhoAmISection: React.FC = () => {
  return (
    <SectionWrapper
      title={"Who Am I"}
      size="sm"
      Icon={IconUserCode}
      id={"whoami"}
    >
      <Text size="lg" ta="center">
        I'm a Brazilian Software Engineer with 3 years of experience in
        Full-Stack development. I discovered my deep passion for coding when I
        was 14 and haven't stopped ever since. My favorite part is finding the
        optimal solutions for complex challenges. From working, coding
        open-source side-projects, taking courses and reading articles, I have
        built a big baggage of knowledge in the field.
        <br />
        I'm comfortable with both frontend (NextJS, TS, React) and backend
        (Node, Python, MongoDB, SQL). I also like writing performant code in
        Rust.
      </Text>
    </SectionWrapper>
  );
};
