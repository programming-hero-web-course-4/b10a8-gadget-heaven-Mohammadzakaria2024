import { useContext } from "react";
import { GlobalStateContext } from "../context/GlobalStateProvider";

export default function useGlobalState() {
  const { state, dispatch } = useContext(GlobalStateContext);
  return { state, dispatch };
}
