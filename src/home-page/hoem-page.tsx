import { useCallback } from "react";
import { StyledTimeSlotsWrapper, StyledTimeSlot } from './styles';

export function HomePage() {


    const getTimeSlots = useCallback(() => {
        const timeSlots = ['9 - 9am', '9 - 12 am', '12 - 3pm', '3 - 6pm', '6 - 9pm'];
        return (
            <>
                {timeSlots.map((slot) => (<StyledTimeSlot>{slot}</StyledTimeSlot>))}
            </>
        );
    }, []);

    return (<StyledTimeSlotsWrapper>
        {getTimeSlots()}
    </StyledTimeSlotsWrapper>)
}
