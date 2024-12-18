import React, { useState, useEffect } from "react";
import ModelViewer from "./ModelViewer";
import Swal from "sweetalert2";
import "./Product.css";

const Product = () => {
  const [color, setColor] = useState("#808080");
  const [colorName, setColorName] = useState("Green");
  const [productId, setProductId] = useState<number | null>(null);
  const [colors, setColors] = useState<{ id: number; name: string; color_hex: string; price: number }[]>([]);
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/products");
        const data = await response.json();

        const mappedData = data.map((item: { id: number; color_name: string; color_hex: string; price: number }) => ({
          id: item.id,
          name: item.color_name,
          color_hex: item.color_hex,
          price: item.price,
        }));

        setColors(mappedData);
        if (mappedData.length > 0) {
          setProductId(mappedData[0].id);
          setColor(mappedData[0].color_hex);
          setColorName(mappedData[0].name);
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
          throw new Error("Failed to save interest. Really cba");
        }
      } catch (error) {
        console.error("Error saving interest:", error);
        Swal.fire("Error!", "Failed to save your interest. Please try again. Sad.", "error");
      }
    }
  };

  return (
    <div className="product-container">
      <div className="product-header">
        <h1 className="main-title">Enclaire</h1>
        <h3 className="main-subtitle">Quality, sofas and more</h3>
      </div>

      <div className="product-layout">
        {/* 3D Model Viewer on the left */}
        <div className="model-viewer-wrapper">
          <ModelViewer modelPath="/models/Sofa 01.glb" initialColor={color} rotationSpeed={0.001} />
        </div>

        {/* Product info on the right, also using br is kind of cheating ngl */}
        <div className="product-info-wrapper">
          <div className="product-info">
            <h2 className="product-title">Our Featured Collection</h2>
            <h3 className="product-subtitle">Designer Sofa</h3>
            <p className="product-description">
            <p className="product-description">
              Create a stylish and comfortable home with our Designer Sofa. This high-quality sofa combines modern design with unmatched comfort, making it perfect for any living room. With its sleek lines and exceptional materials, this sofa will be the centerpiece of your home.
              <br />
              It features soft, well-padded cushions for extra comfort and a sturdy frame that ensures long-lasting durability. Choose from a variety of stylish colors to match your decor and add a personal touch to your space.
              <br />
              Whether you're unwinding after a long day or hosting guests, our Designer Sofa will provide both style and comfort.
            </p>
            </p>

            <h3 className="color-picker-title">{colorName}</h3>

            <div className="color-picker-container">
              {colors.map(({ id, name, color_hex, price }) => (
                <button
                  key={id}
                  className={`color-button ${color === color_hex ? "selected" : ""}`}
                  style={{ backgroundColor: color_hex }}
                  onClick={() => {
                    setColor(color_hex);
                    setColorName(name);
                    setProductId(id);
                    setPrice(price);
                  }}
                  data-id={`color-${id}`}
                ></button>
              ))}
            </div>


            <div className="product-price-container">
              <button className="notify-me-button" onClick={handleNotifyMe}>
               <span> Notify Me When It's Back</span>
              </button>
              <p className="product-price">
                <strong>Price: </strong>${price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
