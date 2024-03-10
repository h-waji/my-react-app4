import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = () => {
    return (
        <Container>
            <Input placeholder="Please enter search criteria." />
            <ButtonWrapper>
                <PrimaryButton>search</PrimaryButton>
            </ButtonWrapper>
        </Container>
    );
};

const ButtonWrapper = styled.div`
    padding-left: 8px;
`;

const Container = styled.div`
    display: flex;
    aligh-items: center;
`;
