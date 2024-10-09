import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const articles = [
        { 
          id: '1', 
          title: 'NASA’s SpaceX Crew-7 Mission Successfully Launches', 
          description: 'NASA and SpaceX successfully launched their Crew-7 mission, sending astronauts to the ISS.', 
          image: 'https://picsum.photos/200' 
        },
        { 
          id: '2', 
          title: 'Google Unveils Pixel 8 with New AI Features', 
          description: 'Google’s Pixel 8 features cutting-edge AI capabilities, including photo enhancements and voice commands.', 
          image: 'https://picsum.photos/200' 
        },
        { 
          id: '3', 
          title: 'Climate Change Summit 2024: World Leaders Address Global Warming', 
          description: 'World leaders gathered to discuss action plans for climate change and reducing global carbon emissions.', 
          image: 'https://picsum.photos/seed/picsum/200/300' 
        },
        { 
          id: '4', 
          title: 'Lionel Messi Wins Record 8th Ballon d\'Or', 
          description: 'Lionel Messi has won his 8th Ballon d\'Or, further cementing his legacy as one of the greatest football players of all time.', 
          image: 'https://picsum.photos/seed/picsum/200/300' 
        },
        { 
          id: '5', 
          title: 'Apple Announces Vision Pro: A New Era of Spatial Computing', 
          description: 'Apple’s Vision Pro introduces spatial computing with augmented reality capabilities, revolutionizing the tech industry.', 
          image: 'https://picsum.photos/seed/picsum/200/300' 
        }
];

export default function HomeScreen() {
  return (
    <FlatList
      data={articles}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.articleContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  articleContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
});
