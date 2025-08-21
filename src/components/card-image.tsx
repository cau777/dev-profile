import {
  Box,
  Card,
  Image,
  ImageProps,
  Modal,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";

export const CardImage: React.FC<{ caption: string } & ImageProps> = ({
  caption,
  ...imageProps
}) => {
  const [opened, setOpen] = React.useState(false);

  return (
    <>
      <Card withBorder={true} p={0} shadow="xs">
        <Card.Section withBorder={true} inheritPadding={true}>
          <Image
            {...imageProps}
            onClick={() => setOpen(true)}
            style={{ cursor: "zoom-in" }}
          />
        </Card.Section>
        <Text py="xs" px="sm" size="sm" c={"dimmed"}>
          {caption}
        </Text>
      </Card>
      <Modal
        opened={opened}
        onClose={() => setOpen(false)}
        title={<Title order={2}>{caption}</Title>}
        size={"80vw"}
      >
        <Box w={"100%"} h={"80vh"}>
          <Image {...imageProps} h={"100%"} w={"100%"} fit="contain" />
        </Box>
      </Modal>
    </>
  );
};
