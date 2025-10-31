import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground,
} from "react-native";
import { ScreenType } from "../App";

// Course data and types
const courses = {
  "First aid": 1500,
  "Sewing": 1500,
  "Landscaping": 1500,
  "Life skills": 1500,
  "Child minding": 750,
  "Cooking": 750,
  "Garden maintenance": 750,
};

type CourseKey = keyof typeof courses;
 
interface FeeCalculatorScreenProps {
    setCurrentScreen: (screen: ScreenType) => void;
    previousScreen: ScreenType;
    goBack?: () => void;
}
 
interface CalculationResult {
    subtotal: number;
    discountRate: number;
    discountAmount: number;
    discountedTotal: number;
    vatAmount: number;
    finalTotal: number;
}

const FeeCalculator: React.FC<FeeCalculatorScreenProps> = ({ setCurrentScreen, previousScreen, goBack }) => {
    const [name, setName] = useState("");
    const [cellNumber, setCellNumber] = useState("");
    const [email, setEmail] = useState("");
    const [selectedCourses, setSelectedCourses] = useState<CourseKey[]>([]);
    const [total, setTotal] = useState<CalculationResult | null>(null);

    const toggleCourse = (course: CourseKey) => {
        setSelectedCourses((prev) =>
            prev.includes(course)
                ? prev.filter((c) => c !== course)
                : [...prev, course]
        );
    };

    const calculateFees = () => {
        // Check if all contact details are filled
        if (!name.trim() || !cellNumber.trim() || !email.trim()) {
            Alert.alert("Missing Information", "Please fill in all contact details (Name, Surname, and Email) before calculating fees.");
            return;
        }

        if (selectedCourses.length === 0) {
            Alert.alert("No Courses Selected", "Please select at least one course");
            return;
        }

        const subtotal = selectedCourses.reduce(
            (acc, course) => acc + courses[course],
            0
        );

        // Apply discount
        let discountRate = 0;
        if (selectedCourses.length === 2) discountRate = 0.05;
        else if (selectedCourses.length === 3) discountRate = 0.1;
        else if (selectedCourses.length > 3) discountRate = 0.15;

        const discountAmount = subtotal * discountRate;
        const discountedTotal = subtotal - discountAmount;
        const vatAmount = discountedTotal * 0.15;
        const finalTotal = discountedTotal + vatAmount;

        // Store detailed calculation for display
        setTotal({
            subtotal,
            discountRate: discountRate * 100,
            discountAmount,
            discountedTotal,
            vatAmount,
            finalTotal
        });
    };

    return (
      <ImageBackground
        source={require('../assets/images/backgrounds/main-bg.png')}
        style={styles.background}
        resizeMode="cover"
      >

      <TouchableOpacity style={styles.backButton} onPress={goBack || (() => setCurrentScreen(previousScreen))}>
        <Text style={styles.backButtonText}>← Return to previous screen</Text>
      </TouchableOpacity>

        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.screen}>
                <Text style={styles.title}>Course Fee Calculator</Text>

                <Text style={styles.subtitle}>Enter your contact details</Text>

                {/* Contact form */}
                <View style={styles.formRow}>
                    <TextInput
                        placeholder="Full name"
                        value={name}
                        onChangeText={setName}
                        style={styles.inputHalf}
                    />
                    <TextInput
                        placeholder="Cell number"
                        value={cellNumber}
                        onChangeText={setCellNumber}
                        style={styles.inputHalf}
                    />
                </View>

                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.inputFull}
                    keyboardType="email-address"
                />

                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={() => {
                        if (!name.trim() || !cellNumber.trim() || !email.trim()) {
                            Alert.alert("Missing Information", "Please fill in all contact details before saving.");
                        } else {
                            Alert.alert("Details Saved", `Contact details saved for ${name}`);
                        }
                    }}
                >
                    <Text style={styles.saveText}>Save Details</Text>
                </TouchableOpacity>

                {/* Discounts */}
                <View style={styles.discountBox}>
                    <Text style={styles.discountText}>
                        <Text style={{ fontWeight: "bold" }}>Discounts Available:</Text>
                        {"\n"}One Course - No Discount{"\n"}Two Courses - 5% Discount{"\n"}
                        Three Courses - 10% Discount{"\n"}
                        More Than Three Courses - 15% Discount
                    </Text>
                </View>

                <Text style={styles.sectionTitle}>Select courses you are interested in:</Text>

                {/* Course Selection */}
                <View style={styles.courseRow}>
                    <View style={styles.courseColumn}>
                        <Text style={styles.columnTitle}>6-month courses (R1500 per course):</Text>
                        {(Object.keys(courses) as CourseKey[])
                            .slice(0, 4)
                            .map((course) => (
                                <TouchableOpacity
                                    key={course}
                                    onPress={() => toggleCourse(course)}
                                    style={styles.courseItem}
                                >
                                    <Text style={styles.checkbox}>
                                        {selectedCourses.includes(course) ? "✓" : "☐"}
                                    </Text>
                                    <Text style={styles.courseText}>{course}</Text>
                                </TouchableOpacity>
                            ))}
                    </View>

                    <View style={styles.courseColumn}>
                        <Text style={styles.columnTitle}>6-week courses (R750 per course):</Text>
                        {(Object.keys(courses) as CourseKey[])
                            .slice(4)
                            .map((course) => (
                                <TouchableOpacity
                                    key={course}
                                    onPress={() => toggleCourse(course)}
                                    style={styles.courseItem}
                                >
                                    <Text style={styles.checkbox}>
                                        {selectedCourses.includes(course) ? "✓" : "☐"}
                                    </Text>
                                    <Text style={styles.courseText}>{course}</Text>
                                </TouchableOpacity>
                            ))}
                    </View>
                </View>

                {/* Calculate button */}
                <TouchableOpacity style={styles.calcButton} onPress={calculateFees}>
                    <Text style={styles.calcText}>Calculate Total</Text>
                </TouchableOpacity>

                {/* Results */}
                {total !== null && (
                    <View style={styles.resultBox}>
                        <Text style={styles.resultTitle}>
                            Fee Calculation Summary
                        </Text>
                        <Text style={styles.resultText}>
                            <Text style={{ fontWeight: "bold" }}>Customer details:</Text>
                            {"\n"}
                            <Text style={{ fontWeight: "bold" }}>Name:</Text> {name}{"\n"}
                            <Text style={{ fontWeight: "bold" }}>Cell Number:</Text> {cellNumber}{"\n"}
                            <Text style={{ fontWeight: "bold" }}>Email:</Text> {email}{"\n\n"}

                            <Text style={{ fontWeight: "bold" }}>Selected courses:</Text>
                            {"\n"}
                            {selectedCourses.map(course => `• ${course} - R${courses[course]}`).join("\n")}
                            {"\n\n"}
                            <Text style={{ fontWeight: "bold" }}>Total cost of all courses: R{total.subtotal.toFixed(2)}</Text>
                            {"\n"}
                            {total.discountRate > 0 && (
                                <>
                                    <Text style={{ fontWeight: "bold" }}>Discount amount ({total.discountRate}%): R{total.discountAmount.toFixed(2)}</Text>
                                    {"\n"}
                                    <Text style={{ fontWeight: "bold" }}>Amount including discount: R{total.discountedTotal.toFixed(2)}</Text>
                                    {"\n"}
                                </>
                            )}
                            {total.discountRate === 0 && (
                                <>
                                    <Text style={{ fontWeight: "bold" }}>Amount including discount: R{total.discountedTotal.toFixed(2)}</Text>
                                    {"\n"}
                                </>
                            )}
                            <Text style={{ fontWeight: "bold" }}>Total before VAT: R{total.discountedTotal.toFixed(2)}</Text>
                            {"\n"}
                            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                                Total after VAT: R{total.finalTotal.toFixed(2)}
                            </Text>
                        </Text>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
};
 
export default FeeCalculator;
 
const styles = StyleSheet.create({
background: {
    flex: 1,
   backgroundColor: "#fff",
 },
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    marginTop: 10,
  },
  logoText: {
    fontSize: 13,
    color: "#568366",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  subtitle: {
    textAlign: "center",
    color: "#568366",
    marginVertical: 10,
  },
  formRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  inputHalf: {
    width: "48%",
    backgroundColor: "#ebf8e3ff",
    borderRadius: 20,
    padding: 10,
  },
  inputFull: {
    backgroundColor: "#ebf8e3ff",
    borderRadius: 20,
    padding: 10,
    margin: 20,
    marginTop: 10,
  },
  saveButton: {
    backgroundColor: "#92c3a5",
    alignSelf: "center",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 25,
  },
  saveText: {
    color: "#fff",
    fontWeight: "bold",
  },
  discountBox: {
    marginTop: 15,
    marginHorizontal: 20,
  },
  discountText: {
    fontSize: 13,
    color: "#568366",
    textAlign: "center",
  },
  sectionTitle: {
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 25,
    color: "#568366",
  },
  courseRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 15,
  },
  courseColumn: {
    width: "45%",
  },
  columnTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  courseItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 3,
  },
  checkbox: {
    fontSize: 16,
    marginRight: 6,
  },
  courseText: {
    fontSize: 13,
  },
  calcButton: {
    backgroundColor: "#92c3a5",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 25,
  },
  calcText: {
    fontWeight: "bold",
    color: "#fff",
  },
  resultBox: {
    backgroundColor: "#fff",
    borderRadius: 8,
    margin: 20,
    padding: 15,
    borderWidth: 0.5,
    borderColor: "#ccc",
  },
  resultTitle: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  resultText: {
    fontSize: 13,
    color: "#568366",
    lineHeight: 18,
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
 
    screen: {
        flex: 1,
        padding: 20,
    },
});