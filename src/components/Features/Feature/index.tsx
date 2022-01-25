import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

interface IFeatureProps {
  icon: string;
  text: string;
}

const Feature = ({ icon, text }: IFeatureProps) => {
  const isMobile = useBreakpointValue({ base: false, sm: true });
  return (
    <Flex direction={['row', 'column']} align="center" justify="center">
      <Flex>
        {isMobile ? (
          <Image
            src={`/icons/${icon}.svg`}
            w="85px"
            h="85px"
            mb="6"
            alt={text}
          />
        ) : (
          <Text color="yellow.400" fontSize="4xl" mr="2">
            •
          </Text>
        )}
      </Flex>

      <Text fontWeight="600" color="gray.700" fontSize={['md', 'xl', '2xl']}>
        {text}
      </Text>
    </Flex>
  );
};

export { Feature };
