import { renderHook } from "@testing-library/react-hooks";
import useApp from "./useApp";

describe("useApp", () => {
  describe("addOne", () => {
    it("Should add one to total", () => {
      const { result } = renderHook(() => useApp());
      const oldTotal = result.current.total;
      result.current.addOne();
      expect(result.current.total).toBe(oldTotal + 1);
    });
  });

  describe("substractOne", () => {
    it("Should substract one to total", () => {
      const { result } = renderHook(() => useApp());
      const oldTotal = result.current.total;
      result.current.substractOne();
      expect(result.current.total).toBe(oldTotal - 1);
    });
  });
});
