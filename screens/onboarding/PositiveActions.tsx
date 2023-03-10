import { useState } from "react";
import { View, Text, TextInput } from "react-native"
import ActionInput from "../../components/ActionInput";
import { p } from "../../styles";


const PositiveActions = () => {

    const [actionOne, setActionOne] = useState<string>("")
    const [actionScore, setActionScore] = useState<string>("")

    const [actionTwo, setActionTwo] = useState<string>("")
    const [actionTwoScore, setActionTwoScore] = useState<string>("")

    const onChangeTitle = (text) => {
        setActionOne(text)
    }

    const onChangeScore = (score) => {
        setActionScore(score)
    }



    return (
        <View>
            <Text style={[p, {marginBottom: 25}]}>Lets get started by creating 2 positive actions (e.g Meditation, Gym) and assign a score to them.</Text>
            <ActionInput title={actionOne} score={actionScore} onChangeTitle={onChangeTitle} onChangeScore={onChangeScore} />
            <ActionInput title={actionTwo} score={actionTwoScore}  />


            {/* <Text>Lets get started by creating 2 positive actions you like to do (e.g Meditation, Gym) and assign a score to them</Text> */}
        </View>
    )
}

export default PositiveActions;