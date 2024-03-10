import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIcon } from "../../molecules/user/UserIcon";

export const UserCard = (props) => {
    const { user } = props;
    return (
        <Card>
            <UserIcon image={user.image} name={user.name} />
            <Dl>
                <dt>Mail</dt>
                <dd>{user.email}</dd>
                <dt>TEL</dt>
                <dd>{user.phone}</dd>
                <dt>Company</dt>
                <dd>{user.company.name}</dd>
                <dt>WEB</dt>
                <dd>{user.url}</dd>
            </Dl>
        </Card>
    );
};

const Dl = styled.dl`
    text-align: left;
    margin-bottom: 0px;
    dt {
        float: left;
    }
    dd {
        padding-left: 48px;
        padding-bottom: 8px;
        overflow-wrap: break-word;
    }
`;