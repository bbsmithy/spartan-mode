import { View, Text } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import OnboardingActionInput from "../../components/OnboardingActionInput";
import { setNegativeActionScore, setNegativeActionTitle } from "../../state/reducers/OnboardingReducer";
import { getNegativeActionScore, getNegativeActionTitle } from "../../state/selectors/OnboardingSelectors";
import { p } from "../../styles";


const NegativeActions = () => {

    const dispatch = useDispatch();

    const negativeActionTitle = useSelector(getNegativeActionTitle);
    const negativeActionScore = useSelector(getNegativeActionScore);


    return (
        <View>
            <Text style={[p, {marginBottom: 25}]}>Now create 1 negative action (e.g Drinking) and assign a negative score.</Text>
            <OnboardingActionInput 
                title={negativeActionTitle} 
                score={negativeActionScore}
                minus
                canChangeSign={false}
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