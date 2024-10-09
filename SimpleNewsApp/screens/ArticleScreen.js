import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

export default function ArticleScreen() {
  return (
    <ScrollView>
      <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.bannerImage} />
      <Text style={styles.title}>Full Length Article</Text>
      <Text style={styles.content}>
        This is the full content of the article. It has multiple paragraphs of text and images.
        You can keep adding more content to make it scrollable.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bannerImage: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  content: {
    fontSize: 16,
    margin: 10,
    lineHeight: 24,
  },
});
