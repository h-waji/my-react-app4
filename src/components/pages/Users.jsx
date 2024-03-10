import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
    return {
        id: val,
        name: `Obama${val}`,
        image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca",
        email: "hoge@example.com",
        phone: "090-1111-2222",
        company: {
        name: "Hogegle",
        },
        url: "https://example.com"
    }
});

export const Users = () => {
    return (
        <Container>
            <h2>Users list</h2>
            <SearchInput />
            <UserArea>
                {users.map((user) => (
                    <UserCard key={users.id} user={user} />
                ))};
            </UserArea>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
`;

const UserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 16px;
`;
