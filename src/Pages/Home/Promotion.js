import React from "react";
import Cards from "../../components/Cards";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { formatMoney } from "../../utils/common";


const Promotion = ({ liste }) => {
    
    console.log(liste);
    return (
        <>
            <Cards image={liste.photo} links={`/DetailProduit/${liste.id}`} />
            <Box pt={2}/>
            <Link href={`/DetailProduit/${liste.id}`} underline="none">
                <Typography gutterBottom variant="h5" color="text.secondary" component="div">
                   {formatMoney(liste.price)} GNF
                </Typography>
            </Link>
            <Link href={`/DetailProduit/${liste.id}`} underline="hover">
                <Typography variant="body2" >
                   {liste.description}
                </Typography>
            </Link>
            <Link href={`/DetailProduit/${liste.id}`} underline="none">
                <Typography variant="body1" color="text.secondary" >
                   {liste.descri}
                </Typography>
            </Link>
        </>
    );
}
export default Promotion;
