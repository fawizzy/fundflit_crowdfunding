import React, { FC, FormEvent } from "react";

interface TransferProps {
  transferTokens: (to: string, amount: string) => void;
  tokenSymbol: string;
}

export const Transfer: FC<TransferProps> = ({
  transferTokens,
  tokenSymbol,
}) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const to = formData.get("to") as string;
    const amount = formData.get("amount") as string;

    if (to && amount) {
      transferTokens(to, amount);
    }
  };
  return (
    <div>
      <h4>Transfer</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Amount of {tokenSymbol}</label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="amount"
            placeholder="1"
            required
          />
        </div>
        <div className="form-group">
          <label>Recipient address</label>
          <input className="form-control" type="text" name="to" required />
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Transfer" />
        </div>
      </form>
    </div>
  );
};
