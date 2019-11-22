import React from 'react';
import { Input, Button } from 'react-native-elements';
import styled from 'styled-components/native';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { ContainerWithHeader } from '../../../components/container-with-header';
import ModalDropdown from 'react-native-modal-dropdown';

const MONTHS = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
];

const YEARS = ['19', '20', '21', '22', '23', '24', '25', '26'];

const PaymentContainer = styled.View`
  flex-direction: column;
  flex: 1;
  width: 100%;
`;


const PaymentOptions = styled.View`
  background: #ffffff;
  opacity: 0.63;
  border-radius: 6px;
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const CreditCardCCV = styled.View`
  flex-direction: row;
  width: 62%;
`;



const Package = styled.Text`
  font-size: 20px;
  font-weight: 400;
  color: grey;
`;

const styles = StyleSheet.create({
  dropdown: {
    alignSelf: 'flex-end',
    width: 55,
    marginBottom: 5,
    borderRadius: 6,
    backgroundColor: 'cornflowerblue',
  },
  dropdown_text: {
    marginVertical: 5,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  dropdown_dropdown: {
    width: 75,
    height: 200,
    borderColor: 'cornflowerblue',
    borderWidth: 2,
    borderRadius: 3,
  },
  security_code_text: {
    alignSelf: 'flex-end',
    fontSize: 30,
    color: 'grey',
    marginBottom: 5,
  },
});

export const Payments = () => {
  return (
    <ContainerWithHeader title="$ Secure Your Spot">
      <Package>Butch Body Special 75.00  60min - make this pretty and dynamic</Package>
      <PaymentContainer>
        <ScrollView>
          <PaymentOptions>
            <Input
              textContentType="name"
              label="Name"
              placeholder="Bruce Lee"
              inputContainerStyle={{ borderBottomWidth: 0 }}
            />
            <Input
              textContentType="emailAddress"
              label="Email"
              placeholder="BruceLee@gmail.com"
              inputContainerStyle={{ borderBottomWidth: 0 }}
            />
            <Input
              textContentType="phone"
              keyboardType="number-pad"
              maxLength={10}
              label="Phone"
              placeholder="(205) 555-5555"
              inputContainerStyle={{ borderBottomWidth: 0 }}
            />
          </PaymentOptions>
          <PaymentOptions>
            <Input
              class="input"
              label="Credit Card"
              keyboardType="number-pad"
              textContentType="creditCardNumber"
              maxLength={16}
              placeholder="Card Number"
              inputContainerStyle={{ borderBottomWidth: 0 }}
            />
            <CreditCardCCV>
              <Input
                class="input"
                label="Security Code"
                keyboardType="number-pad"
                maxLength={4}
                placeholder="CCV"
                inputContainerStyle={{ borderBottomWidth: 0 }}
              />
              <ModalDropdown
                style={styles.dropdown}
                textStyle={styles.dropdown_text}
                dropdownStyle={styles.dropdown_dropdown}
                defaultValue="MM"
                options={MONTHS}
              />
              <Text style={styles.security_code_text}> / </Text>
              <ModalDropdown
                style={styles.dropdown}
                textStyle={styles.dropdown_text}
                dropdownStyle={styles.dropdown_dropdown}
                defaultValue="YY"
                options={YEARS}
              />
            </CreditCardCCV>
          </PaymentOptions>

          <Button
            class="pay"
            title="$xx.xx Pay Now"
            style={{ marginTop: 10, paddingLeft: 25, paddingRight: 25 }}
            onPress={() => {
              console.log('You clicked the button');
            }}
          />
        </ScrollView>
      </PaymentContainer>
    </ContainerWithHeader>
  );
};