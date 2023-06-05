import { Favorite, FitScreen, Share } from "@mui/icons-material";
import { Stack } from "@mui/material";
import UseDialogModel from "../../hooks/UseDailogModel";
import { Product, ProductActionButton, ProductActionWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/products";
import ProductDetails from "../ProductDetails";
import ProductMeta from "./ProductMeta";

export default function SingleProduct({product,matches}){
  const[ProductDetailDialog,showProductDetailDialog,closeProductDetailDialog] = UseDialogModel(ProductDetails);
    return(
      <>
      <Product>
        <ProductImage src={product.image} />
        <ProductMeta product={product} matches={matches} />
        <ProductActionWrapper>
          <Stack direction={'row'}>
            <ProductFavButton isFav ={0}>
              <Favorite color="secondary"/>
            </ProductFavButton>
            <ProductActionButton>
              <Share color="seccondary" />
            </ProductActionButton>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <FitScreen color="secondary"/>
            </ProductActionButton>
          </Stack>
        </ProductActionWrapper>
      </Product>
      <ProductAddToCart variant='contained'
      sx={{color:'white'}}
      >
        ADD TO CART
      </ProductAddToCart>

      <ProductDetailDialog product = {product} />
      </>
    )
} 