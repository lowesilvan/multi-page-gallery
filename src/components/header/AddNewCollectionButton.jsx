import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AddNewCollectionButton = () => {
  return (
    <Link to="/dashboard">
      <Button size="sm" rounded="md">
        Add Collection
      </Button>
    </Link>
  );
};

export default AddNewCollectionButton;
