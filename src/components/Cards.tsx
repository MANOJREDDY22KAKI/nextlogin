import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
  Box,
} from "@mui/material";

const Cards = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop : "20px", color : "black" }}>
      <Card sx={{ maxWidth: 400 ,color : "chocolate" }}>
        <CardMedia
          sx={{ height: 300 }}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSWin4sgmMA2Fm_Wcmmq5U8WqBAJeMxvE4QA&s"
          title="product image"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display : "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
          >
            Lawn Mower, 139 CC 4 Stroke, Self Propelled Petrol Engine, 20" Cutting Blade
          </Typography>
          <Typography
            variant="body2"
            sx={{
                textAlign: "center",
                fontWeight: "bold",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display : "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
            }}
          >
            Lawn Mower, 139 CC 4 Stroke, Self Propelled Petrol Engine, 20" Cutting Blade
          </Typography>
        </CardContent>
        <CardActions content="center">
            <Button sx={{width : "50%"}} variant="contained" size="small" color="primary">Add to Cart</Button>
            <Button sx={{width : "50%"}} variant="contained" size="small" color="primary">Share</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Cards;
