import { Divider, Pagination, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import Loading from "../../Components/Shared/Loading";
import usePageCount from "../../Hooks/usePageCount";
import useProducts from "../../Hooks/useProducts";
import Tools from "./Tools";

const Products = ({ size, p }) => {
  const [page, setPage] = React.useState(p || 1);
  const { count, counting, recount } = usePageCount(size || 12);
  const { products, productsLoading, refetchProducts } = useProducts(
    page,
    size || 12
  );
  useEffect(() => {
    refetchProducts();
  }, [page, recount, refetchProducts]);
  if (productsLoading || counting) {
    return <Loading />;
  }
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container maxWidth={"xl"} sx={{ my: 8, textAlign: "center" }} className="space-y-5 ">
      <Typography variant="h4">Our Products</Typography>
      <Divider sx={{ mx: 30, mt: 2 }} />
      <Tools products={products} />
      <Pagination
        sx={{ display: "flex", justifyContent: "center" }}
        count={count}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </Container>
  );
};

export default Products;
