import React from "react";
import { SectionWrapper } from "../components/section-wrapper.tsx";
import { Group, Image, useMatches, Text, Stack, Anchor } from "@mantine/core";
import { IconTrophy } from "@tabler/icons-react";
import { imageBorderGradientStyle } from "../style-utils.ts";

export const AwardsSection: React.FC = () => {
  const wrap = useMatches({
    base: "wrap",
    md: "nowrap",
  } as const);

  return (
    <SectionWrapper title={"Math Award"} size="md" Icon={IconTrophy}>
      <Group wrap={wrap} gap="xl">
        <Image src={"/medal.jpg"} w={400} style={imageBorderGradientStyle} />
        <Stack>
          <Text>
            I won a silver medal in the{" "}
            <Anchor
              href={
                "https://pt-m-wikipedia-org.translate.goog/wiki/Olimp%C3%ADada_Brasileira_de_Matem%C3%A1tica_das_Escolas_P%C3%BAblicas?_x_tr_sl=pt&_x_tr_tl=en&_x_tr_hl=pt-BR&_x_tr_pto=wapp"
              }
              target="_blank"
            >
              Brazilian National Math Olympiad (OBMEP)
            </Anchor>
            . OBMEP is considered the largest science Olympiad in Brazil and in
            the world, with the participation of 18.5 million students and 5,564
            cities. I got a silver medal meaning being in the top 500 of the
            whole country (there are a lot of ties).
          </Text>
          <Text>
            The tests are very focused on logic and problem solving, and require
            providing a walkthrough of the thought process and techniques used.
          </Text>
        </Stack>
      </Group>
    </SectionWrapper>
  );
};
