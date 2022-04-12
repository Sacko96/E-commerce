
import React, { useState } from "react";
import axios from "axios";
import _ from "lodash";
import { Box, Container} from "@material-ui/core";
import ListTableau from "./ListTableau";

const ListeProduit = (props) => {
  const initialState = []
  const [emlploye, setEmploye] = useState(initialState)
  React.useEffect(() => {
    async function fetchData() {
      const key = props.match.params.key;
      // console.log(key);
      try {
        const response = await axios.get(`http://localhost:8000/emlploye`)
        setEmploye(response.data)
        // }
      } catch (err) {}
    }
    fetchData()
  }, [])


  return (
    <>
      <Container maxWidth="xlg">
      <Box mt={4} mb={4}>
          <ListTableau  emlploye={emlploye}/>
        </Box>
      </Container>
    </>
  );
}
export default ListeProduit;
