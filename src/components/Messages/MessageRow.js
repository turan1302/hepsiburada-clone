import React from 'react';
import { View, Text, Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles, { colors } from '../../screens/Messages/styles';

const MessageIcon = ({ item }) => {
  if (item.iconFamily === 'text') {
    return (
      <Text style={{ color: colors.white, fontSize: 20, fontWeight: '800' }}>
        {item.icon}
      </Text>
    );
  }

  return (
    <MaterialCommunityIcons name={item.icon} size={22} color={colors.white} />
  );
};

const MessageRow = ({ item }) => (
  <Pressable style={styles.messageRow}>
    <View style={[styles.messageIcon, { backgroundColor: item.iconBg }]}>
      <MessageIcon item={item} />
    </View>

    <View style={styles.messageBody}>
      <View style={styles.messageTop}>
        <Text style={styles.messageTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.messageDate}>{item.date}</Text>
      </View>

      <View style={styles.messageBottom}>
        <Text style={styles.messageSubtitle} numberOfLines={2}>
          {item.subtitle}
          {item.subtitleBold ? (
            <Text style={styles.subtitleBold}>{item.subtitleBold}</Text>
          ) : null}
        </Text>
        <View style={[styles.badge, { backgroundColor: item.badgeColor }]}>
          <Text style={styles.badgeText}>{item.badge}</Text>
        </View>
      </View>
    </View>
  </Pressable>
);

export default MessageRow;
