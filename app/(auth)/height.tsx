import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { BlurView } from 'expo-blur';
import { ArrowBackIcon } from '../../src/shared/components/icons';
import ArrowUpIndicator from '../../src/shared/components/icons/ArrowUpIndicator';

const ITEM_HEIGHT = 74.2; // Height of each item
const MIN_HEIGHT = 140;
const MAX_HEIGHT = 220;

export default function HeightScreen() {
  const [selectedHeight, setSelectedHeight] = useState<number>(150);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleBack = () => {
    router.back();
  };

  const handleContinue = () => {
    console.log('Continue pressed with height:', selectedHeight);
    router.push('/(auth)/goal');
  };

  // Generate all heights from MIN to MAX
  const generateAllHeights = () => {
    const heights = [];
    for (let h = MAX_HEIGHT; h >= MIN_HEIGHT; h -= 5) {
      heights.push(h);
    }
    return heights;
  };

  const allHeights = generateAllHeights();

  // Scroll to initial height (150) on mount
  useEffect(() => {
    const initialIndex = allHeights.indexOf(150);
    if (initialIndex !== -1 && scrollViewRef.current) {
      setTimeout(() => {
        scrollViewRef.current?.scrollTo({
          y: initialIndex * ITEM_HEIGHT,
          animated: false,
        });
      }, 100);
    }
  }, []);

  // Handle scroll to update selected height

  // Generate tick marks for the vertical ruler
  const generateRulerMarks = () => {
    const marks = [];
    
    // Define vertical positions (in percentage from top) for vertical ruler
    const topLinePos = 25;       // Top main line (1/4 down)
    const centerLinePos = 50;    // Center line (middle)
    const bottomLinePos = 75;    // Bottom main line (3/4 down)
    
    // Small tick spacing (percentage)
    const smallTickSpacing = 5;
    
    // 1. Top main line (46px width, 2px height - horizontal line)
    marks.push({
      key: 'main-top',
      type: 'main',
      width: 46,
      height: 2,
      top: topLinePos,
      color: '#FFFFFF',
    });
    
    // 2. Bottom main line (46px width, 2px height - horizontal line)
    marks.push({
      key: 'main-bottom',
      type: 'main',
      width: 46,
      height: 2,
      top: bottomLinePos,
      color: '#FFFFFF',
    });
    
    // 3. Center highlighted line (56px width, 3px height, yellow - horizontal line)
    marks.push({
      key: 'center-highlight',
      type: 'center',
      width: 56,
      height: 3,
      top: centerLinePos,
      color: '#E2F163',
    });
    
    // 4. Small ticks above center line (4 ticks)
    for (let i = 1; i <= 4; i++) {
      marks.push({
        key: `tick-above-center-${i}`,
        type: 'small',
        width: 24,
        height: 2,
        top: centerLinePos - (i * smallTickSpacing),
        color: '#FFFFFF',
        opacity: 0.8,
      });
    }
    
    // 5. Small ticks below center line (4 ticks)
    for (let i = 1; i <= 4; i++) {
      marks.push({
        key: `tick-below-center-${i}`,
        type: 'small',
        width: 24,
        height: 2,
        top: centerLinePos + (i * smallTickSpacing),
        color: '#FFFFFF',
        opacity: 0.8,
      });
    }
    
    // 6. Small ticks above top main line (4 ticks)
    for (let i = 1; i <= 4; i++) {
      marks.push({
        key: `tick-above-top-${i}`,
        type: 'small',
        width: 24,
        height: 2,
        top: topLinePos - (i * smallTickSpacing),
        color: '#FFFFFF',
        opacity: 0.8,
      });
    }
    
    // 7. Small ticks below bottom main line (4 ticks)
    for (let i = 1; i <= 4; i++) {
      marks.push({
        key: `tick-below-bottom-${i}`,
        type: 'small',
        width: 24,
        height: 2,
        top: bottomLinePos + (i * smallTickSpacing),
        color: '#FFFFFF',
        opacity: 0.8,
      });
    }
    
    return marks;
  };

  const rulerMarks = generateRulerMarks();

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <ArrowBackIcon />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>What Is Your Height?</Text>

      {/* Description */}
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      {/* Large Height Display */}
      <View style={styles.largeHeightContainer}>
        <Text style={styles.largeHeight}>{selectedHeight}</Text>
        <Text style={styles.unitLabel}>cm</Text>
      </View>

      {/* Height Picker Section (Vertical) - Three Column Layout */}
      <View style={styles.pickerSection}>
        {/* Left Column: Height Numbers with ScrollView */}
        <View style={styles.leftNumbersWrapper}>
          <ScrollView
            ref={scrollViewRef}
            showsVerticalScrollIndicator={false}
            snapToInterval={ITEM_HEIGHT}
            decelerationRate="fast"
            scrollEventThrottle={16}
            contentContainerStyle={styles.scrollContent}
          >
            {allHeights.map((height) => {
              const isSelected = height === selectedHeight;
              const diff = Math.abs(height - selectedHeight);
              const isAdjacent = diff === 5;
              
              let heightStyle = styles.heightItemEdge;
              if (isSelected) heightStyle = styles.heightItemCenter;
              else if (isAdjacent) heightStyle = styles.heightItemAdjacent;

              return (
                <TouchableOpacity
                  key={`height-${height}`}
                  style={styles.heightTouchable}
                  onPress={() => setSelectedHeight(height)}
                  activeOpacity={0.7}
                >
                  <Text style={heightStyle}>
                    {height}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* Center Column: Purple Bar with Ruler Marks */}
        <View style={styles.purpleBar}>
          {/* Ruler Marks */}
          <View style={styles.rulerMarksContainer}>
            {rulerMarks.map((mark) => (
              <View
                key={mark.key}
                style={[
                  styles.rulerMark,
                  {
                    width: mark.width,
                    height: mark.height,
                    top: `${mark.top}%`,
                    backgroundColor: mark.color,
                    opacity: mark.opacity !== undefined ? mark.opacity : 1,
                  },
                ]}
              />
            ))}
          </View>
        </View>

        {/* Right Column: Arrow Indicator */}
        <View style={styles.arrowIndicatorContainer}>
          <View style={{ transform: [{ rotate: '-90deg' }] }}>
            <ArrowUpIndicator width={34} height={24} fill="#E2F163" />
          </View>
        </View>
      </View>

      {/* Continue Button */}
      <View style={styles.continueButtonContainer}>
        <BlurView intensity={7} style={styles.continueButtonBlur}>
          <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </BlurView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323',
    paddingHorizontal: 24,
    paddingTop: 60,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 70,
    left: 24,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10,
  },
  backText: {
    fontSize: 15,
    color: '#E2F163',
    fontFamily: 'League Spartan',
    fontWeight: '600',
    marginLeft: 8,
    textTransform: 'capitalize',
  },
  title: {
    fontSize: 25,
    fontFamily: 'Poppins',
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 63,
    marginBottom: 12,
    textTransform: 'capitalize',
  },
  description: {
    fontSize: 14,
    fontFamily: 'League Spartan',
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center',
    width: 323,
    marginTop: 21,
    marginBottom: 20,
    lineHeight: 14,
  },
  largeHeightContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  largeHeight: {
    fontSize: 64,
    fontFamily: 'Poppins',
    fontWeight: '700',
    color: '#FFFFFF',
    marginRight: 8,
    textAlign: 'center',
  },
  unitLabel: {
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    textTransform: 'capitalize',
    opacity: 0.65,
    
  },
  pickerSection: {
    width: '100%',
    height: 371,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    marginHorizontal: -24,
  },
  leftNumbersContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginRight: 20,
   
    height: 371,
  },
  leftNumbersWrapper: {
    height: 371,
    overflow: 'hidden',
  },
  scrollContent: {
    paddingVertical: (371 - ITEM_HEIGHT) / 2,
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  heightTouchable: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 74.2, // 371 / 5
  },
  heightItemCenter: {
    fontSize: 40,
    fontFamily: 'Poppins',
    fontWeight: '700',
    color: '#FFFFFF',
    opacity: 1,
    textAlign: 'center',
  },
  heightItemAdjacent: {
    fontSize: 35,
    fontFamily: 'Poppins',
    fontWeight: '700',
    color: '#FFFFFF',
    opacity: 0.65,
    textAlign: 'center',
    
  },
  heightItemEdge: {
    fontSize: 25,
    fontFamily: 'Poppins',
    fontWeight: '700',
    color: '#FFFFFF',
    opacity: 0.45,
    textAlign: 'center',
    
  },
  purpleSection: {
    width: 371,
    height: 87,
    backgroundColor: '#B3A0FF',
    borderRadius: 10,
    position: 'relative',
    overflow: 'visible',
    transform: [{ rotate: '-90deg' }],
   
  },
  purpleBar: {
    width: 87,
    height: 371,
    backgroundColor: '#B3A0FF',
    borderRadius: 10,
    position: 'relative',
    overflow: 'visible',
  },
  tickMarksContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tickMark: {
    position: 'absolute',
    height: 2,
    opacity: 0.8,
    transform: [{ translateX: -1 }],
  },
  rulerMarksContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rulerMark: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    transform: [{ translateY: -1 }],
  },
  arrowContainer: {
    width: 34,
    height: 24,
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIndicatorContainer: {
    width: 34,
    height: 24,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  arrowShape: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 16,
    borderBottomWidth: 16,
    borderLeftWidth: 0,
    borderRightWidth: 24,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: '#E2F163',
    transform: [{ rotate: '-90deg' }],
  },
  continueButtonContainer: {
    position: 'absolute',
    bottom: 60,
    width: 178.56,
    height: 44,
    borderRadius: 50,
    overflow: 'hidden',
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // Android shadow
    elevation: 4,
  },
  continueButtonBlur: {
    flex: 1,
    borderColor: '#FFFFFF',
    overflow: 'hidden',
    width: 178.56,
    height: 44,
    borderRadius: 100,
    borderWidth: 0.5,
    backgroundColor: 'rgba(255, 255, 255, 0.09)',
    alignSelf: 'center',
    margin: 0,
  },
  continueButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButtonText: {
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});
