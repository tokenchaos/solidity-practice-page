import { ChakraProvider, Flex, Spacer, Button, Center} from '@chakra-ui/react'

export default function Home() {
  async function Connect() {
    if (!window.ethereum) {
      alert("No wallet")
      return
    }

    const account = await ethereum.request({method:"eth_requestAccounts"})
    console.log(`Connected to account: ${account}`)
  }
  return <ChakraProvider>
        <Center bg='teal' h='60px' color='white'>
          <Flex minWidth='max-content' alignItems='flex-start' justify='space-between' gap='8'>
                <Box p='2'>
                  <Heading size='md'>Solidity Practice Code</Heading>
                </Box>
                <Spacer />
                <ButtonGroup gap='2'>
                  <Button onClick={Connect} colorScheme='teal'>Connect</Button>
                </ButtonGroup>
          </Flex>
        </Center>
    </ChakraProvider>
}
