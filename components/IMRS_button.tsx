import {TouchableOpacity, StyleSheet, Text} from "react-native";

interface Props {
    title: string,
    backgroundColor: string,
    onPress: () => {},
    color: string,
}
const IMRS_Button = (Props) => {
    const {title, backgroundColor, onPress, color, width, height, margin} = Props
    return (
        <TouchableOpacity onPress={onPress} style={{...styles.container, width, height, margin}}>
            <Text style={{...styles.text, color}}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        borderWidth: 2,
        shadowColor: "black",
        shadowOffset: {
            width: -10,
            height: 10
        },
        shadowOpacity: 2.28,
        shadowRadius: 15.25,
        elevation: 22,
    },
    text: {
        alignItems: "center",
        fontWeight: 'bold',
        letterSpacing: 1,
        fontSize: 15
    }
})

IMRS_Button.defaultProps = {
    title: '',
    backgroundColor: 'red',
    onPress: () => {},
    color: 'black',
    width: '50%',
    height: 45,
    margin: 5,
}
export default IMRS_Button