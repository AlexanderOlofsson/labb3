import React, { useState, useEffect } from "react";
import ModelViewer from "./ModelViewer";
import Swal from "sweetalert2";
import "./Product.css";

const Product = () => {
  const [color, setColor] = useState("#808080");
  const [productId, setProductId] = useState<number | null>(null);
  const [colors, setColors] = useState<{ id: number; name: string; color_hex: string; price: number }[]>([]);
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/products");
        const data = await response.json();

        // Map API-response for structure (took some time but works)
        const mappedData = data.map((item: { id: number; color_name: string; color_hex: string; price: number }) => ({
          id: item.id,
          name: item.color_name,
          color_hex: item.color_hex,
          price: item.price,
        }));

        console.log("Mapped products:", mappedData);

        setColors(mappedData);
        if (mappedData.length > 0) {
          setProductId(mappedData[0].id);
          setColor(mappedData[0].color_hex);
          setPrice(mappedData[0].price);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleNotifyMe = async () => {
    if (!productId) {
      Swal.fire("Error", "No product selected!", "error");
      return;
    }

    const { value: email } = await Swal.fire({
      title: "Notify Me When Back In Stock",
      input: "email",
      inputLabel: "Enter your email address",
      inputPlaceholder: "you@example.com",
      showCancelButton: true,
      confirmButtonText: "Submit",
    });

    if (email) {
      try {
        const response = await fetch("http://localhost:5000/products/interests", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, product_id: productId }),
        });

        if (response.ok) {
          Swal.fire("Success!", `We'll notify you at ${email}!`, "success");
        } else {
          throw new Error("Failed to save interest.");
        }
      } catch (error) {
        console.error("Error saving interest:", error);
        Swal.fire("Error!", "Failed to save your interest. Please try again.", "error");
      }
    }
  };

  return (
    <div className="product-container">
      <h1 className="product-title">Designer Sofa</h1>
      <p className="product-description">
        Lorem ipsum.
      </p>
      <p className="product-price">
        <strong>Price: </strong>${price}
      </p>

      <div className="model-viewer-wrapper">
        <ModelViewer modelPath="/models/Sofa 01.glb" initialColor={color} rotationSpeed={0.001} />
      </div>

      <div className="color-picker-wrapper">
        <h3 className="color-picker-title">Pick a Color:</h3>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {colors.map(({ id, name, color_hex, price }) => (
            <button
              key={id}
              className={`color-button ${color === color_hex ? "selected" : ""}`}
              style={{ backgroundColor: color_hex }}
              onClick={() => {
                setColor(color_hex);
                setProductId(id);
                setPrice(price);
              }}
              aria-label={`Choose ${name}`}
              data-id={`color-${id}`}
            ></button>
          ))}
        </div>
      </div>

      <div className="out-of-stock">
        <button className="notify-me-button" onClick={handleNotifyMe}>
          Notify Me When It's Back
        </button>
      </div>
    </div>
  );
};

export default Product;
