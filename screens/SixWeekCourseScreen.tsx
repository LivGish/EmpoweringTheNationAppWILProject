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
// Assuming ScreenType is defined in App.tsx
import { ScreenType } from "../App";

// Define Course interface locally since it's no longer in App.tsx
interface Course {
  id: string;
  courseName: string;
  courseDescription: string;
  courseDuration: string;
  courseFee: number;
} 

// Get screen width once for responsive styling
const { width } = Dimensions.get('window');

// --- 1. COURSE TYPES & DATA ---
interface SixWeekItem {
    title: string;
    description: string;
    bullets: string[];
    imageSource: any;
}

const SIX_WEEK_DATA: SixWeekItem[] = [
    {
        title: 'CHILD MINDING',
        description:
            'Teaches students to provide basic child and baby care. Content:',
        bullets: [
            'Birth to six-month-old baby needs',
            'Seven-month to one year old needs',
            'Toddler needs',
            'Educational toys',
        ],
        imageSource: require('../assets/images/courses/child-minding.jpg'),
    },
    {
        title: 'COOKING',
        description:
            'Teaches students to prepare and cook nutritious family meals. Content:',
        bullets: [
            'Nutritional requirements for a healthy body',
            'Types of protein, carbohydrates and vegetables',
            'Food preparation',
            'Tasty and nutritious recipes',
            'Preparation and cooking of meals',
        ],
        imageSource: require('../assets/images/courses/cooking.png'),
    },
    {
        title: 'GARDEN MAINTENANCE',
        description:
            'Teaches students to provide basic knowledge of watering, pruning and planting in a domestic garden. Content:',
        bullets: [
            'Water restrictions and the water-wise benefits of indigenous and exotic plants',
            'Pruning and propagation of plants',
            'Planting techniques for different plant types',
        ],
        imageSource: require('../assets/images/courses/garden-maintenance.jpg'),
    },
];

interface SixWeekCourseScreenProps {
    setCurrentScreen: (screen: ScreenType) => void;
    previousScreen: ScreenType;
    onSelectCourse: (course: Course) => void;
    goBack?: () => void;
}

interface SixWeekCardProps {
    course: SixWeekItem;
    setCurrentScreen: (screen: ScreenType) => void;
    onSelectCourse: (course: Course) => void;
    goBack?: () => void;

}

const SixWeekCard: React.FC<SixWeekCardProps> = ({ course, setCurrentScreen, onSelectCourse }) => {
    
    const mockFullCourse: Course = {
        id: course.title.toLowerCase().replace(/ /g, '-'), 
        courseName: course.title,
        courseDescription: course.description,
        courseDuration: '6 weeks',
        courseFee: 500, // Example fee
    };

    const getScreenType = (title: string): ScreenType => {
        switch (title) {
            case 'CHILD MINDING': return ScreenType.ChildMinding;
            case 'COOKING': return ScreenType.Cooking;
            case 'GARDEN MAINTENANCE': return ScreenType.GardenMaintenance;
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
                    {course.bullets.map((bullet, index) => (
                        <Text key={index} style={styles.bulletText}>
                            • {bullet}
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


// --- 4. MAIN SCREEN COMPONENT ---
const SixWeekCourseScreen: React.FC<SixWeekCourseScreenProps> = ({ setCurrentScreen, previousScreen, onSelectCourse, goBack }) => {
    
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
                    
                    {/* Back Button */}
                    <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
                        <Text style={styles.backButtonText}>← Return to previous screen</Text>
                    </TouchableOpacity>
            
                    {/* Main Heading */}
                    <View style={styles.mainHeadingContainer}>
                        <Text style={styles.mainHeading}>6 Week Short Courses</Text>
                    </View>
            
                    {/* Course Card List */}
                    <View style={styles.cardList}>
                        {SIX_WEEK_DATA.map((course, index) => (
                            <SixWeekCard
                                key={index} 
                                course={course} 
                                setCurrentScreen={setCurrentScreen}
                                onSelectCourse={onSelectCourse}
                            />
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default SixWeekCourseScreen;

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
