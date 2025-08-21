import { Container, Group, Image, Stack, Title, useMatches } from "@mantine/core"
import { theme } from "../theme.ts"

export const Hero: React.FC = () => {
    const wrap = useMatches({
        base: 'wrap',
        md: 'nowrap'
    } as const);

    return (
        <Group gap={70} mx='lg' wrap={wrap}>
            <Image src={"/full-body.jpg"} w={250} style={{
                borderImage: `linear-gradient(to bottom right, ${theme.colors.red[6]} 0%, ${theme.colors.orange[6]} 100%) 1`,
                borderWidth: 4,
                borderStyle: 'solid',
                padding: 5,
            }} />
            <Stack gap={5}>
                <Title order={1}>Hey! I'm Cauã Rinaldi</Title>
                {/*TODO link*/}
                <Title order={2} fw={600}>I'm a full-stack developer, AI enthusiast, former Aerial employee, and Math nerd</Title>
                {/*<Title order={3} fw={500} mt={100}>Welcome to my website!</Title>*/}
            </Stack>
        </Group>
    )
}