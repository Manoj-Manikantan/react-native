import React, { useState } from 'react';
import { Picker, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  /* Declaration */
  const [dropdownValue, setDropdownValue] = useState('SI')
  const [heightValue, setHeightValue] = useState('');
  const [weightValue, setWeightValue] = useState('');
  const [bmiValue, setBmiValue] = useState(0);
  const [bmiResult, setBmiResult] = useState('');

  /* 1. Checking if value is number or not
     2. Calculating bmi values
     3. Calculating bmi category
  */
  const calculateBMI = (height, weight) => {
    if (isNaN(height) || isNaN(weight)) {
      alert('Incorrect input');
      clearValues()
    }
    else {
      var bmiVal = 0
      var bmiCategory = ''
      if (dropdownValue == "SI") {
        bmiVal = (parseFloat(weight) / (parseFloat(height) * parseFloat(height)) * 10000);
      } else {
        bmiVal = (parseFloat(weight) / parseFloat(height) / parseFloat(height)) * 703;
      }
      bmiVal = bmiVal.toFixed(2);
      if (bmiVal < 18.5) {
        bmiCategory = 'Underweight'
      } else if ((bmiVal >= 18.5) && (bmiVal < 25)) {
        bmiCategory = 'Normal Weight'
      } else if ((bmiVal >= 25) && (bmiVal < 30)) {
        bmiCategory = 'Overweight'
      } else if (bmiVal >= 30) {
        bmiCategory = 'Obese'
      }
      setBmiValue(bmiVal)
      setBmiResult(bmiCategory)
    }
  }

  /* Clearing values */
  const clearValues = () => {
    setHeightValue('')
    setWeightValue('')
    setBmiValue(0)
    setBmiResult('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator{"\n\n"}</Text>
      <Text style={styles.sideHeadings}>BMI Categories: </Text>
      <Text>
        Underweight = less than 18.5{"\n"}
        Normal weight = 18.5 – 24.9{"\n"}
        Overweight = 25 – 29.9{"\n"}
        Obesity = BMI of 30 or greater{"\n\n"}
      </Text>
      <Text style={styles.sideHeadings}>Measurement System</Text>
      <Picker
        style={styles.centreTextAlign}
        selectedValue={dropdownValue}
        onValueChange={(itemValue, itemIndex) => setDropdownValue(itemValue)}
      >
        <Picker.Item label="SI [ Cms, Kgs ]" value="SI" />
        <Picker.Item label="Imperial [ Inches, Lbs ]" value="Imperial" />
      </Picker>
      <Text style={styles.sideHeadings}>{"\n\n"}Height</Text>
      <TextInput style={styles.inputBox}
        placeholder={dropdownValue == "SI" ? " Cms" : " Inches"}
        onChangeText={text => setHeightValue(text)}
        clearTextOnFocus="true"
        value={heightValue}
      />
      <Text style={styles.sideHeadings}>Weight</Text>
      <TextInput style={styles.inputBox}
        placeholder={dropdownValue == "SI" ? " Kgs" : " Lbs"}
        onChangeText={text => setWeightValue(text)}
        clearTextOnFocus="true"
        value={weightValue}
      />
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={styles.buttonCalculate}
            onPress={() => calculateBMI(heightValue, weightValue)}
          >
            <Text style={styles.calculateText}>Calculate</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={styles.buttonClear}
            onPress={() => clearValues()}
          >
            <Text style={styles.centreTextAlign}>Clear</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.centreTextAlign}>{bmiValue > 0 ? " Results! \n " + "Your BMI : " + bmiValue + "\n Your BMI Category : " + bmiResult : " "}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  inputBox: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    height: 20
  },
  buttonCalculate: {
    backgroundColor: 'darkgreen',
    borderWidth: 1,
    padding: 5,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "flex-start",
    width: 100,
    marginRight: 10
  },
  calculateText: {
    color: 'white',
    textAlign: 'center'
  },
  buttonClear: {
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 5,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "flex-end",
    width: 100,
    marginLeft: 10
  },
  centreTextAlign: {
    textAlign: 'center'
  },
  sideHeadings: {
    fontWeight: 'bold'
  }
});
