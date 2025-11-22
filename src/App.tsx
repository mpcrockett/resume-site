import './App.css'
import { Box, Flex, Text, Image, Heading, Icon, AbsoluteCenter } from '@chakra-ui/react'
import { GoArrowUpRight, GoRead  } from 'react-icons/go'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import pic from './assets/pic.jpeg'

function App() {

  return (
    <>
      <Box id="content">
        <Box id="header" paddingBottom="4">
          <Flex gap='4' direction="row" align="center">
            <Image
              src={pic}
              boxSize="135px"
              borderRadius="full"
              fit="fill"
              alt="Melissa Crockett"
              p="4"
            />
            <Flex direction="column">
              <Heading size="3xl" textAlign="left">Melissa Crockett</Heading>
              <Heading size="lg" textAlign="left">Solutions Engineer</Heading>
            </Flex>
          </Flex>
        </Box>
        <Box id="body" p="4">
          <Box id="intro" paddingBottom="8">
            <Text>
              Engineering professional seeking a challenging Solutions Engineering role where I
              can apply my technical knowledge, strong communication, and creative problem-solving skills.
              Drawing on a proven background in non-profit leadership, strategic operations, and back-end software engineering,
              I bring a unique blend of technical aptitude, emotional intelligence, and meticulous attention to detail.
              I approach every challenge with integrity, collaboration, and a commitment to continuous improvement.
            </Text>
          </Box>
          <Flex id="work" direction="column">
            <Heading size="2xl" paddingBottom="8">
              Work
            </Heading>
            <Flex id="work">
              <Flex direction="row" gap="2" align="center"> 
                <Text paddingRight="20" textStyle="sm">October 2024 - Present</Text>
                <Flex>
                  <Text textStyle="md">Customer Representative at Finish Line</Text>
                  <Icon paddingLeft="2">
                    <a href="https://www.finishlinept.com"><GoArrowUpRight /></a>
                  </Icon>
                </Flex>
              </Flex>
            </Flex>

          </Flex>
        </Box>
        <Box id="footer">
            <Flex id='contact' gap="4" justify="center">
              <Icon>
                <a href="mailto:melissa@mcrockett.dev"><GoRead size="1.5em" /></a>
              </Icon>
              <Icon>
                <a href="https://www.linkedin.com/in/melissapcrockett/"><AiFillLinkedin size="1.5em"/></a>
              </Icon>
              <Icon>
                <a href="https://github.com/mpcrockett"><AiFillGithub size="1.5em"/></a>
              </Icon>
            </Flex>
        </Box>
      </Box>
    </>
  )
}

export default App
