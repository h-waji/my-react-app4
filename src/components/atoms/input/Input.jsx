import styled from "styled-components";

export const Input = (props) => {
    const { placeholder = "" } = props;
    return <SInput type="text" placeholder={placeholder} />;
};

const SInput = styled.input`
    width: 300px;
    padding: 8px 16px;
    border: solid gray 2px;
    border-radius: 16px;
    outline: none;
`;
