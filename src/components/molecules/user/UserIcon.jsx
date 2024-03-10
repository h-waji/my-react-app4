import styled from "styled-components";

export const UserIcon = (props) => {
    const { image, name } = props;
    return (
        <Container>
            <Img height={120} width={180} src={image} alt="profile" />
            <Name>{name}</Name>
        </Container>
    );
};

const Container = styled.div`
    text-align: center;
`;

const Img = styled.img`
    border-radius: 50%;
`;

const Name = styled.p`
    font-size: 24px;
    font-weight: bold;
    margin: 0;
    color: gray;
`;
