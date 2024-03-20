"use client";
import { classNames } from "@/utils/classNames";
import Style from "./style.module.scss";
import { TransactionMain } from "./components/TransactionMain";
import { SuccessCrossDetail, SuccessDetail } from "./components/Detail";
import MainLayout from "@/components/basic/MainLayout";
import Header from "@/components/Header";
import { useMemo } from "react";
import { ITx } from "../dashboard/page";
import dayjs from "dayjs";
import Person from "@/components/Person";

type AmountProps = { num: number | string } & StyleType;

type StatusProps = {
  type: "success" | "fail" | "pending";
  time: string;
} & StyleType;

const Status = ({ type = "success", time, className }: StatusProps) => {
  const map = {
    success: {
      style: Style.success,
      text: "Failed",
    },
    fail: {
      style: Style.fail,
      text: "Succeed",
    },
    pending: {
      style: Style.pending,
      text: "Pending",
    },
  };
  const { style, text } = map[type];
  return (
    <div className={classNames(className, Style.status, style)}>
      <div className={Style["text-left"]}>{text}</div>
      <div className={Style["text-right"]}>{time}</div>
    </div>
  );
};

export default function TransactionDetail() {
  const transactionDetail = useMemo(() => {
    let _data = sessionStorage.getItem("transaction_detail");
    if (_data) {
      return JSON.parse(_data) as ITx;
    }
    return undefined;
  }, []);

  if (!transactionDetail) {
    return (
      <MainLayout showMenu={false}>
        <div className="flex flex-col h-full">
          <Header title="Transaction Detail" showBack />
          <div className="flex-1 flex justify-center items-center font-bold text-base">
            Please select a transaction
          </div>
        </div>
      </MainLayout>
    );
  }

  const time = transactionDetail?.timeStamp
    ? dayjs(transactionDetail?.timeStamp * 1000).toLocaleString()
    : "";

  return (
    <MainLayout showMenu={false}>
      <div className="flex flex-col h-full">
        <Header title="Transaction Detail" showBack />
        <div className={classNames(Style.transaction)}>
          <div className="py-4">
            <Status className="mb-4" type={"success"} time={time}></Status>
            <div className="flex items-center justify-center border-b-1 border-gray-500/30 px-4 pb-4">
              <Person name={"You"} address={transactionDetail.from} />
              <div className="flex-1 flex flex-col items-center">
                <p className="text-[#4FAAEB] text-sm font-bold">{`${transactionDetail.value} ${transactionDetail.tokenName}`}</p>
                <svg
                  width="88"
                  height="12"
                  viewBox="0 0 88 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M88 6L78 0.226497V11.7735L88 6ZM0 7L79 7V5L0 5L0 7Z"
                    fill="#33AA5C"
                  />
                </svg>

                <p className="text-[#819DF5] text-xs">Direct Transfer</p>
              </div>
              <Person name={"Other"} address={transactionDetail.to} />
            </div>
          </div>
          <div className="flex-1">
            <div className="my-4">
              {/* <SuccessCrossDetail></SuccessCrossDetail> */}
              <SuccessDetail></SuccessDetail>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}