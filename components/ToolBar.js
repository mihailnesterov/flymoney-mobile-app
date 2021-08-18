import React, { useState } from 'react';
import { 
    StyleSheet, 
    Text, 
    Image,
    View
} from 'react-native';
import { Fontisto } from '@expo/vector-icons'; 
import theme from '../themes/default';
import TopMenu from './toolbar/TopMenu';

export default ToolBar = () => {

    const iconSize = theme.sizes.xlarge;
    const iconColor = theme.colors.darkblue;

    const [isTopMenuHidden, setTopMenuHidden] = useState(false);

    const topMenuButtonTransformedStyle =
            isTopMenuHidden ?
            styles.topMenuButtonTransform :
            {};

    return (
        <View style={styles.toolbar}>
            <View style={styles.topContainer}>
                <Text 
                    style={[
                        styles.topMenuButton, 
                        topMenuButtonTransformedStyle
                    ]}
                    onPress={() => setTopMenuHidden( !isTopMenuHidden )}
                >
                    <Fontisto name="nav-icon-a" size={18} color="white" />
                </Text>

                <TopMenu isHidden={isTopMenuHidden} />
                
                <Text style={styles.topText}>
                    Время работы сервиса с 09:00 - 21:00
                </Text>

            </View>
            
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={
                        require('../assets/flymoney/xlogo.png.pagespeed.ic.HXO2Kydk5b.png')
                    }
                />
                <View style={styles.icons}>
                    <Text style={styles.iconsItem}>
                        <Fontisto 
                            name="telegram" 
                            size={iconSize} 
                            color={iconColor} 
                        />
                    </Text>
                    <Text style={styles.iconsItem}>
                        <Fontisto 
                            name="whatsapp" 
                            size={iconSize} 
                            color={iconColor} 
                        />
                    </Text>
                    <Text style={styles.iconsItem}>
                        <Fontisto 
                            name="viber" 
                            size={iconSize} 
                            color={iconColor} 
                        />
                    </Text>
                </View>
            </View>
        </View>
    );
}

const { flex } = theme.display;
const { one, two } = theme.flex;
const { row } = theme.flexDirection;
const { white, layout, darkblue } = theme.colors;
const { none, xsmall, small, large, xlarge } = theme.sizes;
const { center } = theme.alignItems;
const { alignCenter, alignLeft, alignRight } = theme.textAlign;

const styles = StyleSheet.create({
    toolbar: {
        flex: none,
        zIndex: 1,
        elevation: 1,
        marginTop: ( xlarge * 1.6 ),
        backgroundColor: layout
    },
    topContainer: {
        flex: none,
        zIndex: 1,
        elevation: 1,
        display: flex,
        flexDirection: row,
        backgroundColor: darkblue,
        padding: small,
        textAlign: alignCenter
    },
    topMenuButton: {
        flex: 1,
        textAlign: alignLeft,
    },
    topMenuButtonTransform: {
        marginLeft: none,
        marginTop: -small,
        transform: [
            { skewX: "50deg" },
            { skewY: "-40deg" }
        ]
    },
    topText: {
        flex: 10,
        color: white,
        textAlign: alignRight
    },
    logoContainer: {
        flex: none,
        display: flex,
        flexDirection: row,
        alignItems: center,
        padding: xsmall
    },
    logo: {
        flex: two,
        margin: none,
        padding: none,
        height: 58,
    },
    icons: {
        flex: one,
        padding: xsmall,
        marginLeft: large,
        display: flex,
        flexDirection: row
    },
    iconsItem: {
        flex: 1,
        marginLeft: xsmall,
        marginRight: xsmall
    }
});