import React, { useState } from 'react';
import { View, FlatList, StatusBar } from 'react-native';
import {
  MessagesHeader,
  NotificationBanner,
  MessageRow,
  MESSAGES,
} from '../../components/Messages';
import styles from './styles';

const Messages = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <View style={styles.root}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <MessagesHeader />
      <FlatList
        data={MESSAGES}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          showBanner ? (
            <NotificationBanner onClose={() => setShowBanner(false)} />
          ) : null
        }
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <MessageRow item={item} />}
      />
    </View>
  );
};

export default Messages;
