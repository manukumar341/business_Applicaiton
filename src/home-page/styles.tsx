import styled from 'styled-components';

export const StyledTimeSlotsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    width: auto;
`;

export const StyledTimeSlot = styled.div`
    width: 150px;
    height: 50px;
    background-color: #dadb9f;
    border: 1px solid #f7e70a;
    justify-content: center;
    align-items: center;
    text-align: center;
`;