import axios from "axios";
import { useEffect, useState } from "react";
import { IPlanServerResponse, IPlansServerResponse } from "../types";

export const useSubscriptionPlans = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [plans, setPlans] = useState<IPlanServerResponse[]>([]);

  const getPlans = async () => {
    axios
      .get<IPlansServerResponse>(
        "https://cloud-storage-prices-moberries.herokuapp.com/prices"
      )
      .then((res) => {
        setPlans(res.data.subscription_plans);
        setError("");
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Oops, something went wrong");
        setPlans([]);
        setLoading(false);
      });
  };

  useEffect(() => {
    getPlans();
  }, []);

  return { plans, getPlans, loading, error };
};

export const useMakeSubscription = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(undefined);

  const makeSubscription = (data: any) => {
    setLoading(true);
    setData(undefined);
    axios
      .post("https://httpbin.org/post", {
        data,
      })
      .then((res) => {
        setError("");
        setData(res.data || {});
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Oops, something went wrong");
        setLoading(false);
      });
  };

  return { loading, error, data, makeSubscription };
};
