import React from "react";
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity, 
    ImageBackground,
} from "react-native";
import { ScreenType } from "../App"; 

interface FirstAidScreenProps {
    setCurrentScreen: (screen: ScreenType) => void;
    previousScreen: ScreenType;
    goBack?: () => void;
}


const FirstAidScreen = ({ setCurrentScreen, previousScreen, goBack }: FirstAidScreenProps) => {
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
        </TouchableOpacity>
        
        <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>

         <View style={styles.header}>
          </View>

            <Text style={styles.title}>First Aid</Text>

           <Image
             source={require('../assets/images/courses/first-aid.jpg')}
             style={styles.image}
             resizeMode="cover"
            />

            <Text style={styles.description}>Teaches students to provide first aid 
                    awareness and basic life support.</Text>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Course details:</Text>
              <View style={styles.bulletList}>
                <Text style={styles.bulletPoint}>Six-month extensive course</Text>
                <Text style={styles.bulletPoint}>Can be completed online or in-person 
                (see contact page for in-person locations)</Text>
              </View>
            </View>


            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Content:</Text>
             <View style={styles.bulletList}>
                 <Text style={styles.bulletPoint}>• Wounds and bleeding</Text>
                 <Text style={styles.bulletPoint}>• Burns and fractures</Text>
                 <Text style={styles.bulletPoint}>• Emergency scene management</Text>
                <Text style={styles.bulletPoint}>• Cardio-pulmonary resuscitation (CPR)</Text>
               <Text style={styles.bulletPoint}>• Respiratory distress</Text>
             </View>
           </View>

            <Text style={styles.price}>R1500.00 pp</Text>         
       </ScrollView>
       </SafeAreaView>
      </ImageBackground>
 );
};

export default FirstAidScreen; 

const styles = StyleSheet.create({
  background: {
    flex: 1,
   backgroundColor: "#fff",
 },
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
 },
   header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
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