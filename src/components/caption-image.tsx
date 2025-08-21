import { Box, Image, ImageProps, Modal, Stack, Text, Title } from "@mantine/core"
import React from "react"

export const CaptionImage: React.FC<{ caption: string } & ImageProps> = ({ caption, ...imageProps }) => {
    const [opened, setOpen] = React.useState(false)

    return (
        <>
            <Stack gap='sm'>
              <Image {...imageProps} onClick={() => setOpen(true)} style={{ cursor: 'zoom-in'}}/>
              <Text size='xs' c={'dimmed'}>{caption}</Text>
            </Stack>
            <Modal opened={opened} onClose={() => setOpen(false)} title={<Title order={2}>{caption}</Title>} size={'80vw'} >
                <Box w={'100%'} h={'80vh'}>
                <Image {...imageProps} h={'100%'} w={"100%"} fit='contain' />
                </Box>
            </Modal>
        </>
    )
}