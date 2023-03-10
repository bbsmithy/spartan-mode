import { useState } from "react";
import { View, Text, TextInput } from "react-native"
import ActionInput from "../../components/ActionInput";
import { p } from "../../styles";


const PositiveActions = ({
    actionOneTitle,
    actionTwoTitle,
    actionOneScore,
    actionTwoScore,
    setActionOneTitle,
    setActionTwoTitle,
    setActionOneScore,
    setActionTwoScore
}) => {
    return (
        <View>
            <Text style={[p, {marginBottom: 25}]}>Lets get started by creating 2 positive actions (e.g Meditation, Gym) and assign a score to them.</Text>
            <ActionInput title={actionOneTitle} score={actionOneScore} onChangeTitle={setActionOneTitle} onChangeScore={setActionOneScore} />
            <ActionInput title={actionTwoTitle} score={actionTwoScore} onChangeTitle={setActionTwoTitle} onChangeScore={setActionTwoScore} />
        </View>
    )
}

export default PositiveActions;