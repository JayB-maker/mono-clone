import { Card, InnerSection, MainSection } from "../../../ui/styles";
import DigitalFinanceCards from "./digitalFinanceCard/DigitalFinanceCards";
import DigitalFinanceHeading from "./DigitalFinanceHeading";

const DigitalFinance = () => {
  return (
    <MainSection width="100%">
      <InnerSection>
        <Card flex flexdirection="column" gap="80px" padding="30px 0 100px">
          <DigitalFinanceHeading />
          <DigitalFinanceCards />
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default DigitalFinance;
