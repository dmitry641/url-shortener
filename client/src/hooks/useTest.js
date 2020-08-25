import React, { useState } from "react";

export default function useTest(initialState) {
  const [state, setState] = useState(initialState);
  return [state, setState];
}
