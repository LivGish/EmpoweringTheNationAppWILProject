import React from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  ScrollView, 
  Animated,
  Dimensions 
} from "react-native";
import { ScreenType } from "../App";

const { width } = Dimensions.get('window');

interface SidebarProps {
  currentScreen: ScreenType;
  setCurrentScreen: (screen: ScreenType) => void;
  isVisible: boolean;
  onClose: () => void;
  slideAnim: Animated.Value;
}

const Sidebar: React.FC<SidebarProps> = ({
  currentScreen,
  setCurrentScreen,
  isVisible,
  onClose,
  slideAnim
}) => {
  
  const handleNavigation = (screen: ScreenType) => {
    setCurrentScreen(screen);
    onClose(); // Close sidebar after navigation
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <TouchableOpacity 
        style={styles.overlay} 
        activeOpacity={1} 
        onPress={onClose}
      />
      
      {/* Sidebar */}
      <Animated.View 
        style={[
          styles.sidebar,
          {
            transform: [{ translateX: slideAnim }]
          }
        ]}
      >
        <View style={styles.sidebarHeader}>
          <Text style={styles.sidebarTitle}>Navigation Menu</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.sidebarContent}>
          <TouchableOpacity
            style={[
              styles.sidebarItem,
              currentScreen === ScreenType.Home && styles.sidebarItemActive
            ]}
            onPress={() => handleNavigation(ScreenType.Home)}
          >
            <Text style={[
              styles.sidebarItemText,
              currentScreen === ScreenType.Home && styles.sidebarItemTextActive
            ]}>
              🏠 Home
            </Text>
          </TouchableOpacity>

          <View style={styles.sectionDivider}>
            <Text style={styles.sectionTitle}>Courses</Text>
          </View>

          <TouchableOpacity
            style={[
              styles.sidebarItem,
              currentScreen === ScreenType.SixMonthCourse && styles.sidebarItemActive
            ]}
            onPress={() => handleNavigation(ScreenType.SixMonthCourse)}
          >
            <Text style={[
              styles.sidebarItemText,
              currentScreen === ScreenType.SixMonthCourse && styles.sidebarItemTextActive
            ]}>
              📚 6 Month Courses
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.sidebarItem,
              currentScreen === ScreenType.SixWeekCourse && styles.sidebarItemActive
            ]}
            onPress={() => handleNavigation(ScreenType.SixWeekCourse)}
          >
            <Text style={[
              styles.sidebarItemText,
              currentScreen === ScreenType.SixWeekCourse && styles.sidebarItemTextActive
            ]}>
              📖 6 Week Courses
            </Text>
          </TouchableOpacity>

          <View style={styles.sectionDivider}>
            <Text style={styles.sectionTitle}>Services</Text>
          </View>

          <TouchableOpacity
            style={[
              styles.sidebarItem,
              currentScreen === ScreenType.FeesCalculator && styles.sidebarItemActive
            ]}
            onPress={() => handleNavigation(ScreenType.FeesCalculator)}
          >
            <Text style={[
              styles.sidebarItemText,
              currentScreen === ScreenType.FeesCalculator && styles.sidebarItemTextActive
            ]}>
              💳 Fee Calculator
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.sidebarItem,
              currentScreen === ScreenType.ContactUs && styles.sidebarItemActive
            ]}
            onPress={() => handleNavigation(ScreenType.ContactUs)}
          >
            <Text style={[
              styles.sidebarItemText,
              currentScreen === ScreenType.ContactUs && styles.sidebarItemTextActive
            ]}>
              📞 Contact Us
            </Text>
          </TouchableOpacity>


        </ScrollView>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width * 0.4, // 40% of screen width
    height: '100%',
    backgroundColor: '#ffffff',
    zIndex: 1000,
    elevation: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  sidebarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#92c3a5',
    paddingTop: 50, // Account for status bar
  },
  sidebarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  closeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sidebarContent: {
    flex: 1,
    paddingTop: 10,
  },
  sidebarItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sidebarItemActive: {
    backgroundColor: '#e8f5e8',
    borderLeftWidth: 4,
    borderLeftColor: '#92c3a5',
  },
  sidebarItemText: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '500',
  },
  sidebarItemTextActive: {
    color: '#2E7D32',
    fontWeight: 'bold',
  },
  sectionDivider: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666666',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

export default Sidebar;