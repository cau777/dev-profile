import { Anchor } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

export const Contacts = () => (
  <>
    <Anchor href={"https://github.com/cau777"} lh={0} target={"_blank"}>
      <IconBrandGithub />
    </Anchor>
    <Anchor
      href={"https://www.linkedin.com/in/caua-rinaldi"}
      lh={0}
      target={"_blank"}
    >
      <IconBrandLinkedin />
    </Anchor>
    <Anchor href={"mailto:cauarinaldi451@gmail.com"} lh={0} target={"_blank"}>
      <IconMail />
    </Anchor>
  </>
);
