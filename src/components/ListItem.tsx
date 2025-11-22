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
    <Flex direction="row" gap="2" align="center" justify="space-between" paddingBottom="5">
      <Text paddingRight="20" textStyle="sm">{props.dates}</Text>
      <Flex justifyContent="flex-start">
        <Text textStyle="md">{props.title}</Text>
        <Icon paddingLeft="2">
          <a href={props.link}><GoArrowUpRight /></a>
        </Icon>
      </Flex>
    </Flex>
  )
}
