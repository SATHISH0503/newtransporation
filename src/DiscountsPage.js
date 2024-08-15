import React from 'react';
import './DiscountsPage.css';

const DiscountsPage = ({userType}) => {
  const discounts = [
    {
      title: 'Tyre',
      discount: '13%',
      description: `Our premium range of tyres offers unmatched durability and performance.
      Whether you're looking for tyres for your car, truck, or motorcycle, we have a wide selection to choose from.
      With 13% off on all tyre purchases, now is the perfect time to upgrade your vehicle's tyres.
      Our tyres are designed to provide excellent traction in all weather conditions.
      Don't miss out on this limited-time offer. Visit our store or order online to take advantage of this amazing discount.`,
      imageUrl: '/mrftyre.png',
    },
    {
      title: 'Fuel',
      discount: '6 Rupee Discount per liter',
      description: `Fuel up your vehicle at a lower cost with our special discount.
      Enjoy a discount of 6 rupees per liter on your next fuel purchase at our partnered gas stations.
      This offer is valid for a limited time only, so make sure to fill up your tank soon.
      Our fuel is of the highest quality, ensuring optimal performance for your vehicle.
      Save money on your daily commute or long road trips with this exclusive offer.`,
      imageUrl: '/2374.jpg',
    },
    {
      title: 'Spare Parts',
      discount: '26%',
      description: `Keep your vehicle running smoothly with our high-quality spare parts.
      We offer a wide range of spare parts for all makes and models of vehicles.
      With a 26% discount on all spare parts, you can maintain your vehicle without breaking the bank.
      Our spare parts are sourced from reputable manufacturers and come with a warranty for your peace of mind.
      Whether you need engine parts, brake components, or accessories, we have it all.
      Take advantage of this limited-time offer and ensure your vehicle is always in top condition.`,
      imageUrl: '/spareparts.jpg',
    },
    {
      title: 'Insurance',
      discount: '100%',
      description: `Protect your vehicle with our comprehensive insurance plans.
      For a limited time, get 100% off on your vehicle insurance premium.
      Our insurance plans cover a wide range of incidents, including accidents, theft, and natural disasters.
      With our 24/7 customer support, you can rest assured that help is always available when you need it.
      This offer is available for new customers only. Don't miss out on this opportunity to secure your vehicle's future.
      Visit our website or contact our customer service for more details on how to avail this offer.`,
      imageUrl: '/insurance.avif',
    },
  ];
  const discountsCust = [
    {
      title: 'Cash Back On Every Load',
      discount: '13% to 26%',
      description: `Simply place your order through our platform and receive a percentage of the order value back as cashback. It’s our way of saying thank you for choosing us. The cashback will be credited to your account and can be used towards future orders or withdrawn as cash.



Track your earnings easily and make the most of your savings. With every order, you’re not just booking transportation—you’re also saving money. Start earning cashback today and enjoy more value with each transaction!!`,
      imageUrl: '/cashback.jpg',
    },
    {
      title: 'Free Courier',
      discount: '100%',
      description: `
Enjoy free courier service with your order! Simply place your transportation order through our platform, and we’ll cover the courier fees for you. This means you can benefit from fast and reliable delivery without any extra cost. The free courier service is applied automatically when you book your order, so there’s no need to do anything extra. Take advantage of this limited-time offer and save on delivery costs while enjoying seamless, hassle-free service. Don’t miss out—experience the convenience of free courier service with your next transportation order today!`,
      imageUrl: '/corrier.avif',
    },
    
  ];

  return (
    <div className="page-container">
       {userType === 'driver' && (
        discounts.map((item, index) => (
          <div className={`discount-card ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <img className="product-image" src={item.imageUrl} alt={item.title} />
            <div className="discount-info">
              <h2 className="product-title">{item.title}</h2>
              <p className="discount-details">{item.discount}</p>
              <p className="product-description">{item.description}</p>
              <button className="cta-button">
                <i className="fas fa-shopping-cart"></i> Purchase Now
              </button>
            </div>
          </div>
        )))}
        {userType === 'customer' && (discountsCust.map((item, index) => (
          <div className={`discount-card ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <img className="product-image" src={item.imageUrl} alt={item.title} />
            <div className="discount-info">
              <h2 className="product-title">{item.title}</h2>
              <p className="discount-details">{item.discount}</p>
              <p className="product-description">{item.description}</p>
              <button className="cta-button">
                <i className="fas fa-shopping-cart"></i> Purchase Now
              </button>
            </div>
          </div>
        )))}

    </div>
  );
};

export default DiscountsPage;
