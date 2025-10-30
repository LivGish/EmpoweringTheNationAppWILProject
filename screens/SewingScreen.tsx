import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import { ScreenType } from "../App"; 

interface SewingScreenProps {
 setCurrentScreen: (screen: ScreenType) => void;
 previousScreen: ScreenType;
 goBack?: () => void;

}

export default function SewingScreen({ setCurrentScreen, previousScreen, goBack }: SewingScreenProps) {
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

        <ScrollView contentContainerStyle={styles.container}>

          <Text style={styles.title}>Sewing</Text>

            <Image
            source={require('../assets/images/courses/sewing.png')}
            style={styles.image}
            resizeMode="cover"
            />

            <Text style={styles.description}>Teaches students to provide alterations 
                and new garment tailoring services.</Text>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Course details:</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletPoint}>- Six-month extensive course</Text>
                    <Text style={styles.bulletPoint}>- Can be completed online or in-person 
                        (see contact page for in-person locations)</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Course content:</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletPoint}>- Opening a bank account</Text>
                    <Text style={styles.bulletPoint}>- Basic labour law (know your rights)</Text>
                    <Text style={styles.bulletPoint}>- Basic reading and writing literacy</Text>
                    <Text style={styles.bulletPoint}>- Basic numeric literacy</Text>
                </View>
            </View>

            <Text style={styles.price}>R1500.00 pp</Text>

       </ScrollView>
      </ImageBackground>
     );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    flex: 1,
  },
  container: {
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: '100%',
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
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
  menuIcon: {
    fontSize: 26,
    color: "#333",
  },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#2E7D32",
        marginBottom: 20,
        textAlign: "center",
    },
    image: {
        width: "80%",
        height: 550,
       alignSelf: "center",
        borderRadius: 8,
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        color: "#444",
        textAlign: "center",
        marginBottom: 20,
        paddingHorizontal: 10,
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