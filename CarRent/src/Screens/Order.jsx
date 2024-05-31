import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const OrderSuccessful = () => {
  const navigation = useNavigation();

  const handleViewOrder = () => {
    // Navigate to the order details screen
    navigation.navigate('OrderDetails');
  };

  const handleViewEReceipt = () => {
    // Navigate to the e-receipt screen
    navigation.navigate('EReceipt');
  };

  const { width, height } = Dimensions.get('screen');

  return (
    <View style={styles.overlay}>
      <View style={[styles.container, { width: width * 0.8, height: height * 0.4 }]}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="cart" size={60} color="black" />
        </View>
        <Text style={styles.title}>Order Successful!</Text>
        <Text style={styles.message}>You have successfully made order</Text>
        {/* <TouchableOpacity style={styles.buttonPrimary} onPress={handleViewOrder}>
          <Text style={styles.buttonTextPrimary}>View Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecondary} onPress={handleViewEReceipt}>
          <Text style={styles.buttonTextSecondary}>View E-Receipt</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  iconContainer: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonPrimary: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonTextPrimary: {
    color: 'white',
    fontSize: 16,
  },
  buttonSecondary: {
    backgroundColor: '#f1f1f1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonTextSecondary: {
    color: 'black',
    fontSize: 16,
  },
});

export default OrderSuccessful;
