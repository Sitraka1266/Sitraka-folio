import { useState, useEffect } from "react";

function HiddenDateInput() {
  const [now, setNow] = useState("");

  useEffect(() => {
    setNow(new Date().toISOString()); // format ISO complet
  }, []);

  return <input type="hidden" value={now} name="time" />;
}

export default HiddenDateInput;
