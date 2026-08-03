import QuotationMaker from "../quotation/QuotationMaker";
import InvoiceMaker from "./InvoiceMaker";


export default function Home() {
  return (
    <main>
    <QuotationMaker />
      <InvoiceMaker />
    </main>
  );
}