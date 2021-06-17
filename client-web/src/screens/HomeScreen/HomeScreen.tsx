import { Menu } from "../../components/Menu/Menu";
import { Quotes } from "../../components/Quotes/Quotes";
import Newsletter from "../../components/Newsletter/Newsletter";

export default function HomeScreen() {
  return (
    <div>
      <Menu />
      <Quotes />
      <Newsletter />
    </div>
  );
}
