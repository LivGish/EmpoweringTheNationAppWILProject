import React, { useState, useRef } from "react";
import { StyleSheet, SafeAreaView, View, Text, Animated, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomeScreen from "./screens/HomeScreen";
import SixMonthCourseScreen from "./screens/SixMonthCourseScreen";
import SixWeekCourseScreen from "./screens/SixWeekCourseScreen";  
import ContactUsScreen from "./screens/ContactUsScreen";
import FeesCalculator from "./screens/FeesCalculatorScreen";
import ChildMindingScreen from "./screens/ChildMindingScreen";
import CookingScreen from "./screens/CookingScreen";
import FirstAidScreen from "./screens/FirstAidScreen";
import GardeningMaintenanceScreen from "./screens/GardeningMaintenanceScreen";
import LandscapingScreen from "./screens/LandscapingScreen";
import LifeSkillsScreen from "./screens/LifeSkillsScreen";
import SewingScreen from "./screens/SewingScreen";

const { width } = Dimensions.get('window');

export enum ScreenType {
    Home = 'HOME',
    SixMonthCourse = '6-MONTH COURSE',
    SixWeekCourse = '6-WEEK COURSE',
    ContactUs = 'CONTACT US',
    FeesCalculator = 'FEES CALCULATOR',
    // Individual course screens (accessible via course page buttons, not sidebar)
    ChildMinding = 'CHILD MINDING',
    Cooking = 'COOKING',
    FirstAid = 'FIRST AID',
    GardenMaintenance = 'GARDEN MAINTENANCE',
    Landscaping = 'LANDSCAPING',
    LifeSkills = 'LIFE SKILLS',
    Sewing = 'SEWING',
}

export default function NavigationApp() {
    const [currentScreen, setCurrentScreen] = useState<ScreenType>(ScreenType.Home); 
    const [previousScreen, setPreviousScreen] = useState<ScreenType>(ScreenType.Home);
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const slideAnim = useRef(new Animated.Value(-width * 0.8)).current;

    const navigateToScreen = (newScreen: ScreenType) => {
        console.log('Navigating from', currentScreen, 'to', newScreen);
        setPreviousScreen(currentScreen);
        setCurrentScreen(newScreen);
    };

    const goBack = () => {
        console.log('Going back from', currentScreen, 'to', previousScreen);
        setCurrentScreen(previousScreen);
    };

    const toggleSidebar = () => {
      const toValue = sidebarVisible ? -width * 0.8 : 0;
      
      Animated.timing(slideAnim, {
        toValue,
        duration: 300,
        useNativeDriver: true,
      }).start();

      setSidebarVisible(!sidebarVisible);
    };

    const closeSidebar = () => {
      Animated.timing(slideAnim, {
        toValue: -width * 0.8,
        duration: 300,
        useNativeDriver: true,
      }).start();

      setSidebarVisible(false);
    };

    const MainScreen = () => {
        switch(currentScreen) {
          case ScreenType.Home:
            return <HomeScreen setCurrentScreen={navigateToScreen} previousScreen={previousScreen} goBack={goBack}/>;
          case ScreenType.SixMonthCourse:
            return <SixMonthCourseScreen setCurrentScreen={navigateToScreen} previousScreen={previousScreen} goBack={goBack}/>;
          case ScreenType.SixWeekCourse:
            return <SixWeekCourseScreen setCurrentScreen={navigateToScreen} previousScreen={previousScreen} goBack={goBack} onSelectCourse={() => {}} />;
          case ScreenType.ContactUs:
            return <ContactUsScreen setCurrentScreen={navigateToScreen} previousScreen={previousScreen} goBack={goBack}/>;
          case ScreenType.FeesCalculator:
            return <FeesCalculator setCurrentScreen={navigateToScreen} previousScreen={previousScreen} goBack={goBack}/>;
          // Individual course screens (accessible from course page buttons)
          case ScreenType.ChildMinding: 
            return <ChildMindingScreen setCurrentScreen={navigateToScreen} previousScreen={previousScreen} goBack={goBack}/>;
          case ScreenType.Cooking: 
            return <CookingScreen setCurrentScreen={navigateToScreen} previousScreen={previousScreen} goBack={goBack}/>;
          case ScreenType.FirstAid: 
            return <FirstAidScreen setCurrentScreen={navigateToScreen} previousScreen={previousScreen} goBack={goBack}/>;
          case ScreenType.GardenMaintenance: 
            return <GardeningMaintenanceScreen setCurrentScreen={navigateToScreen} previousScreen={previousScreen} goBack={goBack}/>;
          case ScreenType.Landscaping: 
            return <LandscapingScreen setCurrentScreen={navigateToScreen} previousScreen={previousScreen} goBack={goBack}/>;
          case ScreenType.LifeSkills: 
            return <LifeSkillsScreen setCurrentScreen={navigateToScreen} previousScreen={previousScreen} goBack={goBack}/>;
          case ScreenType.Sewing: 
            return <SewingScreen setCurrentScreen={navigateToScreen} previousScreen={previousScreen} goBack={goBack}/>;
          default:
            return <HomeScreen setCurrentScreen={navigateToScreen} previousScreen={previousScreen} goBack={goBack}/>;
        }
    };

    return (
        <SafeAreaView style={styles.container}>
          <StatusBar style="dark" />
          
          <Header onMenuPress={toggleSidebar} />
          
          <View style={styles.contentContainer}>
            <MainScreen />
          </View>

          <Sidebar
            currentScreen={currentScreen}
            setCurrentScreen={navigateToScreen}
            isVisible={sidebarVisible}
            onClose={closeSidebar}
            slideAnim={slideAnim}
          />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  contentContainer: {
    flex: 1,
  },
});