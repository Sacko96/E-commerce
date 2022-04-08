import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Hidden, makeStyles } from "@material-ui/core";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  img: {
    height: "350px",
    display: "block",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "150px",
    },
  },
}));

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://www.turbo.fr/sites/default/files/styles/article_690x405/public/2021-01/Pub%20Peugeot%20208.jpg?itok=OrL-bs4j",
  },
  {
    label: "Bird",
    imgPath:
      "https://www.benefsnet.com/img/info/roulez-fute.jpg",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://i.f1g.fr/media/madame/704x/sites/default/files/img/2015/04/la-representation-sexiste-des-femmes-dans-la-publicite_0.jpg",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://lvdneng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2019/10/11/node_650179/41120247/public/2019/10/11/B9721213369Z.1_20191011115201_000%2BG0DELR615.1-0.jpg?itok=X5a0QxVB1570787551",
  },
];

function Slider() {
  const theme = useTheme();
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    
    <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  className={classes.img}
                  sx={{}}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <Box display="flex" justifyContent="center" mt={2} mb={2}>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
          />
        </Box>
    </Box>
  );
}

export default Slider;
