import React from "react"
import { StyleSheet, Text } from "react-native"

const styles = StyleSheet.create({
  title: {
    color: "#ff0000",
  },
})

export default class Title extends React.PureComponent<Props> {
  render() {
    const { children, onPress } = this.props
    return <Text style={styles.title}>{children}</Text>
  }
}
