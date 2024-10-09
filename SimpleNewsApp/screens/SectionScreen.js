import React from 'react';
import { View, Text, SectionList, Image, StyleSheet } from 'react-native';

const sections =[
        { 
          title: 'Sports', 
          data: [
            { id: '1', title: 'Sports Article 1', description: 'Latest football news', image: 'https://picsum.photos/200' },
            { id: '2', title: 'Sports Article 2', description: 'Tennis championship highlights', image: 'https://picsum.photos/200' }
          ]
        },
        { 
          title: 'Technology', 
          data: [
            { id: '3', title: 'Tech Article 1', description: 'New smartphone releases', image: 'https://picsum.photos/200' },
            { id: '4', title: 'Tech Article 2', description: 'AI in healthcare', image: 'https://picsum.photos/200' }
          ]
        },
        { 
          title: 'Health', 
          data: [
            { id: '5', title: 'Health Article 1', description: 'Benefits of a balanced diet', image: 'https://picsum.photos/200' },
            { id: '6', title: 'Health Article 2', description: 'Mental health awareness', image: 'https://picsum.photos/200' }
          ]
        },
        { 
          title: 'Business', 
          data: [
            { id: '7', title: 'Business Article 1', description: 'Stock market trends', image: 'https://picsum.photos/200' },
            { id: '8', title: 'Business Article 2', description: 'Startups to watch', image: 'https://picsum.photos/200' }
          ]
        },
        { 
          title: 'Entertainment', 
          data: [
            { id: '9', title: 'Entertainment Article 1', description: 'Latest movie reviews', image: 'https://picsum.photos/200' },
            { id: '10', title: 'Entertainment Article 2', description: 'Music industry updates', image: 'https://picsum.photos/200' }
          ]
        },
        { 
          title: 'Science', 
          data: [
            { id: '11', title: 'Science Article 1', description: 'Mars exploration mission', image: 'https://picsum.photos/200' },
            { id: '12', title: 'Science Article 2', description: 'Climate change research', image: 'https://picsum.photos/200' }
          ]
        },
        { 
          title: 'Travel', 
          data: [
            { id: '13', title: 'Travel Article 1', description: 'Top 10 destinations in 2024', image: 'https://picsum.photos/200' },
            { id: '14', title: 'Travel Article 2', description: 'Budget-friendly travel tips', image: 'https://picsum.photos/200' }
          ]
        },
        { 
          title: 'Lifestyle', 
          data: [
            { id: '15', title: 'Lifestyle Article 1', description: 'Minimalist living trends', image: 'https://picsum.photos/200' },
            { id: '16', title: 'Lifestyle Article 2', description: 'Productivity hacks for 2024', image: 'https://picsum.photos/200' }
          ]
        }
];

const SectionScreen = () => {
  return (
    <SectionList
      sections={sections}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  );
};


const styles = StyleSheet.create({
  item: { flexDirection: 'row', padding: 10, alignItems: 'center' },
  image: { width: 100, height: 100, marginRight: 10 },
  textContainer: { flex: 1 },
  title: { fontWeight: 'bold', fontSize: 16 },
  header: { fontWeight: 'bold', fontSize: 20, padding: 10, backgroundColor: '#f0f0f0' },
});
export default SectionScreen;