import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { ScreenType } from "../App"; // Ensure this path is correct

interface NavigationProps{
    currentScreen: ScreenType;
     setCurrentScreen: (screen: ScreenType) => void;
}

const Navigation: React.FC<NavigationProps> = ({currentScreen, setCurrentScreen}) => {
    return(
        <View style={styles.navContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity
                // FIX: Use ScreenType.Home for comparison and onPress
                style={[styles.navButton, currentScreen === ScreenType.Home && styles.navButtonActive]}
                onPress={() => setCurrentScreen(ScreenType.Home)}>
                <Text style={styles.navButtonText}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                // FIX: Use ScreenType.SixMonthCourse for comparison and onPress
                style={[styles.navButton, currentScreen === ScreenType.SixMonthCourse && styles.navButtonActive]}
                onPress={() => setCurrentScreen(ScreenType.SixMonthCourse)}>
                <Text style={styles.navButtonText}>6 Month Course</Text>
                </TouchableOpacity>

                <TouchableOpacity
                // FIX: Use ScreenType.SixWeekCourse
                style={[styles.navButton, currentScreen === ScreenType.SixWeekCourse && styles.navButtonActive]}
                onPress={() => setCurrentScreen(ScreenType.SixWeekCourse)}>
                <Text style={styles.navButtonText}>6 Week Course</Text>
                </TouchableOpacity>

                <TouchableOpacity
                // FIX: Use ScreenType.FeesCalculator
                style={[styles.navButton, currentScreen === ScreenType.FeesCalculator && styles.navButtonActive]}
                onPress={() => setCurrentScreen(ScreenType.FeesCalculator)}>
                <Text style={styles.navButtonText}>Checkout</Text>
                </TouchableOpacity>

                <TouchableOpacity
                // FIX: Use ScreenType.ContactUs
                style={[styles.navButton, currentScreen === ScreenType.ContactUs && styles.navButtonActive]}
                onPress={() => setCurrentScreen(ScreenType.ContactUs)}>
                <Text style={styles.navButtonText}>Contacts</Text>
                </TouchableOpacity>       
        </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    navContainer: {
        backgroundColor: "#92c3a5",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#92c3a5"
    },

    navButton: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        marginHorizontal: 5,
    },

    navButtonActive: {
        backgroundColor: "#4b9960",
        borderRadius: 5,
},

    navButtonText: {
        color: "#ffffff",
        fontSize: 15,
        fontWeight: "600",
    },
});

export default Navigation;