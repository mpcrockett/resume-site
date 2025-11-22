import './App.css'
import { Box, Flex, Text, Image, Heading, Icon } from '@chakra-ui/react'
import {  GoRead  } from 'react-icons/go'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import data from './assets/data.json'
import pic from './assets/pic.jpeg'
import ListItem from './components/ListItem';

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
              Approachable engineer who loves working with people — combining
               technical skill with clear communication, empathy,
                and collaboration to help clients solve problems and move their work forward.
            </Text>
          </Box>
          <Box id="work">
            <Heading size="2xl" paddingBottom="8">
              Work
            </Heading>
            <Flex id="list" direction="column">
              {data.map((x, index) => {
                  return <ListItem key={index} title={x.title} dates={x.dates} company={x.company} link={x.link} location={x.location} />
                })
              }
            </Flex>
          </Box>
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
