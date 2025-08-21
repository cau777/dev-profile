import { Anchor } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

export const Contacts = () => (
  <>
    <Anchor href={"https://github.com/cau777"} lh={0}>
      <IconBrandGithub />
    </Anchor>
    <Anchor
      href={
        "https://www.linkedin.com/in/cau%C3%A3-rinaldi-618b6b259/?locale=en_US"
      }
      lh={0}
    >
      <IconBrandLinkedin />
    </Anchor>
    <Anchor href={"mailto:cauarinaldi451@gmail.com"} lh={0}>
      <IconMail />
    </Anchor>
  </>
);
