import {
    Flex,
    Image,
    useColorMode,
} from '@chakra-ui/react';

import banner from '../../assets/banner.png'
import BarraDeContatos from './BarraDeContatos';
import BannerCard from './BannerCard';

export default function Banner() {

    const { colorMode } = useColorMode();

    return (

        <Flex
            id='banner'
            direction={['column', 'column', 'row', 'row']}
            justifyContent='space-between'
            align='center'
            bg={colorMode === 'dark' ?
                'linear-gradient(0deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.8) 62%, rgba(0,0,0,0.64) 100%)'
                :
                'gray.200'}
            minH={['calc(100vh - 66px)', 'calc(100vh - 66px)', 'calc(100vh - 77px)', 'calc(100vh - 77px)']}
            w='100%'

        >
            <BarraDeContatos />
            <BannerCard />
            <Image
                filter='brightness(133%)'
                alignSelf={['center', 'center', 'flex-end', 'flex-end']}
                maxH={['40vh', '50vh', '75vh', '75vh']}
                src={banner}
                marginRight={['0','0','10%']}
            />
        </Flex>


    );
}