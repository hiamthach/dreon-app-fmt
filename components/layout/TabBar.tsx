import React from 'react';
import { Link, usePathname } from 'expo-router';

import { StyleSheet } from 'react-native';

import Icon from '@expo/vector-icons/FontAwesome5';

import Text from '@/components/shared/Text';

import View from '@/components/shared/View';
import { PRIMARY_COLOR } from '@/config/constants/theme.const';

const items = [
  {
    id: 'home',
    label: 'Home',
    link: '/',
    icon: 'home',
  },
  {
    id: 'calendar',
    label: 'Calendar',
    link: '/calendar',
    icon: 'calendar-alt',
  },
  {
    id: 'to-do',
    label: 'To-do',
    link: '/to-do',
    icon: 'tasks',
  },
  {
    id: 'flashcards',
    label: 'Flashcards',
    link: '/flashcards',
    icon: 'book',
  },
  {
    id: 'notes',
    label: 'Notes',
    link: '/notes',
    icon: 'sticky-note',
  },
];

const TabBar = () => {
  const pathname = usePathname();

  const isActive = (link: string) => {
    if (link === '/') {
      return pathname === link;
    }

    return pathname.includes(link);
  };

  return (
    <View style={styles.tabBar}>
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.link}
          style={[
            styles.tabItem,
            isActive(item.link) ? styles.tabItemActive : undefined,
          ]}
        >
          <Icon name={item.icon} size={20} />
          <Text
            variant="body"
            key={item.id}
            style={[
              styles.tabItemText,
              isActive(item.link) ? styles.tabItemActive : undefined,
            ]}
          >
            {item.label}
          </Text>
        </Link>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    boxShadow: '0px 0px .5px #171a1f, 0px 0px 1px #171a1f;',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabItem: {
    color: '#565D6D',
    paddingVertical: 2,
    paddingHorizontal: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
  },
  tabItemText: {
    color: '#565D6D',
    fontSize: 12,
  },

  tabItemActive: {
    color: PRIMARY_COLOR,
  },
});

export default TabBar;
