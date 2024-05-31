import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { ChevronLeftIcon, ArrowUpTrayIcon, HeartIcon } from 'react-native-heroicons/outline';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TextInput, Button } from 'react-native-paper';

const PayCar = () => {
  const navigation = useNavigation();
  const route = useRoute();
  
  const { name, carId, image, address, paymentMethod } = route.params;

  const [shippingAddress, setShippingAddress] = useState("address");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(paymentMethod || 'wallet');


  const [order] = useState({
    carModel: name,
    price: 170000,
    tax: 1000
  });

  const handleShippingTypePress = () => {
    // Logic to choose shipping type
  };

  const handleContinueToPaymentPress = () => {
    // Logic to continue to payment
    navigation.navigate('PaymentMethods');
    
  };

  const handleCheckout = () => {
    // Handle the checkout logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Payment Method:', selectedPaymentMethod);
  };

  const { height } = Dimensions.get('screen');

  return (
    <View className="relative" style={{ height: height }}>
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
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Checkout</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shipping Address</Text>
          <View style={styles.addressContainer}>
            <View style={styles.icon}>
              <Text>📍</Text>
            </View>
            <TextInput
              value={shippingAddress}
              onChangeText={setShippingAddress}
              style={styles.addressInput}
              right={<TextInput.Icon name="pencil" />}
            />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order</Text>
          <View style={styles.orderContainer}>
            <Image
              source={{ uri: image }} // Replace with actual image URL
              style={styles.carImage}
            />
            <View>
              <Text style={styles.carModel}>{order.carModel}</Text>
              <Text style={styles.carColor}>{order.color}</Text>
              <Text style={styles.carPrice}>${order.price.toLocaleString()}</Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Choose Shipping</Text>
          <TouchableOpacity style={styles.shippingTypeButton} onPress={handleShippingTypePress}>
            <Text style={styles.shippingTypeText}>Choose Shipping Type</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>Amount: ${order.price.toLocaleString()}</Text>
          <Text style={styles.summaryText}>Tax: ${order.tax.toLocaleString()}</Text>
        </View>
      
        <Button mode="contained" onPress={handleContinueToPaymentPress} style={styles.continueButton}>
          Continue to Payment
        </Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#495057',
    marginBottom: 10,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e9ecef',
    borderRadius: 5,
    padding: 10,
  },
  icon: {
    marginRight: 10,
  },
  addressInput: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  orderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  carImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
  },
  carModel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#343a40',
  },
  carColor: {
    fontSize: 16,
    color: '#6c757d',
    marginVertical: 5,
  },
  carPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
  },
  shippingTypeButton: {
    padding: 15,
    backgroundColor: '#e9ecef',
    borderRadius: 5,
    alignItems: 'center',
  },
  shippingTypeText: {
    fontSize: 16,
    color: '#343a40',
  },
  summaryContainer: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  summaryText: {
    fontSize: 16,
    color: '#495057',
    marginBottom: 5,
  },
  continueButton: {
    paddingVertical: 10,
    backgroundColor: '#007bff',
  },

});

export default PayCar;
