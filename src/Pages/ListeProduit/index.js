
import React, { useState } from "react";
import axios from "axios";
import _ from "lodash";
import { Box, Container,Typography } from "@material-ui/core";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import ListeProduits from "./ListeProduits";
const data = [
  {
    img: "https://st.depositphotos.com/1035350/2983/i/600/depositphotos_29836689-stock-photo-mt-fuji-in-the-autumn.jpg",
    prix: "10000 px",
  },
  {
    img: "https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg",
    prix: "10000 px",
  },
  {
    img: "https://www.presse-citron.net/app/uploads/2018/11/meilleure-banque-image.jpg",
    prix: "10000 px",
  },
  {
    img: "https://www.slazzer.com/static/images/home-page/car-image-design-maker.jpg",
    prix: "10000 px",
  },
  {
    img: "https://st.depositphotos.com/1035350/2983/i/600/depositphotos_29836689-stock-photo-mt-fuji-in-the-autumn.jpg",
    prix: "10000 px",
  },
  {
    img: "https://deep-image.ai/assets/image-realestate.ea3f2c18.webp",
    prix: "10000 px",
  },
];

const data2 = [
  {
    img: "https://st.depositphotos.com/1035350/2983/i/600/depositphotos_29836689-stock-photo-mt-fuji-in-the-autumn.jpg",
  },
  {
    img: "https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0249/6376/files/pixnio_2eca23e2-54c0-416f-b8f2-10bc88368e76.jpg?v=1557631143",
  },
  {
    img: "https://lenergeek.com/wp-content/uploads/2019/11/france-image-marche-energie-degrade-LEnergeek.jpg",
  },
];



  const data4 = [
    {
      img: "https://cdn.vox-cdn.com/thumbor/9hdtBmrkm8ZWoxyVWQq-zfSr81M=/0x0:2019x1346/1200x1200/filters:focal(1004x1140:1005x1141)/cdn.vox-cdn.com/uploads/chorus_asset/file/22863269/vpavic_210916_4760_0069.jpg",
    },
    {
      img: "https://cdn.vox-cdn.com/thumbor/SJcmPEheS_cbdujd4zbIPTpuXfg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13315959/akrales_181019_3014_0770.jpg",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_AcnK74ZiZlkHIifSU0NOhDoiR_VgI2Z9Qg&usqp=CAU",
    },
    {
      img: "https://www.androidauthority.com/wp-content/uploads/2021/12/Best-Smartphone-Cameras-2021-lined-up.jpg",
    },
    {
      img: "https://expertphotography.b-cdn.net/wp-content/uploads/2021/08/best-camera-phone-photo-street.jpg",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLJZT6RVC62BfkUQhd2RfzT_qlcLA4vJhcIg&usqp=CAU",
    },
   
  ];
const ListeProduit = (props) => {
  const initialState = []
  const [listcategorie, setListCategorie] = useState(initialState)
  const [listcategorie1, setListCategorie1] = useState(initialState)
  React.useEffect(() => {
    async function fetchData() {
      const key = props.match.params.key;
      try {
        const response = await axios.get(`http://localhost:8000/sousCategorie?slug=${key}`)
        setListCategorie(response.data)
        setListCategorie1(response.data)
        // }
      } catch (err) {}
    }
    fetchData()
  }, [])
  // console.log(listcategorie)


  const cotegories = _.groupBy(
    listcategorie.filter((categorie) => {
      return categorie;
    }),
    "title"
  );
  console.log(cotegories);

  return (
    <>
      <Container maxWidth="xlg">
      <Box mt={4} mb={4}>
          <ListeProduits cotegories={cotegories} />
        </Box>
        {/* <Grid container spacing={3}>
          {data.map((liste) => (
            <Grid item md={2} sm={3} xs={6}>
              <Card1 liste={liste} />
            </Grid>
          ))}
        </Grid> */}
         {/*
        <Box mt={3}/>
        <Typography style={{fontSize:"30px"}}>Les meilleurs produitsff</Typography>
        <Grid container spacing={3}>
          {data4.map((liste) => (
            <Grid item md={2} sm={3} xs={12}>
              <Card4 liste={liste} />
            </Grid>
          ))}
        </Grid>
        <Box mt={3}/>
        <Typography style={{fontSize:"30px"}}>Les meilleurs produits</Typography>

        <Grid container spacing={3}>
          {data2.map((liste) => (
            <Grid item md={6} sm={6} xs={12}>
              <Card2 liste={liste} />
            </Grid>
          ))}
        </Grid>
        <Box mt={3}/>
          <Typography style={{fontSize:"30px"}}>Les meilleurs produits</Typography>
        <Grid container spacing={3}>
          {data.map((liste) => (
            <Grid item md={3} sm={4} xs={6}>
              <Card3 liste={liste} />
            </Grid>
          ))}
        </Grid>
        <Box mt={3}/>
        <Typography style={{fontSize:"30px"}}>Les meilleurs produitsff</Typography>
        <Grid container spacing={3}>
          {data4.map((liste) => (
            <Grid item md={2} sm={3} xs={12}>
              <Card4 liste={liste} />
            </Grid>
          ))}
        </Grid>
        <Box mt={5}/> */}
      </Container>
    </>
  );
}
export default ListeProduit;
