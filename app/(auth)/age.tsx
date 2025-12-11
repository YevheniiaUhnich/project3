import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { router } from 'expo-router';
import { BlurView } from 'expo-blur';
import { ArrowBackIcon, ArrowUpIndicator } from '@/shared/components/icons';

export default function AgeScreen() {
    const [selectedAge, setSelectedAge] = useState(28);

    const handleContinue = () => {
        console.log('Continue pressed with age:', selectedAge);
        router.push('/(auth)/weight');
    };

    const handleBack = () => {
        router.back();
    };

    const visibleAges = [selectedAge - 2, selectedAge - 1, selectedAge, selectedAge + 1, selectedAge + 2];

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                bounces={false}
            >
                {/* Back Button */}
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={handleBack}
                    activeOpacity={0.7}
                >
                    <ArrowBackIcon />
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>

                {/* Title */}
                <Text style={styles.title}>How Old Are You?</Text>

                {/* Description */}
                <Text style={styles.descriptionText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>

                {/* Large Age Display */}
                <Text style={styles.largeAge}>{selectedAge}</Text>

                {/* Arrow Indicator */}
                <View style={styles.arrowContainer}>
                    <ArrowUpIndicator
                        width={46}
                        height={32}
                        fill="#E2F163"
                    />

                </View>

                {/* Purple Picker Section */}
                <View style={styles.pickerSection}>
                    <View style={styles.pickerRow}>
                        {visibleAges.map((age, index) => {
                            const isCentered = index === 2;
                            const isAdjacent = index === 1 || index === 3;
                            const isEdge = index === 0 || index === 4;

                            return (
                                <TouchableOpacity
                                    key={age}
                                    style={[
                                        styles.ageItem,
                                        isCentered && styles.ageItemCentered,
                                        age === 26 && styles.ageItemShiftLeftEdge,
                                        age === 27 && styles.ageItemShiftLeft,
                                        age === 29 && styles.ageItemShiftRight,
                                        age === 30 && styles.ageItemShiftRightEdge,
                                    ]}
                                    onPress={() => setSelectedAge(age)}
                                    activeOpacity={0.7}
                                >
                                    <Text
                                        style={[
                                            styles.ageText,
                                            isCentered && styles.ageTextCentered,
                                            isAdjacent && styles.ageTextAdjacent,
                                            isEdge && styles.ageTextEdge,
                                        ]}
                                    >
                                        {age}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>

                    {/* Divider Lines */}
                    <View style={styles.dividerLeft} />
                    <View style={styles.dividerRight} />
                </View>

                {/* Continue Button */}
                <BlurView intensity={7} style={styles.continueButtonBlur}>
                    <TouchableOpacity
                        style={styles.continueButton}
                        onPress={handleContinue}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.continueButtonText}>Continue</Text>
                    </TouchableOpacity>
                </BlurView>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232323',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        width: 393,
        height: 852,
        alignSelf: 'center',
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 40,
    },
    backButton: {
        position: 'absolute',
        left: 34,
        top: 70,
        zIndex: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backText: {
        fontFamily: 'League Spartan',
        fontWeight: '600',
        fontSize: 15,
        color: '#E2F163',
        marginLeft: 8,
        textTransform: 'capitalize',
    },
    title: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 25,
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: 138,
        alignSelf: 'center',
        textTransform: 'capitalize',
    },
    descriptionText: {
        fontFamily: 'League Spartan',
        fontWeight: '300',
        fontSize: 14,
        lineHeight: 14,
        color: '#FFFFFF',
        textAlign: 'center',
        maxWidth: 323,
        alignSelf: 'center',
        marginTop: 31,
    },
    largeAge: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 64,
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: 87,
        textTransform: 'capitalize',
    },
    arrowContainer: {
        alignSelf: 'center',
        marginTop: 33,
        backgroundColor: '#232323'
    },

    pickerSection: {
        backgroundColor: '#B3A0FF',
        width: 391,
        height: 99,
        alignSelf: 'flex-start',
        marginTop: 23,
        position: 'relative',
    },
    pickerRow: {
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 10,
    },
    ageItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ageItemCentered: {
        // No additional styles needed
    },
    ageItemShiftLeft: {
        marginLeft: -40,
    },
    ageItemShiftRight: {
        marginRight: -40,
    },
    ageItemShiftLeftEdge: {
        marginLeft: -20,
    },
    ageItemShiftRightEdge: {
        marginRight: -20,
    },
    ageText: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 25,
        color: '#232323',
        textAlign: 'center',
        textTransform: 'capitalize',
        opacity: 0.45,
    },
    ageTextCentered: {
        fontSize: 40,
        color: '#FFFFFF',
        opacity: 1,
    },
    ageTextAdjacent: {
        fontSize: 35,
        opacity: 0.65,
    },
    ageTextEdge: {
        fontSize: 25,
        opacity: 0.45,
    },
    dividerLeft: {
        position: 'absolute',
        left: 150,
        top: -8,
        bottom: -8,
        width: 2,
        backgroundColor: '#FFFFFF',
    },
    dividerRight: {
        position: 'absolute',
        right: 150,
        top: -8,
        bottom: -8,
        width: 2,
        backgroundColor: '#FFFFFF',
    },
    continueButtonBlur: {
        width: 178.56,
        height: 44,
        borderRadius: 100,
        borderWidth: 0.5,
        borderColor: '#FFFFFF',
        backgroundColor: 'rgba(255, 255, 255, 0.09)',
        alignSelf: 'center',
        marginTop: 163,
        overflow: 'hidden',
    },
    continueButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    continueButtonText: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: 'center',
        textTransform: 'capitalize',
    },
});
