import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Carousel = () => {
  const images = [
    "https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2Fbf2f4077-f535-4195-9efb-52756a98070f%2FUntitled.png?table=block&id=89bfc120-2c14-43d7-9470-835afc89abb2&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1420&userId=&cache=v2",
    "https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F4d6ff0c5-fb06-41e2-91ea-611a6b227c8f%2FUntitled.png?table=block&id=a49515d9-58bb-4c79-833d-f50cddb5d455&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=2000&userId=&cache=v2",
    "https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F8b5aca2f-a69d-45ae-b403-a1a7db496f98%2FUntitled.png?table=block&id=ad352b03-5c03-471b-a134-d6f2c7ffcb9b&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=660&userId=&cache=v2",
    "https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2Fb2acb8fa-6443-46ee-86a2-273a39052de0%2FUntitled.png?table=block&id=bd3796d2-fdcc-4ac9-a332-df1afcae5f67&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1920&userId=&cache=v2",
    "https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F1b1f0650-faa3-4ad8-83a8-cb8546080154%2FUntitled.png?table=block&id=5d8b0f6e-1a90-4603-99ca-5f82cd31bdc6&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1920&userId=&cache=v2",
    "https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F8d4778b9-ed18-4713-92a0-2b103a6132fb%2FUntitled.png?table=block&id=d49c90c4-479b-479f-ac52-976832cde6ca&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1420&userId=&cache=v2",
    "https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F855fd03b-cb37-4e2c-8214-fef34086a412%2FUntitled.png?table=block&id=ac349807-48b8-4bb7-ad5b-3602ca7fa421&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=800&userId=&cache=v2",
    "image3.jpg",
    // Add more image URLs as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const goToNextSlide = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  // Function to go to the previous slide
  const goToPrevSlide = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  // Effect to automatically advance to the next slide
  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 3000); // Change interval as needed (3000 milliseconds = 3 seconds)
    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [currentIndex]);

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel">
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === currentIndex ? "active" : ""}
            aria-current={index === currentIndex ? "true" : "false"}></button>
        ))}
      </div>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            } carousel-image`}>
            <img
              src={image}
              className="d-block w-100  "
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
        onClick={goToPrevSlide}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
        onClick={goToNextSlide}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
