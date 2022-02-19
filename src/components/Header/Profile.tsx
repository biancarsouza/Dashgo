import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (

        <Flex align="center">

            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Bianca Ribeiro</Text>
                    <Text color="gray.300" fontSize="small">biancaridesouza@gmail.com</Text>
                </Box>
            ) }

            <Avatar size="md" name="Bianca Ribeiro" src="https://github.com/biancarsouza.png" />

        </Flex>

    );
}