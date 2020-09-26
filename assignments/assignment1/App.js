import React, {useState} from 'react';
import { Button, Picker, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert} from 'react-native';

export default function App() {

  const[dropdownValue, setDropdownValue] = useState('SIS')
  const[heightValue, setHeightValue] = useState('');
  const[weightValue, setWeightValue] = useState('');
  const[bmiValue, setBmiValue] = useState(0);

  const calculateBMI = (height, weight) => {
    if(isNaN(height) || isNaN(weight))
    {
      console.log('Wrong input');
      alert('Incorrect input');
    }
    else
    {
      var bmiVal = (parseFloat(weight)*10000)/(parseFloat(height)*parseFloat(height));
      bmiVal = bmiVal.toFixed(2);
      setBmiValue(bmiVal)
    }
    setHeightValue('')
    setWeightValue('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>
      <Text>Measurement System</Text>
      <Picker
        selectedValue={dropdownValue}
        onValueChange={(itemValue, itemIndex) => setDropdownValue(itemValue)}
      >
        <Picker.Item label="SI [ Cms, Kgs ]" value="SI" />
        <Picker.Item label="Imperial [ Inches, Lbs ]" value="Imperial" />
      </Picker>
      <Text>Height</Text>
      <TextInput style={styles.inputBox}
	      onChangeText={text => setHeightValue(text)}
        clearTextOnFocus="true"
        value={heightValue}
      />
      <Text>Weight</Text>
      <TextInput style={styles.inputBox}
	      onChangeText={text => setWeightValue(text)}
        clearTextOnFocus="true"
        value={weightValue}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => calculateBMI(heightValue, weightValue)}
      >
      <Text>Calculate</Text>
      </TouchableOpacity>
      <Text>{bmiValue > 0 ? "Your BMI is " + bmiValue : " "}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  inputBox: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 20
  },
  button: {
    backgroundColor: 'gray',
    borderWidth: 1,
    padding: 5,
    marginTop: 20,
    marginBottom: 20
  }
});
