import { useDispatch, useSelector } from "react-redux";
import { RootState, appDispatch } from "./store";
 
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<appDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
