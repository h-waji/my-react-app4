import { Header } from "../atoms/layout/Header";

export const HeaderTemplate = (props) => {
    const { children } = props;
    return (
        <>
            <Header />
            {children}
        </>
    );
};
