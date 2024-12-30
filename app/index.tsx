import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function index() {
  return (
    <View>
      <Link href={"/explore"} style={styles.url} asChild>
        <Pressable style={styles.btn} ><Text style={{marginHorizontal: "auto", color: "#fff"}}>index 20</Text></Pressable>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    padding: 20,
    backgroundColor: "#435235",
    borderRadius: 12,
    alignItems: "center"
  },
  url: {
    padding: 10,
  }
})