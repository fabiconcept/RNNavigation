import { View, Text, StyleSheet, Pressable, SafeAreaView, StatusBar } from 'react-native';
import { Link } from 'expo-router';

export default function index() {
  return (
    <SafeAreaView style={[styles.container, styles.safeConatiner]}>
      <Link href={"/explore"} style={styles.url} asChild>
        <Pressable style={styles.btn} onPress={()=>console.log("Pressed!")} >
          <Text style={{marginHorizontal: "auto", color: "#fff"}}>
            Explore
          </Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeConatiner: {
    paddingTop: StatusBar.currentHeight
  },  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "plum"
  },
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