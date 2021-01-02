import React from 'react';
import {Text, View} from 'react-native';
import {Link} from 'react-router-native';

const LibraryScreen = () => {
  return (
    <View>
      <Link
        to={`/`}
      >
        <Text>Home</Text>
      </Link>
      <Link
        to={`/dictionary`}
      >
        <Text>Dictionary</Text>
      </Link>
      <Text>Its dict</Text>
    </View>
  );
};

export default LibraryScreen;
