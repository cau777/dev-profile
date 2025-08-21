import React from "react";
import { Container, Divider, Group, MantineSize, Title } from "@mantine/core";
import { IconAB } from "@tabler/icons-react";

export const SectionWrapper: React.FC<
  React.PropsWithChildren<{
    title: React.ReactNode;
    size: MantineSize;
    Icon: React.FC;
  }>
> = ({ title, children, size, Icon = IconAB }) => (
  <section>
    <Divider
      label={
        <Group mb={3} c={"gray.3"}>
          <Icon size={36} />
          <Title ta="center" order={3} mt={3}>
            {title}
          </Title>
        </Group>
      }
    />

    <Container size={size} component={"section"} mt="md">
      {children}
    </Container>
  </section>
);
