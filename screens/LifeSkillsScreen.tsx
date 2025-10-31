import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { ScreenType } from "../App"; 

interface LifeSkillsScreenProps {
    setCurrentScreen: (screen: ScreenType) => void;
    previousScreen: ScreenType;
    goBack?: () => void;

}

const LifeSkillsScreen = ({ setCurrentScreen, previousScreen, goBack }: LifeSkillsScreenProps) => {
  
    
    const handleGoBack = () => {
        if (goBack) {
            goBack();
        } else {
            setCurrentScreen(previousScreen);
        }
    };

  return (
    <ImageBackground
           source={require('../assets/images/backgrounds/main-bg.png')}
           style={styles.background}
           resizeMode="cover"
    >

    <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Text style={styles.backButtonText}>← Return to previous screen</Text>
    </TouchableOpacity>    <SafeAreaView style={styles.safeArea}>
    <ScrollView contentContainerStyle={styles.scrollContent}> 
             <Text style={styles.title}>Life skills</Text>

            <Image
                source={require('../assets/images/courses/life-skills.png')}
                style={styles.image}
                resizeMode="cover"
            />

        <Text style={styles.description}>
          The aim of this course is to prepare participants with essential life skills.
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Course details:</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletPoint}>- Six-month extensive course</Text>
            <Text style={styles.bulletPoint}>- Can be completed online or in-person (see contact page for in-person locations)</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Course content:</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletPoint}>• Understanding basic labour laws</Text>
            <Text style={styles.bulletPoint}>• How to open a bank account</Text>
            <Text style={styles.bulletPoint}>• Fundamental reading and writing skills</Text>
            <Text style={styles.bulletPoint}>• Basic numeracy skills</Text>
          </View>
        </View>

        <Text style={styles.price}>R1500.00 pp</Text>

      </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default LifeSkillsScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
   backgroundColor: "#fff",
 },
  safeArea: {
    flex: 1,
  },  
  scrollContent: { 
    flexGrow: 1, 
    backgroundColor: "#F8F8F8",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    width: '100%',
  },
  logo: {
    width: 35,
    height: 35,
    marginRight: 8,
  },
  headerText: {
    fontSize: 12,
    color: "#333",
    fontWeight: "500",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2E7D32",
    textAlign: "center",
    marginVertical: 15,
  },
  image: {
    width: "80%",
    height: 550,
    alignSelf: "center",
    borderRadius: 8,
  },
  description: {
    fontSize: 14,
    color: "#444",
    textAlign: "center",
    marginTop: 15,
    marginHorizontal: 20, 
    lineHeight: 20,
  },
  section: {
    marginTop: 20,
    marginHorizontal: 20,
    width: '90%', 
    alignSelf: 'center',
  },
  sectionTitle: {
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 5,
  },
  bulletList: {
    marginLeft: 10,
  },
  bulletPoint: {
    fontSize: 13,
    color: "#333",
    marginBottom: 4,
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2E7D32",
    textAlign: "center",
    marginVertical: 30,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {
    fontSize: 26,
    color: "#333",
  },
    buttonContainer: {
        width: '50%',
        alignSelf: 'center',
        marginBottom: 30,
    },
    backButton: {
        alignSelf: 'flex-start',
        backgroundColor: 'rgba(86, 131, 102, 0.9)',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 25,
        marginBottom: 20,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
 
    backButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});