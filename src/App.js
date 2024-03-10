// import { BrowserRouter } from "react-router-dom";
// import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
// import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
// import { SearchInput } from "./components/molecules/SearchInput";
// import { UserCard } from "./components/organisms/user/UserCard";
// import { DefaultLayout } from "./components/templates/DefaultLayout";
import { Router } from "./router/Router";

export const App = () => {
  return <Router />;
  // return (
  //   <BrowserRouter>
  //     <DefaultLayout>
  //       <PrimaryButton>open</PrimaryButton>
  //       <br />
  //       <SecondaryButton>closed</SecondaryButton>
  //       <br />
  //       <SearchInput />
  //       <UserCard user={user} />
  //     </DefaultLayout>
  //   </BrowserRouter>
  // );
};
