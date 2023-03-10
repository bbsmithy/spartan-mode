import { View, Text } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import ActionInput from "../../components/ActionInput";
import { setNegativeActionScore, setNegativeActionTitle } from "../../state/reducers/OnboardingReducer";
import { getNegativeActionScore, getNegativeActionTitle } from "../../state/selectors/OnboardingSelectors";
import { p } from "../../styles";


const NegativeActions = () => {

    const dispatch = useDispatch();

    const negativeActionTitle = useSelector(getNegativeActionTitle);
    const negativeActionScore = useSelector(getNegativeActionScore);


    return (
        <View>
            <Text style={[p, {marginBottom: 25}]}>Now create 1 neative action (e.g Drinking) and assign a negative score.</Text>
            <ActionInput 
                title={negativeActionTitle} 
                score={negativeActionScore} 
                onChangeTitle={(text) => {
                    dispatch(setNegativeActionTitle(text))
                }} 
                onChangeScore={(text) => {
                    dispatch(setNegativeActionScore(text))
                }}
            />
            {/* <Text>Lets get started by creating 2 positive actions you like to do (e.g Meditation, Gym) and assign a score to them</Text> */}
        </View>
    )
}

export default NegativeActions;