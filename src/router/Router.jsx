import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { DefaultLayout } from "../components/templates/DefaultLayout"
import { HeaderTemplate } from "../components/templates/HeaderTemplate"

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <DefaultLayout>
                        <Top />
                    </DefaultLayout>
                </Route>
                <Route path="/users">
                    <HeaderTemplate>
                        <Users />
                    </HeaderTemplate>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
