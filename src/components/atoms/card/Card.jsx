import styled from "styled-components";

export const Card = (props) => {
    const { children } = props;
    return (
        <SCard>{children}</SCard>
    );
};

const SCard = styled.div`
    background-color: white;
    box-shadow: #ddd 0px 0px 12px 8px;
    border-radius: 16px;
    padding: 16px;
    margin: 16px;
`;
