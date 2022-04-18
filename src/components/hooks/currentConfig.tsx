import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import utils from "../../libs/utils/utils";
import { reduxSesion } from "../../redux/actions/reduxSesion";

import { HomePaySelected } from "../pages/Home/Home";

const TAG = "useCurrentConfig";
export type CurrentConfigType = {
  homePageSelected: HomePaySelected;
};

export function useCurrentConfig() {
  const [oldData, setOldData] = useState<CurrentConfigType>({
    homePageSelected: "pay",
  });

  useSelector((store: any) => {
    try {
      const newData: CurrentConfigType = store.reducerConfig;
      if (!utils.objects.isEmpty(newData)) {
        if (newData.homePageSelected !== oldData.homePageSelected) {
          setOldData(newData);
          return newData;
        }
      }
    } catch (error) {
      console.log(TAG, error);
    }
    return null;
  });

  return oldData;
}

export function useSetCurrentConfig() {
  const dispatch = useDispatch();
  const callBack = useCallback(
    (data: CurrentConfigType) => {
      dispatch(reduxSesion.setCurrentConfig(data));
    },
    [dispatch]
  );
  return callBack;
}
