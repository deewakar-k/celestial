import { CardsChat } from "../cards/chat";
import CardsCreateAccount from "../cards/create-account";
import CardsDataTable from "../cards/data-table";
import CardsMetric from "../cards/metric";

export default function Bento() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 p-0 max-w-5xl mx-auto">
      <div className="lg:col-span-4 flex flex-col gap-2">
        <div className="rounded-xl overflow-hidden transition-transform duration-500 ease-out hover:scale-[1.02]">
          <CardsChat />
        </div>
        <div className="rounded-xl overflow-hidden transition-transform duration-500 ease-out hover:scale-[1.02]">
          <CardsCreateAccount />
        </div>
      </div>
      <div className="lg:col-span-8 flex flex-col gap-2">
        <div className="rounded-xl overflow-hidden transition-transform duration-500 ease-out hover:scale-[1.02]">
          <CardsMetric />
        </div>
        <div className="rounded-xl overflow-hidden transition-transform duration-500 ease-out hover:scale-[1.02]">
          <CardsDataTable />
        </div>
      </div>
    </div>
  );
}
