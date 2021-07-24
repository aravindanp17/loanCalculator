
import React ,{useEffect}from 'react';
import {
SafeAreaView,
ScrollView,
StatusBar,
TextInput,
StyleSheet,
Text,
useColorScheme,
View,
TouchableOpacity,
} from 'react-native';



import { NavigationContainer } from '@react-navigation/native'
import { useNavigation} from '@react-navigation/native'


const Resetpage = (props) => {
    const navigation = useNavigation()

    const [number1, setNumber1] = React.useState(props.route.params.number)
    const [time1, setTime1] = React.useState(props.route.params.time)
    const [intrest1, setIntrest1] = React.useState(props.route.params.intrest);
    const [tPayable, setTPayable] = React.useState("");
const [iPayable, setIPayable] = React.useState("");
const [emi, setEmi] = React.useState("")
useEffect(() => {
    var originIntrest = (intrest1 / 100) / 12
    var one_plus_r = Math.pow((1 + originIntrest), time1)
var denominator = one_plus_r - 1
var tenureIntrestCalc = one_plus_r / denominator
var originalFormula = number1 * originIntrest * tenureIntrestCalc;
var totalPayable = Math.round(originalFormula * time1);
setEmi((number1 * originIntrest * tenureIntrestCalc).toFixed(2));
setTPayable(Math.round(originalFormula * time1));
setIPayable(totalPayable - number1);
  },[]);
  const Func = () => {
    setIntrest1('')
    setNumber1('')
    setTime1('')
    navigation.navigate('Calculate')
    }
    // const isValidate = () => {
    // if (intrest1 !== "" && time1 !== "" && number1 !== "") {
    // return true;
    // } else {
    // return false;
    // }
    // }
return ( <View>
  <View style={ {} }>
    <Text style={ styles.loan }> Loan EMI Calculator </Text>
            <View style={ { flexDirection: 'row' , justifyContent: 'space-around' , margin: 10 } }>
                <Text style={ { fontSize: 15, marginVertical: 20 } }> Loan Amount </Text>
                        < TextInput style={ styles.input } value={ number1 } placeholder="Enter Amount" keyboardType="numeric" />
                        < Text style={ { fontSize: 15, marginVertical: 20 } }> INR </Text>
                                </ View>
                                    <View style={ { flexDirection: 'row' , justifyContent: 'space-around' } }>
                                        <Text style={ { fontSize: 15, marginVertical: 20, marginLeft: 15 } }> Loan Tenure </Text>
                                                < TextInput style={ styles.input }  value={ time1 } placeholder="Enter months " keyboardType="numeric" />
                                                < Text style={ { fontSize: 15, marginVertical: 20 } }> Months </Text>
                                                        </View>
                                                            <View style={ { flexDirection: 'row' , justifyContent: 'space-around' } }>
                                                                < Text style={ { fontSize: 15, marginVertical: 20, marginLeft: 15 } }> Interst Rate </Text>
                                                                        < TextInput style={ styles.input } value={ intrest1
                                                                         } placeholder="NN.NN" keyboardType="numeric" />
                                                                        < Text style={ { fontSize: 15, marginVertical: 20 } }> % </Text>
                                                                                </View>
                                                                                <TouchableOpacity onPress={ ()=> Func()
                                                                                    }
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
                                                                                        RESET
                                                                                         </Text>
                                                                                            </TouchableOpacity>
                                                                                                <View style={ { borderTopColor: 'black' , borderBottomColor: 'white' , borderWidth: 1 } }>
                                                                                                    <Text style={ { textAlign: 'center' , fontSize: 18, marginTop: 25, marginBottom: 40 } }> Loan EMI Calculator </Text>
                                                                                                            < View style={ { flexDirection: 'row' , justifyContent: 'space-between' , marginHorizontal: 15 } }>
                                                                                                                < View style={ { backgroundColor: 'yellow' , padding: 10, marginVertical: 10, width: '49%' , borderRadius: 5 } }>
                                                                                                                    < Text style={ { textAlign: 'center' } }> Loan EMI </Text>
                                                                                                                            < Text style={ { textAlign: 'center' } }>$ {emi}</Text>
                                                                                                                                    </View>
                                                                                                                                        <View style={ { backgroundColor: 'blue' , padding: 10, marginVertical: 10, width: '49%' , borderRadius: 5 } }>
                                                                                                                                            <Text style={ { textAlign: 'center' } }> Total Intrest Payable </Text>
                                                                                                                                                    <Text style={ { textAlign: 'center' } }> $ {iPayable} </Text>
                                                                                                                                                            </View>
                                                                                                                                                                </View>
                                                                                                                                                                    <View style={ { backgroundColor: 'pink' , padding: 10, marginHorizontal: 15, borderRadius: 5 } }>
                                                                                                                                                                        < Text style={ { textAlign: 'center' } }> Total Payment(Principal + Interest) </Text>
                                                                                                                                                                                < Text style={ { textAlign: 'center' } }> $ {tPayable} </Text>
                                                                                                                                                                                        </ View>
                                                                                                                                                                                            </View>
                                                                                                                                                                                                </ View>
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

                                                                                                                                                                                                    export default Resetpage;