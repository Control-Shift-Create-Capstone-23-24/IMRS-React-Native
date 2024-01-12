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
        <TouchableOpacity onPress={onPress} style={{...styles.container, width, height, margin, backgroundColor}}>
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