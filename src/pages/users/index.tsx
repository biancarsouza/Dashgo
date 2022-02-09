import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Th, Thead, Tr, Tbody, Td, Text } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../Pagination";

export default function UserList() {
    return (

        <Box>

            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">

                <Sidebar />
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">

                    <Flex mb="8" justify="space-between" align="center">

                        <Heading size="lg" fontWeight="normal">Usuários</Heading>
                        <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20" />}>Criar novo</Button>

                    </Flex>

                    <Table colorScheme="whiteAlpha">

                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" width="8">
                                    <Checkbox colorScheme="pink"></Checkbox>
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>

                        <Tbody>

                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink"></Checkbox>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Bianca Ribeiro</Text>
                                        <Text fontSize="sm" color="gray.300">biancaridesouza@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>09 de fevereiro, 2022</Td>
                                <Td>
                                    <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>Editar</Button>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink"></Checkbox>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Monkey D. Luffy</Text>
                                        <Text fontSize="sm" color="gray.300">reidospiratas@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>10 de fevereiro, 2022</Td>
                                <Td>
                                    <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>Editar</Button>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink"></Checkbox>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Ronronoa Zoro</Text>
                                        <Text fontSize="sm" color="gray.300">caçadordepiratas@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>11 de fevereiro, 2022</Td>
                                <Td>
                                    <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>Editar</Button>
                                </Td>
                            </Tr>

                        </Tbody>

                    </Table>

                    <Pagination />

                </Box>

            </Flex>

        </Box>

    );
}