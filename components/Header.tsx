import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

interface HeaderProps {
  onMenuPress: () => void;
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ onMenuPress, title = "Empowering the Nation" }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.menuButton} onPress={onMenuPress}>
        <Text style={styles.hamburgerIcon}>☰</Text>
      </TouchableOpacity>
      
      <View style={styles.titleContainer}>
        <Image
          source={require('../assets/images/courses/logo.png')}
          style={styles.logo}
          resizeMode="cover"
        />
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      
      <View style={styles.rightSpace} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#92c3a5',
    paddingHorizontal: 15,
    paddingVertical: 15,
    paddingTop: 15, // Account for status bar
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  menuButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  hamburgerIcon: {
    fontSize: 25,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 50,
    height: 30,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  rightSpace: {
    width: 40, // Balance the menu button on the left
  },
});

export default Header;