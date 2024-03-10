import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";

export const App = () => {
  return (
    <div>
      <PrimaryButton>open</PrimaryButton>
      <br />
      <SecondaryButton>closed</SecondaryButton>
    </div>
  );
};
