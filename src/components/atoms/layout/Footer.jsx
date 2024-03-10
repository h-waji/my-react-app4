import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
    return (
        <SFotter>
            &copy; hogegle inc.
        </SFotter>
    );
};

const SFotter = styled.footer`
    background-color: gray;
    color: white;
    text-align: center;
    padding: 8px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
`;
