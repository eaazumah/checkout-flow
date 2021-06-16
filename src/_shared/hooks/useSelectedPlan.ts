import { useDispatch, useSelector } from "react-redux";
import { planActions } from "../redux/plan/slice";
import { IPlan, IReduxSate } from "../types";

const useSelectedPlan = () => {
  const dispatch = useDispatch();
  const { reset, updates } = planActions;
  const state = useSelector<IReduxSate, IPlan>((state) => state.plan);

  const resetPlan = () => {
    dispatch(reset());
  };

  const updatePlan = (data: Partial<IPlan>) => {
    dispatch(updates(data));
  };
  return { resetPlan, updatePlan, ...state };
};

export default useSelectedPlan;
