import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';
import {COLORS, FONTS} from "../../Theme";
import TxtInput_Instance from "../../Components/TxtInput_Instance";
import ReactSimpleButton from "../../Components/ReactSimpleButton";
import {RadioButton} from 'react-native-paper';
import {useContext, useState} from "react";
import {useNavigation} from "@react-navigation/native";


//this firestore conneting librarries
import { db } from '../../Components/config';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { TextInput } from 'react-native-web';
// import { useState } from 'react/cjs/react.development';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, getDoc, getDocs, where, query } from "firebase/firestore";
import { NICContext } from '../helper/Context';

export default function FirstScreen() {
    const navigation = useNavigation();
    const [value, setValue] = useState('first');

    //test
     const {NIC,setNIC} = useContext(NICContext);


    const [firstName, setfirstName] = useState('');
    const [userName, setuserName] = useState('');
    const [Age, setAge] = useState('');
    const [mobileNo, setmobileNo] = useState('');
     
    
    

    //test
    function create2(){
        setDoc(doc(db, "Donor", (NIC)),{
      
            NIC: NIC,
            firstName: firstName,
            userName: userName,
            Age: Age,
            mobileNo: mobileNo,
            
          }).then(() => {
            console.log('data submitted');
            
          }).catch((error) => {
            console.log('something error');
          });
    }; 

    return (
        <View style={styles.container}>

            <View style={styles.HeadingDiv}>
                <Text style={styles.HeadingDiv__MainTXT}> Register </Text>
                <Text style={styles.HeadingDiv__SubTXT}> Personal Information </Text>
            </View>


            <View style={styles.formDiv}>
                <View>
                    {/*label*/}
                    <Text style={styles.textInput__labelTXT}> NIC Number </Text>
                    {/*textbox*/}

                    <TextInput style={styles.textInput__dataHolder} value={NIC} onChangeText={(NIC) => {setNIC(NIC)}} placeholder= "NIC"/>
                </View>

                <View>
                    {/*label*/}
                    <Text style={styles.textInput__labelTXT} > Full Name </Text>
                    {/*textbox*/}
                    <TextInput style={styles.textInput__dataHolder} value={firstName} onChangeText={(firstName) => {setfirstName(firstName)}} placeholder= "firstName" />
                </View>


                <View>
                    {/*label*/}
                    <Text style={styles.textInput__labelTXT}> User Name </Text>
                    {/*textbox*/}
                    <TextInput style={styles.textInput__dataHolder} value={userName} onChangeText={(userName) => {setuserName(userName)}} placeholder= "userName"/>

                </View>


                <View>
                    {/*label*/}
                    <Text style={styles.textInput__labelTXT}> Age </Text>
                    {/*textbox*/}
                    <TextInput style={styles.textInput__dataHolder} value={Age} onChangeText={(Age) => {setAge(Age)}} placeholder= "Age"/>

                </View>


                <View>
                    {/*label*/}
                    <Text style={styles.textInput__labelTXT}> Mobile Number </Text>
                    {/*textbox*/}
                    <TextInput style={styles.textInput__dataHolder} value={mobileNo} onChangeText={(mobileNo) => {setmobileNo(mobileNo)}} placeholder= "mobileNo"/>
                </View>


                {/*Gender*/}
                <View style={{width: 320}}>
                    <Text style={styles.textInput__labelTXT}> Gender </Text>
                    {/*Radio Button*/}
                    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                        <View style={
                            {
                                display: 'flex',
                                flexDirection: 'row',
                                marginHorizontal: 30,
                                paddingTop: 5
                            }
                        }>
                            <RadioButton.Item label="Male" value="male"/>
                            <RadioButton.Item label="Female" value="female"/>
                        </View>
                    </RadioButton.Group>
                </View>

            </View>


            <View style={styles.btnDiv}>
                {/*Button*/}
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        navigation.navigate("LocationLog")
                        create2()
                    }

                }

                >
                    <Text
                        style={styles.btn__text}
                    >
                        Next
                    </Text>
                </TouchableOpacity>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: COLORS.LadyAnne,
    },

    HeadingDiv: {
        marginTop:100,
        marginBottom:30,
        marginLeft:30
    },

    formDiv: {
        alignItems: "center",
        justifyContent: "center"

    },

    HeadingDiv__MainTXT: {
        color: COLORS.UsedOil,
        fontFamily: FONTS.Bold,
        fontSize: 30,
        alignSelf: 'flex-start',

    },

    HeadingDiv__SubTXT:{
        color: COLORS.Awakening,
        fontFamily: FONTS.Regular,
        fontSize: 16,

    },

    textInput__labelTXT: {
        color: COLORS.UsedOil,
        fontFamily: FONTS.Bold,
        fontSize: 16,
        alignSelf: 'flex-start',
        paddingLeft: 10
    },

    textInput__dataHolder: {
        backgroundColor: COLORS.SweetBlush,
        width: 320,
        height: 50,
        borderRadius: 10,
        margin: 10
    },

    btnDiv:{
        display: "flex",
        flexDirection: "row",
        justifyContent:"center",
        marginBottom:20

    },

    btn: {
        backgroundColor: COLORS.RomanEmpireRed,
        borderRadius: 20,
        width: 140,
        height: 46,
        alignItems: "center",
        justifyContent: "center",
        margin: 20
    },
    btn__text: {
        color: '#fff',
        fontFamily: FONTS.Bold,
        fontSize: 18
    }

    


});

