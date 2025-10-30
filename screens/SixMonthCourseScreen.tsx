import React from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image, 
    SafeAreaView, 
    Dimensions, 
    ImageBackground,
} from "react-native";
import { ScreenType } from "../App"; 

const { width } = Dimensions.get('window');
interface Course {
    title: string;
    description: string;
    content: string[];
    imageSource: any;
}

interface SixMonthCourseScreenProps {
    setCurrentScreen: (screen: ScreenType) => void;
    previousScreen: ScreenType;
    goBack?: () => void;

}



const sixMonthCourses: Course[] = [
    {
    title: 'FIRST AID',
    description:
        'Teaches students to provide first aid awareness and basic life support. Content:',
    content: [
        'Wounds and bleeding',
        'Burns and fractures',
        'Emergency scene management',
        'Cardio-Pulmonary Resuscitation (CPR)',
        'Respiratory distress',
    ],
    imageSource: require('../assets/images/courses/first-aid.jpg'),
    },
    {
    title: 'SEWING',
    description:
        'Teaches students to provide alterations and new garment tailoring services. Content:',
    content: [
        'Different types of stitches',
        'Threading and basic machine use',
        'Sewing buttons, zippers, hems, and seams',
        'Pattern reading',
        'Designing and making new garments',
    ],
    imageSource: require('../assets/images/courses/sewing.png'),
    },
    {
    title: 'LIFE SKILLS',
    description:
        'Teaches students to provide skills to navigate basic life necessities. Content:',
    content: [
        'How to open a bank account',
        'Understanding basic labour laws',
        'Fundamental reading and writing skills',
        'Basic numeracy skills',
    ],
    imageSource: require('../assets/images/courses/life-skills.png'),
    },
    {
    title: 'LANDSCAPING',
    description:
        'Teaches students to provide landscaping services for new and established gardens. Content:',
    content: [
        'Hydrology and water-wise gardening',
        'Fixed structures (fountains, statues, benches, birdbaths, etc.)',
        'Balancing of plants and trees in a garden',
        'Aesthetics of design, texture, and colours',
        'Garden layout',
    ],
    imageSource: require('../assets/images/courses/landscaping.png'),
    },
];


const CourseCard: React.FC<{ course: Course, setCurrentScreen: (screen: ScreenType) => void }> = ({ course, setCurrentScreen }) => {
   
   const getScreenType = (title: string): ScreenType => {
    switch (title) {
        case 'FIRST AID': return ScreenType.FirstAid;
        case 'SEWING': return ScreenType.Sewing;
        case 'LIFE SKILLS': return ScreenType.LifeSkills;
        case 'LANDSCAPING': return ScreenType.Landscaping;
        default: return ScreenType.Home; 
    }
};
    
    const handleViewCourse = () => {
        const targetScreen = getScreenType(course.title);
        setCurrentScreen(targetScreen);
    };

    return (
        
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{course.title}</Text>

            <Image
            source={course.imageSource}
            style={styles.cardImage}
            resizeMode="cover"
            />

            <View style={styles.cardContent}>
                <Text style={styles.cardDescription}>{course.description}</Text>

                <View style={styles.bulletList}>
                    {course.content.map((item, index) => (
                    <Text key={index} style={styles.bulletText}>
                        • {item}
                    </Text>
                    ))}
                </View>

                <TouchableOpacity
                style={styles.viewCourseButton}
                onPress={handleViewCourse}
                >
                    <Text style={styles.viewCourseText}>VIEW COURSE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const SixMonthCourseScreen: React.FC<SixMonthCourseScreenProps> = ({ setCurrentScreen, previousScreen, goBack }) => {
    const handleGoBack = () => {
        if (goBack) {
            goBack();
        } else {
            setCurrentScreen(previousScreen);
        }
    };
 
    const handleMenuPress = () => console.log('Menu Pressed');

    return (
        <ImageBackground
            source={require('../assets/images/backgrounds/main-bg.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <SafeAreaView style={styles.safeArea}>
                <ScrollView contentContainerStyle={styles.scrollViewContainer}>

                    <View style={styles.mainHeadingContainer}>
                        <Text style={styles.mainHeading}>6 Month Courses</Text>
                    </View>

                    <View style={styles.cardList}>
                        {sixMonthCourses.map((course, index) => (
                        <CourseCard 
                            key={index} 
                            course={course} 
                            setCurrentScreen={setCurrentScreen} 
                        />
                        ))}
                    </View>

               
                    <TouchableOpacity 
                        style={styles.backButton} 
                        onPress={handleGoBack}
                    >
                        <Text style={styles.backButtonText}>← Return to previous screen</Text>
                    </TouchableOpacity>

                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default SixMonthCourseScreen;


const styles = StyleSheet.create({
    background: {
    flex: 1,
   backgroundColor: "#fff",
 },
    safeArea: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    scrollViewContainer: {
        paddingHorizontal: width * 0.04,
        paddingBottom: 20,
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
    
    // --- Header Styles ---
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        marginBottom: 20,
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

    // --- Heading Styles ---
    mainHeadingContainer: {
        borderRadius: 8,
        paddingVertical: 10,
        marginBottom: 20,
        marginHorizontal: width * 0.01,
    },
    mainHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    
    // --- Card Styles ---
    cardList: {
        gap: 15,
    },
    card: {
        backgroundColor: '#ebf8e3ff',
        borderRadius: 12,
        paddingVertical: 15,
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        overflow: 'hidden',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '900',
        color: '#2E7D32',
        textAlign: 'center',
        marginBottom: 10,
        letterSpacing: 0.5,
    },
    cardImage: {
        width: "90%",
        height: 550,
        alignSelf: "center",
        borderRadius: 8,
        marginBottom: 10,
    },
    cardContent: {
        paddingHorizontal: 5,
    },
    cardDescription: {
        fontSize: 13,
        color: '#444',
        marginBottom: 10,
        lineHeight: 18,
        textAlign: 'center',
    },
    bulletList: {
        marginBottom: 15,
        paddingLeft: width * 0.1,
        alignSelf: 'flex-start',
    },
    bulletText: {
        fontSize: 12,
        color: '#333',
        marginBottom: 3,
        paddingLeft: 5,
    },
    viewCourseButton: {
        backgroundColor: '#D1E7C4',
        paddingVertical: 10,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#2E7D32',
    },
    viewCourseText: {
        color: '#2E7D32',
        fontWeight: 'bold',
        fontSize: 14,
    },
});