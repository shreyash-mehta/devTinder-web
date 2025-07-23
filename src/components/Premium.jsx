import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Premium = () => {
  const handleBuyClick = async (type) => {
    const order = await axios.post(
      BASE_URL + "/payment/create",
      {
        membershipType: type,
      },
      { withCredentials: true }
    );

    const { amount, keyId, orderId, currency, notes } = order.data;

    const options = {
      key: keyId,
      amount,
      currency,
      name: "devTinder",
      description: "This is a transaction to puchase devTinder premium",
      order_id: orderId,
      prefill: {
        name: notes.firstName + " " + notes.lastName,
        email: notes.emailId,
      },
      theme: {
        color: "#F37254",
      },
    };
    // this will open the razorpay dialogue box...
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  return (
    <div className="m-10 ">
      <div className="flex w-full">
        <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
          <h1 className="font-bold text-3xl">Silver Membership</h1>
          <ul>
            <li>Chat with others</li>
            <li>100 connection requests per day</li>
            <li>Blue Tick</li>
            <li>3 months</li>
          </ul>
          <button
            className="btn btn-secondary text-black"
            onClick={() => handleBuyClick("silver")}
          >
            Buy Silver
          </button>
        </div>
        <div className="divider divider-horizontal">OR</div>
        <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
          <h1 className="font-bold text-3xl">Gold Membership</h1>
          <ul>
            <li>Chat with others</li>
            <li>infinite connection requests per day</li>
            <li>Blue Tick</li>
            <li>6 months</li>
          </ul>
          <button
            className="btn btn-primary text-black"
            onClick={() => handleBuyClick("gold")}
          >
            Buy Gold
          </button>
        </div>
      </div>
    </div>
  );
};

export default Premium;
