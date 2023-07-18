import { Keyboard } from "react-native";
import { useEffect, useState } from "react"

const useKeyboardListener = (initialBtnPos: number) => {

    const [btnPosY, setBtnPosY] = useState(initialBtnPos);

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardWillShow', (evt) => {
            setBtnPosY(evt.endCoordinates.height)
        });
        const hideSubscription = Keyboard.addListener('keyboardWillHide', () => {
          setBtnPosY(initialBtnPos)
        });
        return () => {
          showSubscription.remove();
          hideSubscription.remove();
        };
    }, []);

    return btnPosY;

}

export default useKeyboardListener;