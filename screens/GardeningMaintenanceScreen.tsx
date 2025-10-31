import React from "react";
import {
SafeAreaView,
ScrollView,
View,
Text,
Image,
StyleSheet,
TouchableOpacity,
Dimensions,
ImageBackground,
} from "react-native";
import { ScreenType } from "../App";


const { width } = Dimensions.get('window');
interface GardenMaintenanceScreenProps {
 setCurrentScreen: (screen: ScreenType) => void;
 previousScreen: ScreenType;
 goBack?: () => void;

}

const GardenMaintenanceScreen: React.FC<GardenMaintenanceScreenProps> = ({ setCurrentScreen, previousScreen, goBack }) => {
    const handleGoBack = () => {
        if (goBack) {
            goBack();
        } else {
            setCurrentScreen(previousScreen);
        }
    };
    
    const handleGoBackOld = () => {
        setCurrentScreen(previousScreen);
    };

  const handleMenuPress = () => console.log('Menu Pressed');

     return (
        <ImageBackground
            source={require('../assets/images/backgrounds/main-bg.png')}
            style={styles.background}
            resizeMode="cover"
      >

        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
            <Text style={styles.backButtonText}>← Return to previous screen</Text>
        </TouchableOpacity>   <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Garden Maintenance</Text>
            </View>

            <Image
            source={ require('../assets/images/courses/garden-maintenance.jpg')}
            style={styles.courseImage}
            resizeMode="cover"
            />

        <View style={styles.contentContainer}>
         
          <Text style={styles.description}>Teaches students to provide basic knowledge of watering, pruning and planting in a domestic garden.</Text>
 
         
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Course details:</Text>
              <View style={styles.bulletList}>
                <Text style={styles.bulletPoint}>- Six-week short course</Text>
                <Text style={styles.bulletPoint}>- Can be completed online or in-person (see contact page for in-person locations)</Text>
              </View>
            </View>
 
          {/* --- Course Content Section --- */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Course content:</Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletPoint}>- Water restrictions and water requirements of indigenous and exotic plants</Text>
              <Text style={styles.bulletPoint}>- Pruning and propagation of plants</Text>
              <Text style={styles.bulletPoint}>- Planting techniques for different plants</Text>
            </View>
          </View>
 

          <Text style={styles.price}>R750.00 pp</Text>
    
     </View>
 </ScrollView>
 </SafeAreaView>
 </ImageBackground>
 );
};

export default GardenMaintenanceScreen;

const styles = StyleSheet.create({
    background: {
    flex: 1,
   backgroundColor: "#fff",
 },
  safeArea: {
   flex: 1,
   backgroundColor: '#F7F7F7', 
  },
  scrollContent: {
    paddingHorizontal: width * 0.04,
    paddingBottom: 30,
  },
 
  // --- Header Styles ---
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    marginBottom: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 8,
    borderRadius: 5,
  },
  logoText: {
    fontSize: 12,
    color: '#333',
    fontWeight: '500',
  },
  menuButton: {
    padding: 5,
  },
  menuIcon: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
  },
  titleContainer: {
    borderRadius: 8,
    paddingVertical: 10,
    marginBottom: 20,
    marginHorizontal: width * 0.01,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  courseImage: {
    width: "80%",
    height: 550,
    alignSelf: "center",
    borderRadius: 8,
    marginBottom: 15,
  },
  contentContainer: {
  },
  description: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: '#2E7D32',
    fontSize: 15,
    marginBottom: 5,
    textAlign: 'center',
  },
  bulletList: {
    alignItems: 'center',
  },
  bulletPoint: {
    fontSize: 13,
    color: '#333',
    marginBottom: 4,
    textAlign: 'center',
    lineHeight: 18,
    maxWidth: '90%',
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
    marginTop: 30,
  },
  buttonContainer: {
    width: '50%',
    alignSelf: 'center',
    marginTop: 20,
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