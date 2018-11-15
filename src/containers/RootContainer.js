// @flow
import React from 'react'
import { Text, SafeAreaView, StyleSheet, View, ScrollView, TouchableHighlight, Image } from 'react-native'

// components
import { RoundedButton } from '../components'
import { Colors } from '../themes'
import { bold } from 'ansi-colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  strong: {
    fontWeight: "bold",
  },
})

const doSomething = () => {
  alert("(Im)pressed")
}


export default class RootContainer extends React.PureComponent<null> {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Image source={require("../../assets/img1.jpg")} />

        <TouchableHighlight onPress={doSomething}>
          <Text style={styles.strong}>Do something</Text>
        </TouchableHighlight>

        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio facilisis mauris sit amet. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Diam volutpat commodo sed egestas egestas. Faucibus pulvinar elementum integer enim neque. Id aliquet lectus proin nibh nisl. Amet est placerat in egestas erat imperdiet sed. Aliquet eget sit amet tellus cras adipiscing. Ultrices mi tempus imperdiet nulla malesuada. Volutpat blandit aliquam etiam erat velit. Aliquam faucibus purus in massa tempor. Morbi quis commodo odio aenean. Massa eget egestas purus viverra accumsan in nisl. Vitae aliquet nec ullamcorper sit amet risus nullam. Proin fermentum leo vel orci porta non. Condimentum vitae sapien pellentesque habitant. Massa tincidunt dui ut ornare lectus sit amet. Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Scelerisque eu ultrices vitae auctor eu. Facilisis mauris sit amet massa vitae tortor condimentum lacinia.
          Vestibulum rhoncus est pellentesque elit. Scelerisque eu ultrices vitae auctor. Faucibus in ornare quam viverra orci sagittis eu. Consectetur purus ut faucibus pulvinar. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Lacus luctus accumsan tortor posuere ac ut consequat. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Tempor commodo ullamcorper a lacus vestibulum. Tortor at risus viverra adipiscing at. Duis convallis convallis tellus id interdum velit laoreet. Diam in arcu cursus euismod quis viverra. Cras semper auctor neque vitae tempus quam pellentesque. At volutpat diam ut venenatis tellus in metus vulputate. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. A cras semper auctor neque vitae tempus quam pellentesque nec. Sit amet tellus cras adipiscing enim eu turpis egestas. Justo nec ultrices dui sapien eget. Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Enim neque volutpat ac tincidunt vitae. Porttitor massa id neque aliquam vestibulum morbi blandit.
        </Text>
        </ScrollView>
    )
  }
}
