import { HeadContainer, HeadContent } from "./style";

import Head1 from "../../assets/head/head1.png";

import Head2 from "../../assets/head/head2.png";

export default function Head() {
  return (
    <HeadContainer>
      <HeadContent>
        <div>
          <h2>Women</h2>
          <img src={Head1} alt="Head 1" />
          <p>Dioptric | Sunglasses</p>
        </div>
        <div>
          <h2>Men</h2>
          <img src={Head2} alt="Head 1" />
          <p>Dioptric | Sunglasses</p>
        </div>
      </HeadContent>
    </HeadContainer>
  );
}
