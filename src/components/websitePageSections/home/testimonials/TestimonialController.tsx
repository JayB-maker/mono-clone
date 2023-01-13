import { useContext } from "react";
import { TestimonialContext } from "../../../../helper/context";
import { black, Card, primaryBlue, white } from "../../../ui/styles";

const TestimonialController = () => {
  const { isControllerClicked, setIsControllerClicked } =
    useContext(TestimonialContext);
  return (
    <Card flex justifycontent="space-between" alignitems="center">
      <Card flex gap="30px">
        <Card
          pointer
          width="15px"
          height="15px"
          bg={isControllerClicked ? "#e5e5e5" : black}
          radius="50%"
          onClick={() => setIsControllerClicked(false)}
        />
        <Card
          pointer
          width="15px"
          height="15px"
          bg={isControllerClicked ? black : "#e5e5e5"}
          radius="50%"
          onClick={() => setIsControllerClicked(true)}
        />
      </Card>
      <Card flex gap="15px" padding="0 10px 0 0">
        <Card
          pointer
          width="50px"
          height="50px"
          bg={isControllerClicked ? primaryBlue : "#f5f5f5cc"}
          radius="50%"
          onClick={() => setIsControllerClicked(false)}
          flex
          justifycontent="center"
          alignitems="center"
        >
          <i
            className="fa-solid fa-arrow-left"
            style={{
              color: `${isControllerClicked ? white : "#727272"}`,
              fontWeight: "700",
            }}
          />
        </Card>
        <Card
          pointer
          width="50px"
          height="50px"
          bg={isControllerClicked ? "#f5f5f5cc" : primaryBlue}
          radius="50%"
          onClick={() => setIsControllerClicked(true)}
          flex
          justifycontent="center"
          alignitems="center"
        >
          <i
            className="fa-solid fa-arrow-right"
            style={{
              color: `${isControllerClicked ? "#727272" : white}`,
              fontWeight: "700",
            }}
          />
        </Card>
      </Card>
    </Card>
  );
};

export default TestimonialController;
