import Link from 'next/link';
import Image from 'next/image';
import { Text, Box, Flex, Button} from '@chakra-ui/react'

const Banner = ({purepose, imageUrl, title1, title2, desc1, desc2, linkName, buttonText }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={imageUrl} width="500" height="350" alt="banner" />
      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">{purepose}</Text>
        <Text fontSize="3xl" fontWeight="bold">{title1} <br />{title2}</Text>
        <Text color="gray.500" fontSize="sm" fontWeight="medium">{purepose}</Text>
        <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1} <br />{desc2}</Text>
        <Button fontSize="xl" bg="blue.300" color="white">
          <Link href={linkName}>
            {buttonText}
          </Link>
        </Button>
      </Box>

  </Flex>
)

export default function Home() {
  return (
    <div >
      <Banner 
        purepose="RENT A HOME"
        title1="Renatal Homes for"
        title2="Everyone"
        desc1="Explore apartments, villas and home"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="/assets/images/house.jpg"     
      />
      <Banner 
        purepose="BUY A HOME"
        title1="Find, Buy and Own Your"
        title2="Dream Homes"
        desc1="Explore apartments, villas and home"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="/assets/images/house.jpg" 
         />
    </div>
  )
}
