import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import { ScreenType } from "../App";


// The ChildMindingScreenProps interface is correct and used below
interface ChildMindingScreenProps {
    setCurrentScreen: (screen: ScreenType) => void;
    previousScreen: ScreenType;
    goBack?: () => void;
}

export default function ChildMindingScreen({ setCurrentScreen, previousScreen, goBack }: ChildMindingScreenProps) {
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
                <View style={styles.header}>
                </View>
                <Text style={styles.title}>Child Minding</Text>

                <Image
                    source={require('../assets/images/courses/child-minding.jpg')}
                    style={styles.image}
                    resizeMode="cover"
                />

                <Text style={styles.description}>Teaches students to provide basic child and baby care.</Text>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Course details:</Text>
                    <View style={styles.bulletList}>
                        <Text style={styles.bulletPoint}>- Six-week short course</Text>
                        <Text style={styles.bulletPoint}>- Can be completed online or in-person 
                            (see contact page for in-person locations)</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Course content:</Text>
                    <View style={styles.bulletList}>
                        <Text style={styles.bulletPoint}>• Birth to six-month old baby needs</Text>
                        <Text style={styles.bulletPoint}>• Seven-month to one year old needs</Text> 
                        <Text style={styles.bulletPoint}>• Toddler needs</Text> 
                        <Text style={styles.bulletPoint}>• Educational toys</Text>
                    </View>
                </View>

                <Text style={styles.price}>R750.00 pp</Text>
                
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#fff",
    },
    container: {
        alignItems: "center",
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginBottom: 10,
    },
    logoContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    logo: {
        width: 30,
        height: 30,
        marginRight: 6,
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
        fontSize: 22,
        fontWeight: "bold",
        color: "#2E7D32",
        marginVertical: 10,
    },
    image: {
        width: "80%",
        height: 550,
        alignSelf: "center",
        borderRadius: 10,
        marginVertical: 12,
    },
    description: {
        textAlign: "center",
        color: "#555",
        fontSize: 13,
        marginBottom: 18,
    },
    section: {
        width: "100%",
        marginBottom: 16,
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