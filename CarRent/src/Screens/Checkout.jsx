import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { RadioButton, Button } from 'react-native-paper';
import { ChevronLeftIcon, ArrowUpTrayIcon, HeartIcon } from 'react-native-heroicons/outline';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Checkout = () => {
    const navigation = useNavigation();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('wallet');

  const paymentMethods = [
    { key: 'wallet', label: 'My Wallet', details: '$299,677', icon: 'wallet' },
    { key: 'googlepay', label: 'Google Pay', details: '', icon: 'google' },
    { key: 'applepay', label: 'Apple Pay', details: '', icon: 'apple' },
    { key: 'mastercard', label: '**** **** **** 4679', details: '', icon: 'credit-card' },
  ];

  const handleContinuePress = () => {
    // Logic to continue to the next step
    navigation.navigate('OrderSuccessful');
  };

  return (
    <View style={styles.container}>
        <View
        className="flex flex-row justify-between items-center px-6 py-4 bg-white"
        style={{ paddingTop: StatusBar.currentHeight }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreenBody')}
          className="h-12 w-12 rounded-xl border border-gray-400 flex flex-row items-center justify-center mt-8"
        >
          <ChevronLeftIcon size={24} color="black" />
        </TouchableOpacity>
        <View className="flex-row items-center justify-center space-x-5 mt-8">
          {[HeartIcon, ArrowUpTrayIcon].map((Icon, i) => (
            <View
              key={i}
              className={`${
                i === 0 ? `bg-[#007bff]` : ''
              } h-12 w-12 rounded-xl border border-gray-400 flex-row items-center justify-center`}
            >
              <Icon size={24} color={i === 0 ? 'white' : 'black'} />
            </View>
          ))}
        </View>
      </View>
      <Text style={styles.header}>Payment Methods</Text>
      <Text style={styles.subHeader}>Select the payment method you want to use.</Text>
      <RadioButton.Group
        onValueChange={value => setSelectedPaymentMethod(value)}
        value={selectedPaymentMethod}
      >
        {paymentMethods.map(method => (
          <TouchableOpacity
            key={method.key}
            style={styles.paymentMethodContainer}
            onPress={() => setSelectedPaymentMethod(method.key)}
          >
            <View style={styles.paymentMethod}>
              <Icon name={method.icon} size={24} style={styles.icon} />
              <View style={styles.paymentMethodDetails}>
                <Text style={styles.paymentMethodLabel}>{method.label}</Text>
                {method.details ? <Text style={styles.paymentMethodDetailsText}>{method.details}</Text> : null}
              </View>
              <RadioButton value={method.key} />
            </View>
          </TouchableOpacity>
        ))}
      </RadioButton.Group>
      <Button mode="contained" onPress={handleContinuePress} style={styles.continueButton}>
        Continue
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 20,
  },
  paymentMethodContainer: {
    marginBottom: 10,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  icon: {
    marginRight: 10,
  },
  paymentMethodDetails: {
    flex: 1,
  },
  paymentMethodLabel: {
    fontSize: 16,
  },
  paymentMethodDetailsText: {
    color: '#666',
  },
  continueButton: {
    marginTop: 20,
    paddingVertical: 10,
  },
});

export default Checkout;
