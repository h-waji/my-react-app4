import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";

const user = {
  name: "Obama",
  image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca",
  email: "hoge@example.com",
  phone: "090-1111-2222",
  company: {
    name: "Hogegle",
  },
  url: "https://example.com"
};

export const App = () => {
  return (
    <div>
      <PrimaryButton>open</PrimaryButton>
      <br />
      <SecondaryButton>closed</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
};
