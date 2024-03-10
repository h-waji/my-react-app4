import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";

export const App = () => {
  return (
    <div>
      <PrimaryButton>open</PrimaryButton>
      <br />
      <SecondaryButton>closed</SecondaryButton>
      <br />
      <SearchInput />
    </div>
  );
};
