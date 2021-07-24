import React from 'react';
import {
TextInput,
StyleSheet,
Text,
View,
TouchableOpacity,
} from 'react-native';
import { useNavigation} from '@react-navigation/native'


const Calculate = () => {
    const navigation = useNavigation()
const [number, setNumber] = React.useState('')
const [time, setTime] = React.useState('')
const [intrest, setIntrest] = React.useState('');
const [tPayable, setTPayable] = React.useState("");
const [iPayable, setIPayable] = React.useState("");
const [emi, setEmi] = React.useState("")
const answer = () => {
// navigate to next page with number,time,intrest
}
const Func = () => {
setIntrest('')
setNumber('')
setTime('')
}
const isValidate = () => {
if (intrest !== "" && time !== "" && number !== "") {
return false;
} else {
return true;
}
}

return ( <View style={ {} }>
    <Text style={ styles.loan }> Loan EMI Calculator </Text>
    <View style={ { flexDirection: 'row' , justifyContent: 'space-around' , margin: 10 } }>
    < Text style={ { fontSize: 15, marginVertical: 20 } }> Loan Amount </Text>
    < TextInput style={ styles.input } onChangeText={ setNumber } value={ number } placeholder="Enter Amount" keyboardType="numeric" />
                        < Text style={ { fontSize: 15, marginVertical: 20 } }> INR </Text>
                                </View>
                                    <View style={ { flexDirection: 'row' , justifyContent: 'space-around' } }>
                                        <Text style={ { fontSize: 15, marginVertical: 20, marginLeft: 15 } }> Loan Tenure </Text>
                                                < TextInput style={ styles.input } onChangeText={ setTime } value={ time } placeholder="Enter months" keyboardType="numeric" />
                                                < Text style={ { fontSize: 15, marginVertical: 20 } }> INR </Text>
                                                        </View>
                                                            <View style={ { flexDirection: 'row' , justifyContent: 'space-around' } }>
                                                                <Text style={ { fontSize: 15, marginVertical: 20, marginLeft: 15 } }> Interst Rate </Text>
                                                                        < TextInput style={ styles.input } onChangeText={ setIntrest } value={ intrest } placeholder="NN.NN" keyboardType="numeric" />
                                                                        < Text style={ { fontSize: 15, marginVertical: 20 } }> % </Text>
                                                                                </View>
                                                                                
                                                                             <TouchableOpacity onPress={() => {var tempNum =number.toString()
                                                                                console.log(number) 
                                                                                navigation.navigate('Resetpage',{number:number.toString(),time:time.toString(),intrest:intrest.toString()})} }                                                                                    
                                                                                style = {
                                                                                    {
                                                                                    backgroundColor: 'blue',
                                                                                    width: '55%',
                                                                                    paddingVertical: 10,
                                                                                    borderRadius: 4,
                                                                                    marginLeft: '23%',
                                                                                    marginVertical: 40
                                                                                    }
                                                                                    } >
                                                                                    < Text style={ { textAlign: 'center' } }> 
                                                                                         CALCULATE 
                                                                                         </Text>
                                                                                            </TouchableOpacity>
                                                                                                {/* <View style={ { borderTopColor: 'red' , borderBottomColor: 'white' , borderWidth: 1 } }>
                                                                                                    <Text style={ { textAlign: 'center' , fontSize: 18, marginTop: 25, marginBottom: 40 } }> Loan EMI Calculator </Text>
                                                                                                            <View style={ { flexDirection: 'row' , justifyContent: 'space-between' , marginHorizontal: 15 } }>
                                                                                                                <View style={ { backgroundColor: 'yellow' , padding: 10, marginVertical: 10, width: '49%' , borderRadius: 5 } }>
                                                                                                                    < Text style={ { textAlign: 'center' } }> Loan EMI </Text>
                                                                                                                            <Text style={ { textAlign: 'center' } }> {emi} </Text>
                                                                                                                                    </View>
                                                                                                                                        <View style={ { backgroundColor: 'blue' , padding: 10, marginVertical: 10, width: '49%' , borderRadius: 5 } }>
                                                                                                                                            <Text style={ { textAlign: 'center' } }> Total Intrest Payable </Text>
                                                                                                                                                    <Text style={ { textAlign: 'center' } }> {tPayable} </Text>
                                                                                                                                                            </View>
                                                                                                                                                                </View>
                                                                                                                                                                    <View style={ { backgroundColor: 'pink' , padding: 10, marginHorizontal: 15, borderRadius: 5 } }>
                                                                                                                                                                        <Text style={ { textAlign: 'center' } }> Total Payment(Principal + Interest) </Text>
                                                                                                                                                                                <Text style={ { textAlign: 'center' } }> {iPayable} </Text>
                                                                                                                                                                                        </View>
                                                                                                                                                                                            </View> */}
                                                                                                                                                                                                </View>
                                                                                                                                                                                                    );
                                                                                                                                                                                                    };

                                                                                                                                                                                                    const styles = StyleSheet.create({
                                                                                                                                                                                                    loan: {
                                                                                                                                                                                                    fontSize: 18,
                                                                                                                                                                                                    textAlign: 'center',
                                                                                                                                                                                                    marginVertical: 25
                                                                                                                                                                                                    },
                                                                                                                                                                                                    sectionTitle: {
                                                                                                                                                                                                    fontSize: 24,
                                                                                                                                                                                                    fontWeight: '600',
                                                                                                                                                                                                    },
                                                                                                                                                                                                    input: {
                                                                                                                                                                                                    height: 40,
                                                                                                                                                                                                    margin: 12,
                                                                                                                                                                                                    borderWidth: 1,
                                                                                                                                                                                                    borderRadius: 5,
                                                                                                                                                                                                    width: '60%'
                                                                                                                                                                                                    },
                                                                                                                                                                                                    sectionDescription: {
                                                                                                                                                                                                    marginTop: 8,
                                                                                                                                                                                                    fontSize: 18,
                                                                                                                                                                                                    fontWeight: '400',
                                                                                                                                                                                                    },
                                                                                                                                                                                                    highlight: {
                                                                                                                                                                                                    fontWeight: '700',
                                                                                                                                                                                                    },
                                                                                                                                                                                                    });

                                                                                                                                                                                                    export default Calculate;