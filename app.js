import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView, 
  FlatList, 
  SafeAreaView 
} from 'react-native';


const DATA = [
  { id: '1', titre: 'Tour Eiffel', image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=200', pays: 'France' },
  { id: '2', titre: 'Colisée', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=200', pays: 'Italie' },
  { id: '3', titre: 'Santorin', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=200', pays: 'Grèce' },
];


const Item = ({ titre, image, pays }) => (
  <View style={styles.card}>
    <Image source={{ uri: image }} style={styles.cardImage} />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{titre}</Text>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{pays}</Text>
      </View>
    </View>
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <ScrollView stickyHeaderIndices={[0]}>
        
       
        <View style={styles.header}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800' }} 
            style={styles.bannerImage} 
          />
          <View style={styles.bannerTextContainer}>
            <Text style={styles.title}>Explorez le Monde</Text>
            <Text style={styles.description}>Découvrez des destinations incroyables pour vos prochaines vacances.</Text>
          </View>
        </View>

      
        <View style={styles.listSection}>
          <Text style={styles.sectionTitle}>Destinations Populaires</Text>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <Item titre={item.titre} image={item.image} pays={item.pays} />
            )}
            keyExtractor={item => item.id}
            scrollEnabled={false} 
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// 4. Styles avancés et Flexbox [cite: 16]
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
  },
  bannerImage: {
    width: '100%',
    height: 200, 
  },
  bannerTextContainer: {
    padding: 20, 
    alignItems: 'center', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
  listSection: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  // Optimisation des cartes : bordures et ombres [cite: 15]
  card: {
    flexDirection: 'row', // Alignement horizontal 
    backgroundColor: '#fff',
    borderRadius: 15, 
    marginBottom: 15,
    overflow: 'hidden',
    // Ombres pour iOS et Android
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    width: 100,
    height: 100,
  },
  cardContent: {
    flex: 1,
    padding: 10,
    justifyContent: 'center', // Centrage vertical 
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  badge: {
    marginTop: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#e3f2fd',
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  badgeText: {
    color: '#1976d2',
    fontSize: 12,
    fontWeight: 'bold',
  },
});