import {useDispatch} from "react-redux";
import {AppDispatch} from "./store";

//Хук для того, чтобы не использовать часто useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()