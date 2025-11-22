import { Flex,Text, Icon } from '@chakra-ui/react'
import { GoArrowUpRight } from 'react-icons/go'

interface Props {
  title: string,
  dates: string,
  location: string,
  company: string
  link: string
}

export default function ListItem(props: Props) {
  return (
    <Flex direction="row" gap="2" align="center" paddingBottom="5">
      <Text paddingRight="20" textStyle="sm" w="1/3">{props.dates}</Text>
      <Flex justifyContent="flex-start" w="2/3">
        <Text textStyle="lg">{props.title}</Text>
        <Icon paddingLeft="2">
          <a href={props.link}><GoArrowUpRight /></a>
        </Icon>
      </Flex>
    </Flex>
  )
}
