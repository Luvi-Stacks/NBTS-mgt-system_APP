import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS} from "../Theme";

import { GiHeartDrop } from "react-icons/gi";
import { GiWaterDrop } from "react-icons/gi";



export default function StatWidget() {
    return (
        <View style={styles.container}>

            <View style={styles.Topflex}>
                {/*title*/}
                <Text style={styles.title}>
                    avg{'\n'}volume
                </Text>

                {/*<View style={styles.Topflex__icon}>*/}
                {/*    <GiHeartDrop/>*/}
                {/*</View>*/}

            </View>

            <View style={styles.Bottomflex}>

                {/*Numeric Value*/}
                <Text style={styles.NumValue}>
                    04
                </Text>

                {/*Units*/}
                <Text style={styles.units}>
                    PINES/YEAR
                </Text>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 20,
        width: 144,
        height: 159,
        elevation: 15,
        flexDirection: "column",
        justifyContent: "space-around"


    },
    Topflex: {
        marginLeft: 20,
        marginTop:10
    },

    Topflex__icon:{



    },

    Bottomflex: {
        marginLeft: 20


    },

    title: {
        color: COLORS.Awakening,
        fontFamily: FONTS.Black,
        fontSize: 10,
        textTransform: "uppercase"
    },

    NumValue: {
        color: COLORS.RomanEmpireRed,
        fontFamily: FONTS.Black,
        fontSize: 55,

    },

    units: {
        color: COLORS.Awakening,
        fontFamily: FONTS.Black,
        fontSize: 11,
        textTransform: "uppercase"

    },
    shadow: {
        shadowColor: COLORS.UsedOil,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity:  0.19,
        shadowRadius: 5.62,
        elevation: 6,
        marginVertical:5
    }
});
