import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Th, Thead, Tr, Tbody, Td, Text, useBreakpointValue, Spinner, Link } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { getUsers, useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/api";
import { useQuery } from "react-query";

export default function UserList({ users }) {
    const [page, setPage] = useState(1);

    const { data, isLoading, isFetching, error } = useUsers(page);

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    async function handlePrefetchUser(userId: string) {
        await queryClient.prefetchQuery(['user', userId], async () => {
            const response = await api.get(`user/${userId}`);
            return response.data;
        }, {
            staleTime: 1000 * 60 * 10,
        });
    }

    useEffect(() => {
        fetch( 'http://localhost:3000/api/users')
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);

    return (

        <Box>

            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">

                <Sidebar />
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">

                    <Flex mb="8" justify="space-between" align="center">

                        <Heading size="lg" fontWeight="normal">
                            Usuários

                            { !isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" /> }
                        </Heading>

                        <NextLink href="/users/create" passHref>
                            <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20" />}>Criar novo</Button>
                        </NextLink>

                    </Flex>

                    { isLoading ? (
                        <Flex justify="center">
                            <Spinner/>
                        </Flex>
                    ) : error ? (
                        <Flex justify="center">
                            <Text>Falha ao obter os dados dos usuários</Text>
                        </Flex>
                    ) : (
                        <>                
                            <Table colorScheme="whiteAlpha">

                                <Thead>
                                    <Tr>
                                        <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                            <Checkbox colorScheme="pink"></Checkbox>
                                        </Th>
                                        <Th>Usuário</Th>
                                        { isWideVersion && <Th>Data de cadastro</Th> }
                                    </Tr>
                                </Thead>

                                <Tbody>

                                    {data.users.map(user => {
                                        return (
                                            <Tr key={user.id}>
                                                <Td px={["4", "4", "6"]}>
                                                    <Checkbox colorScheme="pink"></Checkbox>
                                                </Td>
                                                <Td>
                                                    <Box>
                                                        <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(user.id)}>
                                                            <Text fontWeight="bold">{user.name}</Text>
                                                        </Link>
                                                        <Text fontSize="sm" color="gray.300">{user.email}</Text>
                                                    </Box>
                                                </Td>
                                                { isWideVersion && <Td>{user.createdAt}</Td> }
                                            </Tr>
                                        )
                                    })}

                                </Tbody>

                            </Table>

                            <Pagination totalCountOfRegisters={data.totalCount} currentPage={page} onPageChange={setPage} />
                        </>
                    )}

                </Box>

            </Flex>

        </Box>

    );
}