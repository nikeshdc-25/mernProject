import React from "react";
import {
  useAddProductMutation,
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../slices/productSlice";
import { Row, Col, Button, Table } from "react-bootstrap";
import { FaEdit, FaPlusCircle, FaTrash } from "react-icons/fa";
import Message from "../../components/Message";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const [addProduct, { isLoading: productLoading, refetch }] =
    useAddProductMutation();
  const [deleteProduct, { isLoading: productDelete }] =
    useDeleteProductMutation();

  const addProductHandler = async () => {
    try {
      let res = await addProduct().unwrap();
      toast.success(res.message);
      refetch();
    } catch (err) {
      toast.error(err.data.error);
    }
  };

  const deleteProductHandler = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      try {
        let res = await deleteProduct(id).unwrap();
        toast.success(res.message);
        refetch();
      } catch (err) {
        toast.error(err.data.error);
      }
    }
  };

  return (
    <>
      <Row className="align-items-center mb-3">
        <Col>
          <h3>Products</h3>
        </Col>
        <Col className="text-end">
          <Button size="sm" variant="dark" onClick={addProductHandler}>
            <FaPlusCircle className="mb-1" /> Create Product
          </Button>
        </Col>
      </Row>
      <>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <Message variant="danger">{error.data.error}</Message>
        ) : (
          <Table responsive hover striped className="table-sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Stock</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.brand}</td>
                  <td>{product.category}</td>
                  <td>{product.countInStock}</td>
                  <td>
                    <Button
                      as={Link}
                      size="sm"
                      variant="light"
                      to={`/admin/products/${product._id}/edit`}
                    >
                      <FaEdit />
                    </Button>
                    <Button
                      size="sm"
                      variant="danger"
                      className="ms-2"
                      onClick={() => deleteProductHandler(product._id)}
                    >
                      <FaTrash style={{ color: "white" }} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </>
    </>
  );
};

export default ProductsPage;
