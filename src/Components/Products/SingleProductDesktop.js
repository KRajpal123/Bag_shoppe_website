import { Favorite, FitScreen, Share } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { useState } from "react";
import { Product, ProductActionButton, ProductActionWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/products";
import ProductMeta from "./ProductMeta";
import ProductDetails from "../ProductDetails";
import UseDialogModel from "../../hooks/UseDailogModel";

export default function SingleProductDesktop({product,matches}){
  const[showOptions,setShowOptions] = useState(false);

  const HandleMouseEnter = () =>{
    setShowOptions(true);
  }

  const HandleMouseLeave = () =>{
    setShowOptions(false);
  }
  const[ProductDetailDialog,showProductDetailDialog,closeProductDetailDialog] = UseDialogModel(ProductDetails);
    return(
      <>
      <Product onMouseEnter={HandleMouseEnter} onMouseLeave={HandleMouseLeave}>
        <ProductImage src={product.image} />
        <ProductFavButton isFav={0}>
          <Favorite />
        </ProductFavButton>
        {
        showOptions && <ProductAddToCart variant="contained" show={showOptions}>
          Add To Cart
        </ProductAddToCart>
        }
        
        <ProductActionWrapper show={showOptions}>
          <Stack direction={'column'}>
            <ProductActionButton>
              <Share color="secondary" />
            </ProductActionButton>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <FitScreen color="secondary"/>
            </ProductActionButton>
          </Stack>
        </ProductActionWrapper>
      </Product>
      <ProductMeta product={product} matches={matches} />
      <ProductDetailDialog product = {product} />
      </>
    )
} 