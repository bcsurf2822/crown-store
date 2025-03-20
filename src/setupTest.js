import "@testing-library/jest-dom";  
import "jest-extended";


import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";


afterEach(() => {
  cleanup();
});