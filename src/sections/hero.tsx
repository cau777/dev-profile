import { Group, Image, Stack, Title, useMatches, Text } from "@mantine/core";
import { imageBorderGradientStyle, textGradientStyle } from "../style-utils.ts";

export const Hero: React.FC = () => {
  const wrap = useMatches({
    base: "wrap",
    md: "nowrap",
  } as const);

  return (
    <Group gap={70} mx="lg" wrap={wrap} mt={60} mb={60}>
      <Image src={"/full-body.jpg"} w={250} style={imageBorderGradientStyle} />
      <Stack gap={5}>
        <Title order={1}>Hey! I'm Cauã Rinaldi</Title>
        <Title order={2} fw={600}>
          I'm a full-stack developer, AI enthusiast, former Aerial employee, and
          Math nerd
        </Title>
        <Text fw={500} mt={60}>
          I'm currently:{" "}
          <Text span style={textGradientStyle} fw={800}>
            OPEN TO WORK
          </Text>
        </Text>
      </Stack>
    </Group>
  );
};
