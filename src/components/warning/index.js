import { useState } from "react";

import { WarningContainer } from "./style";

export default function Warning() {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      {open && (
        <WarningContainer>
          <div>
            <h1>E-commerce | TCC</h1>
          </div>
          <div>
            <button onClick={handleOpen}>Fechar</button>
          </div>
        </WarningContainer>
      )}
    </>
  );
}
