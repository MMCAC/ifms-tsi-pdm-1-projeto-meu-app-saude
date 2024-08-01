/**
 * Esta estilização foi feito no formato JSX
 */

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    paddingTop: 20,
    backgroundColor: '#F2E3D5',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 32,
    color: '#012E40',
  },
  button: {
    backgroundColor: '#3CA6A6',
    paddingVertical: 12,
    width: 200,
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});