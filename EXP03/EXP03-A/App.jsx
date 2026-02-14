import ProductCard from "./ProductCard";

function App() {
  const products = [
    {
      title: "Wireless Headphones",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80",
      inStock: true,
    },
    {
      title: "Mechanical Keyboard",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=1000&q=80",
      inStock: false,
    },
    {
      title: "Smart Watch",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80",
      inStock: true,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        padding: "60px 20px",
        justifyContent: "center",
        flexWrap: "wrap",
        background: "linear-gradient(135deg, #f5f7fa, #e9edf4)",
        minHeight: "100vh",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
      }}
    >
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}

export default App;
