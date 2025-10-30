import React from "react";
import { StyleSheet, Text, ScrollView, TouchableOpacity, View, ImageBackground, Linking } from "react-native";
import { WebView } from "react-native-webview";
import { ScreenType } from "../App";
 
interface ContactUsScreenProps {
    setCurrentScreen: (screen: ScreenType) => void;
    previousScreen: ScreenType;
    goBack?: () => void;
}

// Expo Go compatible MapView component with interactive WebView
const MapView: React.FC<any> = ({ style, initialRegion, children, ...props }) => {
    const { latitude, longitude } = initialRegion;
    
    // Create an interactive HTML map using Leaflet.js
    const mapHtml = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
            <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
            <style>
                body { margin: 0; padding: 0; }
                #map { height: 100vh; width: 100vw; }
                .leaflet-popup-content { font-family: Arial, sans-serif; }
            </style>
        </head>
        <body>
            <div id="map"></div>
            <script>
                try {
                    var map = L.map('map').setView([${latitude}, ${longitude}], 15);
                    
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: ''
                    }).addTo(map);
                    
                    var marker = L.marker([${latitude}, ${longitude}]).addTo(map);
                    marker.bindPopup('<strong>Training Location</strong><br/>Tap anywhere to open in Maps');
                    
                    map.on('click', function(e) {
                        var url = 'https://www.google.com/maps/search/?api=1&query=' + e.latlng.lat + ',' + e.latlng.lng;
                        if (window.ReactNativeWebView) {
                            window.ReactNativeWebView.postMessage(JSON.stringify({
                                type: 'openMaps',
                                url: url
                            }));
                        }
                    });
                } catch(e) {
                    // Silent error handling
                }
            </script>
        </body>
        </html>
    `;

    const handleWebViewMessage = (event: any) => {
        try {
            const data = JSON.parse(event.nativeEvent.data);
            if (data.type === 'openMaps') {
                Linking.openURL(data.url).catch(() => {
                    // Silent fail - no console output
                });
            }
        } catch (error) {
            // Silent error handling
        }
    };

    return (
        <ImageBackground
            source={require('../assets/images/backgrounds/main-bg.png')}
            style={styles.background}
            resizeMode="cover"
        >
        <View style={[style, styles.mapContainer]}>
            <WebView
                source={{ html: mapHtml }}
                style={styles.webViewMap}
                javaScriptEnabled={true}
                onMessage={handleWebViewMessage}
                scrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            />
            {children}
        </View>
        </ImageBackground>
    );
};

// Expo Go compatible Marker component  
const Marker: React.FC<any> = ({ coordinate, title, description, ...props }) => {
    // Marker is handled within the WebView map, no React Native component needed
    return null;
};
 
const ContactUsScreen: React.FC<ContactUsScreenProps> = ({setCurrentScreen, previousScreen, goBack }) => {
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
        
        <ScrollView style={styles.screen}>
            <Text style={styles.ScreenHeading}>Locations</Text>
 
            <View style={styles.locationCard}>
                <Text style={styles.locationText}>
                    <Text style={styles.highlight}>Email: </Text>
                    Fordsburg@Empowering-The-Nation.co.za
                </Text>
                <Text style={styles.locationText}>
                    <Text style={styles.highlight}>Phone number: </Text>
                    011 123 4567
                </Text>
                <Text style={styles.locationText}>
                    <Text style={styles.highlight}>Address: </Text>
                    23 Terrace Road, Fordsburg, Johannesburg 2033
                </Text>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: -26.2067433471839,
                        longitude: 28.02397006788084,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                >
                    <Marker
                        coordinate={{ latitude: -26.2067433471839, longitude: 28.02397006788084 }}
                        title="Fordsburg"
                        description="23 Terrace Road, Fordsburg, Johannesburg 2033"
                    />
                </MapView>
            </View>
 
            <View style={styles.locationCard}>
                <Text style={styles.locationText}>
                    <Text style={styles.highlight}>Email: </Text>
                    Observatory@Empowering-The-Nation.co.za
                </Text>
                <Text style={styles.locationText}>
                    <Text style={styles.highlight}>Phone number: </Text>
                    034 541 6972
                </Text>
                <Text style={styles.locationText}>
                    <Text style={styles.highlight}>Address: </Text>
                    11 Kloof Street, Observatory, Johannesburg, 2037
                </Text>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: -26.1776,
                        longitude: 28.0576,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                >
                    <Marker
                        coordinate={{ latitude: -26.1776, longitude: 28.0576 }}
                        title="Observatory"
                        description="11 Kloof Street, Observatory, Johannesburg, 2037"
                    />
                </MapView>
            </View>
 
            <View style={styles.locationCard}>
                <Text style={styles.locationText}>
                    <Text style={styles.highlight}>Email: </Text>
                    Marshalltown@Empowering-The-Nation.co.za
                </Text>
                <Text style={styles.locationText}>
                    <Text style={styles.highlight}>Phone number: </Text>
                    072 347 6544
                </Text>
                <Text style={styles.locationText}>
                    <Text style={styles.highlight}>Address: </Text>
                    68 Albert St, Marshalltown, Johannesburg, 2107
                </Text>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: -26.2022,
                        longitude: 28.0456,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                >
                    <Marker
                        coordinate={{ latitude: -26.2022, longitude: 28.0456 }}
                        title="Marshalltown"
                        description="68 Albert St, Marshalltown, Johannesburg, 2107"
                    />
                </MapView>
            </View>
        </ScrollView>
        
        <TouchableOpacity 
            style={styles.backButton} 
            onPress={handleGoBack}
        >
            <Text style={styles.backButtonText}>← Return to previous screen</Text>
        </TouchableOpacity>
        
        </ImageBackground>
    );
};
 
const styles = StyleSheet.create({
    background: {
        flex: 1,
    },

    screen: {
        flex: 1,
        padding: 20,
        backgroundColor: 'transparent',
    },
 
    ScreenHeading: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#568366",
        marginBottom: 28,
        textAlign: "center",
       
    },
 
    contactUs: {
        alignItems: "center",
        marginVertical: 30,
    },
 
    contactDetails: {
        fontSize: 18,
        color: "#568366",
        fontWeight: "600",
        marginVertical: 5,
    },
 
    locationCard: {
        padding: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#568366",
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },     locations: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#568366",
        marginBottom: 28,
        textAlign: "center",  
    },
 
    locationText: {
        fontSize: 15,
        lineHeight: 22,
        color: "#568366",
        marginBottom: 5,
        opacity: 0.9,
    },
 
    highlight: {
        color: "#568366",
        fontWeight: "bold",
        minWidth: 100,
    },
 
    contactRow: {
        flexDirection: "row",
        marginBottom: 10,
        alignItems: "flex-start",
    },
 
    contactText: {
        flex: 1,
        fontSize: 15,
        color: "#568366",
        opacity: 0.9,
    },
 
    map: {
        width: "100%",
        height: 180,
        marginTop: 10,
        borderRadius: 10,
    },

    // Expo Go compatible map styles
    mapContainer: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#e8f5e8',
        position: 'relative',
        borderWidth: 1,
        borderColor: "#568366",
    },

    webViewMap: {
        width: '100%',
        height: '100%',
    },

    mapBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8f0',
        borderWidth: 2,
        borderColor: '#4CAF50',
        borderStyle: 'dashed',
    },

    coordinateText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2E7D32',
        marginBottom: 8,
    },

    locationLabel: {
        fontSize: 14,
        color: '#4CAF50',
        fontWeight: '600',
    },

    mapTouchArea: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    mapImage: {
        width: "100%",
        height: "100%",
        backgroundColor: "#f0f4f2",
    },

    mapOverlay: {
        position: "absolute",
        bottom: 10,
        left: 10,
        right: 10,
        backgroundColor: "rgba(86, 131, 102, 0.9)",
        padding: 8,
        borderRadius: 4,
        alignItems: "center",
    },

    mapOverlayText: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
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
 
export default ContactUsScreen