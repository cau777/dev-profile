import React from "react"
import { Container, MantineSize, Title } from "@mantine/core"

export const SectionWrapper: React.FC<React.PropsWithChildren<{ title: React.ReactNode, size: MantineSize }>> = ({ title, children, size }) => (
    <Container size={size} component={"section"}>
        <Title ta="center" order={3}>{title}</Title>
        {children}
    </Container>
)