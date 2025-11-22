import './App.css'
import { Box, Flex, Text, Image, Heading} from '@chakra-ui/react'
import pic from './assets/pic.jpeg'

function App() {

  return (
    <>
      <Box id="header">
        <Flex gap='4' direction="row" align="center">
          <Image
            src={pic}
            boxSize="150px"
            borderRadius="full"
            fit="fill"
            alt="Melissa Crockett"
          />
          <Flex gap="2" direction="column">
            <Heading size="3xl" textAlign="left">Melissa Crockett</Heading>
            <Heading textAlign="left">Solutions Engineer</Heading>
          </Flex>
        </Flex>
      </Box>
      <Box id="body">
        <Box>
          <Text>
            Engineering professional seeking a challenging Solutions Engineering role where I 
            can apply my technical knowledge, strong communication, and creative problem-solving skills. 
            Drawing on a proven background in non-profit leadership, strategic operations, and back-end software engineering,
             I bring a unique blend of technical aptitude, emotional intelligence, and meticulous attention to detail. 
             I approach every challenge with integrity, collaboration, and a commitment to continuous improvement.
          </Text>
        </Box>
        <Flex>
          <Heading size="2xl">
            Experience
          </Heading>
        </Flex>
      </Box>
    </>
  )
}

export default App
