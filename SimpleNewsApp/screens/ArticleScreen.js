import React from 'react';
import { Text, ScrollView, Image, StyleSheet } from 'react-native';

export default function ArticleScreen({route}) {
  const {article} = route.params;
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: article.image }} style={styles.bannerImage} />
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.content}>
        {article.description}
        {'\n\n'}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        {'\n\n'}
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  bannerImage: {
    width: '100%',
    height: 250,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});
