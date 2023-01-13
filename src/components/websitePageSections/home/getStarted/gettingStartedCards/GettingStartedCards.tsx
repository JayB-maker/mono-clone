import {
  gettingStartedDetails,
  gettingStartedSigleDetails,
} from "../../../../../data";
import { Card } from "../../../../ui/styles";
import ReusableCard from "./ReusableCard";

const GettingStartedCards = () => {
  return (
    <Card flex flexdirection="column" gap="20px">
      {gettingStartedSigleDetails.map((detail, index) => (
        <ReusableCard
          icon={detail.icon}
          title={detail.title}
          handle={detail.handle}
          path={detail.path}
          image={detail.image}
        />
      ))}
      <Card flex gap="20px">
        {gettingStartedDetails.map((detail, index) => (
          <ReusableCard
            icon={detail.icon}
            title={detail.title}
            handle={detail.handle}
            path={detail.path}
            image={detail.image}
          />
        ))}
      </Card>
    </Card>
  );
};

export default GettingStartedCards;
