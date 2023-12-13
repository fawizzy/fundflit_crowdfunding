import React, { FC } from "react";

interface WaitingForTransactionMessageProp {
  txHash: string;
}
export const WaitingForTransactionMessage: FC<
  WaitingForTransactionMessageProp
> = ({ txHash }) => {
  return (
    <div className="alert alert-info" role="alert">
      Waiting for transaction <strong>{txHash}</strong> to be mined
    </div>
  );
};
