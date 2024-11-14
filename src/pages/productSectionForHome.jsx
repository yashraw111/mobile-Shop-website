import { NavLink } from "react-router-dom";

const ProductListData = [
  {
    id: 1,
    name: "Battery HTR",
    price: 200.0,
    imageUrl: "src/assets/image/shop1.jpg",
    description:
      "High-quality battery designed to provide consistent and long-lasting power. Ideal for various applications, from electronic gadgets to backup power supplies. Built with advanced technology to ensure safety and reliability. Highly resistant to wear and tear, making it a durable choice. This battery is eco-friendly and complies with international safety standards. Perfect for both professional and personal use.",
    category: "Accessories",
  },
  {
    id: 2,
    name: "Cable FHG-7000",
    price: 55.0,
    imageUrl: "src/assets/image/shop2.jpg",
    description:
      "Durable USB cable compatible with multiple devices, providing high-speed data transfer and charging. Designed with a flexible and tangle-free cord for easy usage. Reinforced connectors ensure a secure fit and long-lasting durability. Ideal for use at home, office, or while traveling. Supports fast charging, making it convenient for busy schedules. The cable is built to resist everyday wear and tear.",
    category: "Cables",
  },
  
  {
    id: 3,
    name: "Charger SS-101",
    price: 2.0,
    originalPrice: 3.0,
    imageUrl: "src/assets/image/shop3.jpg",
    description:
      "Fast charging adapter suitable for various devices. Engineered to deliver optimal power output while keeping your device safe from overcharging. Compact and lightweight design makes it easy to carry. Equipped with safety features such as short-circuit protection. Compatible with a wide range of smartphones, tablets, and other gadgets. Reliable charging solution for everyday use.",
    category: "Chargers",
  },
  {
    id: 4,
    name: "Earbuds N11",
    price: 35.0,
    imageUrl: "src/assets/image/shop4.jpg",
    description:
      "Comfortable in-ear earbuds that provide crystal-clear sound quality and deep bass. Ergonomically designed to fit snugly, perfect for prolonged use. These earbuds offer noise isolation, making them ideal for immersive listening. Lightweight and easy to carry, suitable for use during workouts or travel. Compatible with most audio devices, including smartphones and laptops. Durable and resistant to sweat and minor splashes.",
    category: "Audio",
  },
  {
    id: 5,
    name: "Flash 128GB",
    price: 35.0,
    imageUrl: "src/assets/image/shop5.jpg",
    description:
      "128GB USB flash drive with high-speed data transfer capabilities, perfect for storing large files. Compact and lightweight design makes it easy to carry anywhere. Compatible with most computers and devices. Secure and reliable, suitable for both professional and personal use. Provides ample storage for documents, media files, and more. Built to withstand frequent use and transport.",
    category: "Storage",
  },
  {
    id: 6,
    name: "HDD 3TB",
    price: 333.0,
    imageUrl: "src/assets/image/shop6.jpg",
    description:
      "3TB external hard drive offering massive storage capacity for all your data. Ideal for backing up important files or storing extensive media libraries. Built with high-speed connectivity for quick file transfers. Compact and portable design, easy to carry with you. Secure and durable, ensuring long-term reliability. Compatible with both Windows and Mac systems, making it versatile.",
    category: "Storage",
  },
  {
    id: 7,
    name: "Headphones BMG300X",
    price: 180.0,
    imageUrl: "src/assets/image/shop7.jpg",
    description:
      "High-fidelity headphones designed for audiophiles. Delivers exceptional sound quality with rich bass and clear highs. Comfortable over-ear design, perfect for extended listening sessions. Adjustable headband and padded ear cups ensure a custom fit. Built-in microphone for hands-free calls and voice commands. Compatible with most devices via 3.5mm audio jack or Bluetooth.",
    category: "Audio",
  },
  {
    id: 8,
    name: "Headphones LMP55",
    price: 277.0,
    imageUrl: "src/assets/image/shop8.jpg",
    description:
      "Noise-canceling headphones that allow for immersive audio experiences. Advanced technology reduces background noise, perfect for traveling or noisy environments. Comfortable and lightweight, with adjustable headband and soft ear pads. Offers high-quality sound with balanced audio performance. Built-in microphone and controls for easy call management. Long battery life, making it suitable for all-day use.",
    category: "Audio",
  },
  {
    id: 9,
    name: "Headphones NK500",
    price: 499.0,
    imageUrl: "src/assets/image/shop9.jpg",
    description:
      "Premium quality headphones delivering superior sound clarity and deep bass. Luxurious design with cushioned ear pads for comfort. Perfect for studio work or serious audiophiles. Features advanced noise isolation for an undisturbed listening experience. Durable construction and foldable design for easy storage. Includes a detachable cable and a hard case for protection.",
    category: "Audio",
  },
];



const ProductSectionForHome = () => {
  return (
    <div className="ProductSectionHome">
      <h2 className="text-center mt-5">All Products</h2>
      <div className="horizontal-scroll-container">
        {ProductListData.map((item,index) => (
          // <div className="card" key={card.id}>
          //   <img src={card.imageUrl} alt={card.title} />
          //   <div className="card-body">
          //     <h3>{card.title}</h3>
          //   </div>
          // </div>
          <div className="col-lg-3 product-card " key={index}>
          <img
            src={item.imageUrl}
            alt={item.name}
            className="product-image"
          />
          <h5 className="product-title">{item.name}</h5>
          <p className="product-price">${item.price.toFixed(2)}</p>
          <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
            Add to cart
          </button>

          <NavLink to={`/ProductSingleView/${item.id}`}><button className="btn btn-outline-dark py-2  ms-2 mb-1">More..</button></NavLink>
        </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSectionForHome;
