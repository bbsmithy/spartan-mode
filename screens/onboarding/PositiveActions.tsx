import { View, Text } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import ActionInput from "../../components/ActionInput";
import { setActionOneScore, setActionOneTitle, setActionTwoScore, setActionTwoTitle } from "../../state/reducers/OnboardingReducer";
import { getActionOneScore, getActionOneTitle, getActionTwoScore, getActionTwoTitle } from "../../state/selectors/OnboardingSelectors";
import { p } from "../../styles";


const PositiveActions = () => {

    const dispatch = useDispatch();

    const actionOneTitle = useSelector(getActionOneTitle);
    const actionTwoTitle = useSelector(getActionTwoTitle);
    const actionOneScore = useSelector(getActionOneScore);
    const actionTwoScore = useSelector(getActionTwoScore);


    return (
        <View>
            <Text style={[p, {marginBottom: 25}]}>Lets get started by creating 2 positive actions (e.g Meditation, Gym) and assign a score to them.</Text>
            <ActionInput 
                title={actionOneTitle} 
                score={actionOneScore} 
                canChangeSign={false}
                onChangeTitle={(text) => {
                    dispatch(setActionOneTitle(text))
                }} 
                onChangeScore={(text) => {
                    dispatch(setActionOneScore(text))
                }} 
            />
            <ActionInput 
                title={actionTwoTitle} 
                score={actionTwoScore} 
                canChangeSign={false}
                onChangeTitle={(text) => {
                    dispatch(setActionTwoTitle(text))
                }} 
                onChangeScore={(text) => {
                    dispatch(setActionTwoScore(text))
                }}
            />
        </View>
    )
}

export default PositiveActions;