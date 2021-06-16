import { useDispatch, useSelector } from "react-redux";
import { paymentInfoActions } from "../redux/payment/slice";
import { IPaymentInfo, IReduxSate } from "../types";

const usePaymentInfo = () => {
  const dispatch = useDispatch();
  const { reset, updates } = paymentInfoActions;
  const paymentInfo = useSelector<IReduxSate, IPaymentInfo>(
    (state) => state.paymentInfo
  );

  const resetpaymentInfo = () => {
    dispatch(reset());
  };

  const updatepaymentInfo = (data: Partial<IPaymentInfo>) => {
    dispatch(updates(data));
  };
  return { resetpaymentInfo, updatepaymentInfo, paymentInfo };
};

export default usePaymentInfo;
