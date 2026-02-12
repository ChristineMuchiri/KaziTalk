import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FEATURES = [
  { icon: '🧳', label: 'Stories' },
  { icon: '☆', label: 'Ratings' },
  { icon: '↗', label: 'Trends' },
  { icon: '◉', label: 'Anonymous' },
];

const Bubble = ({ text, style }) => (
  <View style={[styles.bubble, style]}>
    <Text style={styles.bubbleText}>{text}</Text>
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F7F5F4" />

      <View style={styles.page}>
        <View style={styles.logoRow}>
          <View style={styles.logoIcon}>
            <Text style={styles.logoIconText}>◌</Text>
          </View>
          <Text style={styles.logoText}>KaziTalk</Text>
        </View>

        <View style={styles.heroCard}>
          <Bubble text='⭐ "Great culture!"' style={styles.bubbleLeftTop} />
          <Bubble text='↗ "Fair pay? Hmm..."' style={styles.bubbleRightTop} />
          <Bubble text='🛡️ "Safe space ✋"' style={styles.bubbleLeftMid} />

          <View style={styles.centerBadge}>
            <Text style={styles.centerBadgeText}>•••</Text>
          </View>

          <View style={styles.peopleRow}>
            <Text style={styles.person}>🧑🏾‍💻</Text>
            <Text style={styles.person}>🧑🏼‍💼</Text>
            <Text style={styles.person}>👩🏽‍💼</Text>
            <Text style={styles.person}>👩🏿‍💻</Text>
          </View>
        </View>

        <Text style={styles.headline}>
          Real Work. Real{`\n`}Voices. <Text style={styles.headlineAccent}>Your Story{`\n`}Matters.</Text>
        </Text>

        <Text style={styles.subheadline}>
          Share work stories, rate workplaces, see trends —{`\n`}safely and anonymously.
        </Text>

        <View style={styles.featuresRow}>
          {FEATURES.map((item) => (
            <View key={item.label} style={styles.featureItem}>
              <View style={styles.featureIconWrap}>
                <Text style={styles.featureIcon}>{item.icon}</Text>
              </View>
              <Text style={styles.featureLabel}>{item.label}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity activeOpacity={0.85} style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Sign Up / Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.85} style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Try Anonymously</Text>
        </TouchableOpacity>

        <Text style={styles.privacyText}>🔒 Your identity is always protected</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F5F4',
  },
  page: {
    flex: 1,
    backgroundColor: '#F7F5F4',
    paddingHorizontal: 22,
    paddingTop: 10,
    paddingBottom: 20,
  },
  logoRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 18,
    gap: 10,
  },
  logoIcon: {
    width: 42,
    height: 42,
    borderRadius: 16,
    backgroundColor: '#F28C3C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoIconText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    marginTop: -2,
  },
  logoText: {
    fontSize: 39,
    fontWeight: '700',
    color: '#152238',
    letterSpacing: 0.2,
  },
  heroCard: {
    height: 480,
    borderRadius: 24,
    backgroundColor: '#F2DEBD',
    paddingTop: 26,
    overflow: 'hidden',
    marginBottom: 22,
    borderWidth: 1,
    borderColor: '#EDD7B5',
  },
  bubble: {
    backgroundColor: '#F7F7F7',
    borderRadius: 20,
    paddingVertical: 9,
    paddingHorizontal: 14,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
    zIndex: 5,
  },
  bubbleText: {
    color: '#5D6379',
    fontSize: 20,
    fontWeight: '500',
  },
  bubbleLeftTop: { left: 16, top: 16 },
  bubbleRightTop: { right: 12, top: 28 },
  bubbleLeftMid: { left: 22, top: 98 },
  centerBadge: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 8,
    borderColor: '#F2675E',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 44,
    backgroundColor: '#FFDEB8',
  },
  centerBadgeText: {
    color: '#1A2A3D',
    fontWeight: '700',
    letterSpacing: 2,
  },
  peopleRow: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 8,
    paddingBottom: 14,
    gap: 5,
  },
  person: {
    fontSize: 94,
  },
  headline: {
    textAlign: 'center',
    fontWeight: '800',
    color: '#1E283E',
    fontSize: 61,
    lineHeight: 72,
    marginBottom: 12,
  },
  headlineAccent: {
    color: '#EC7F45',
  },
  subheadline: {
    textAlign: 'center',
    color: '#76819C',
    fontSize: 33,
    lineHeight: 44,
    marginBottom: 22,
  },
  featuresRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 26,
  },
  featureItem: {
    alignItems: 'center',
    width: '24%',
    gap: 8,
  },
  featureIconWrap: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#ECE7E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureIcon: {
    fontSize: 24,
    color: '#7580A1',
  },
  featureLabel: {
    color: '#7380A3',
    fontSize: 16,
    fontWeight: '500',
  },
  primaryButton: {
    height: 62,
    borderRadius: 31,
    backgroundColor: '#EF7A4D',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 34,
  },
  secondaryButton: {
    height: 62,
    borderRadius: 31,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },
  secondaryButtonText: {
    color: '#252B3A',
    fontWeight: '600',
    fontSize: 36,
  },
  privacyText: {
    textAlign: 'center',
    color: '#7484A3',
    fontSize: 22,
  },
});