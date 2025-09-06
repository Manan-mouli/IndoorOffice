// src/Pages/Products.jsx
import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import {products_list } from "../HardCoded_data/products_list";

// Product Card
function ProductCard({ v }) {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h5 className="card-title">
          <strong>Team:</strong> {v.Tname}
        </h5>
        <p className="card-text">
          <strong>Product:</strong> {v.product}
        </p>
        <p className="card-text">
          <strong>Completed:</strong> {v.completed}
        </p>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <Sidebar />

          {/* Main content */}
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Products</h1>
            </div>

            {/* Grid row for products */}
            <div className="row">
              {products_list.map((p, i) => (
                <div className="col-md-4 col-sm-6" key={i}>
                  <ProductCard v={p} />
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
