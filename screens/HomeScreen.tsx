import React from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    Dimensions,
    SafeAreaView,
    ImageBackground,
} from "react-native";
import { ScreenType } from "../App"; 

const { width } = Dimensions.get('window');

interface HomeScreenProps {
    setCurrentScreen: (screen: ScreenType) => void;
    previousScreen: ScreenType;
    goBack?: () => void;
    
}

const HomeScreen: React.FC<HomeScreenProps> = ({ setCurrentScreen, previousScreen, goBack }) => {
    const handleMenuPress = () => console.log('Menu Pressed');
    
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
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                {/* Back Button */}
                <TouchableOpacity 
                    style={styles.backButton} 
                    onPress={handleGoBack}
                >
                    <Text style={styles.backButtonText}>← Return to previous screen</Text>
                </TouchableOpacity>
                
                {/* Hero Section */}
                <View style={styles.heroContainer}>
                    <Text style={styles.heroTitle}>
                        Better Your Skills with{"\n"}
                        <Text style={styles.heroTitleHighlight}>Empowering the Nation</Text>
                    </Text>
                    <View style={[styles.heroImageContainer, { backgroundColor: '#f0f0f0' }]}>
                        <Image
                            source={require('../assets/images/courses/graduates.png')}
                            style={{ width: 450, height: 400 }}
                            resizeMode="cover"
                        />
                    </View>
                    <Text style={styles.descriptionText}>
                        Empowering the Nation was established in 2022 and offers courses in Johannesburg. Hundreds of domestic workers and gardeners have been trained on both six-month long Learnership and the six-week short Skills Training Programmes to empower themselves and can provide more marketable skills.
                    </Text>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity 
                        style={styles.courseButton}
                        onPress={() => setCurrentScreen(ScreenType.SixMonthCourse)}
                    >
                        <Text style={styles.courseButtonText}>6 MONTH COURSE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.courseButton}
                        onPress={() => setCurrentScreen(ScreenType.SixWeekCourse)}
                    >
                        <Text style={styles.courseButtonText}>6 WEEK COURSE</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.featuresRow}>
                    <View style={styles.featureCard}>
                        <Text style={styles.featureIcon}>🏅</Text>
                        <Text style={styles.featureTitle}>Accredited Certification</Text>
                        <Text style={styles.featureDescription}>Our courses come with certification which you can use to apply for domestic jobs.</Text>
                    </View>
                    <View style={styles.featureCard}>
                        <Text style={styles.featureIcon}>💻</Text>
                        <Text style={styles.featureTitle}>In Person/Online</Text>
                        <Text style={styles.featureDescription}>The training courses are available in person and online.</Text>
                    </View>
                </View>
                
            </ScrollView>
        </SafeAreaView>
        </ImageBackground>
    );
};

export default HomeScreen;


const styles = StyleSheet.create({
    background: {
    flex: 1,
    backgroundColor: "#fff",
    },
    safeArea: {
    marginTop: 30,
    flex: 1,
    backgroundColor: 'transparent',
    },
    scrollViewContainer: {
        paddingHorizontal: width * 0.04, 
        paddingBottom: 40,
        alignItems: 'center', 
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        marginBottom: 20,
        width: '100%', 
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

    heroContainer: {
        alignItems: 'center',
        marginBottom: 30,
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    heroTitle: {
        fontSize: width * 0.075, 
        fontWeight: '300',
        color: '#333',
        textAlign: 'center',
        marginBottom: 15,
        lineHeight: width * 0.09,
        fontStyle: 'italic',
    },
    heroTitleHighlight: {
        fontWeight: 'bold',
        color: '#2E7D32', 
        fontStyle: 'normal',
    },
    heroImageContainer: {
        width: '100%',
        height: 400,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden',
    },
    heroImage: {
        width: '100%',
        height: '100%',
    },
    descriptionText: {
        fontSize: 13,
        color: '#444',
        textAlign: 'center',
        lineHeight: 20,
    },

   
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 30,
    },
    courseButton: {
        backgroundColor: '#D1E7C4', 
        paddingVertical: 12,
        borderRadius: 8,
        width: '48%', 
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#2E7D32',
        shadowColor: '#2E7D32',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    courseButtonText: {
        color: '#2E7D32',
        fontWeight: '800',
        fontSize: 14,
    },

    // --- Features Section ---
    featuresRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    featureCard: {
        width: '48%',
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        alignItems: 'center',
    },
    featureIcon: {
        fontSize: 30,
        marginBottom: 5,
    },
    featureTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 5,
    },
    featureDescription: {
        fontSize: 11,
        color: '#666',
        textAlign: 'center',
    },
});
