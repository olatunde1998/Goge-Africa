import FooterComponent from "components/footerComponents/FooterComponent";
import NavigationComponent from "components/navigationComponents/NavigationComponent";
// import PaymentComponent from "components/payment/PaymentComponent";
import PaymentDashboard from "components/payment/PaymentDashboard";


function Payment() {
  return (
    <div>
        <NavigationComponent/>
      {/* <PaymentComponent /> */}
      <PaymentDashboard/>
      <FooterComponent/>
    </div>
  );
}

export default Payment;
