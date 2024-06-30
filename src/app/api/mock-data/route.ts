import { NextResponse } from "next/server";

const data = {
  categories: [
    {
      title: "fasdfasdfas",
      image:
        "https://th.bing.com/th/id/R.accf354f6bc40a246191c9036a76c3f5?rik=SusVoysXkS75DA&pid=ImgRaw&r=0",
    },
    {
      title: "fasdfasdffasdfasfas",
      image:
        "https://th.bing.com/th/id/R.accf354f6bc40a246191c9036a76c3f5?rik=SusVoysXkS75DA&pid=ImgRaw&r=0",
    },
    {
      title: "fasdfasdfasd",
      image:
        "https://th.bing.com/th/id/R.accf354f6bc40a246191c9036a76c3f5?rik=SusVoysXkS75DA&pid=ImgRaw&r=0",
    },
    {
      title: "fasdfascet",
      image:
        "https://th.bing.com/th/id/R.accf354f6bc40a246191c9036a76c3f5?rik=SusVoysXkS75DA&pid=ImgRaw&r=0",
    },
    {
      title: "Urine Bag",
      image:
        "https://th.bing.com/th?id=OIP.CBFZpMOFqyCjyHOJxouwVAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    { title: "Medical Tube", image: "/images/medical-tube.svg" },
  ],
  products: [
    {
      productType: "HealthCare",
      name: "Name Product",
      price: "$14.99",
      originalPrice: "$20.99",
      image: "/images/sarasoft-ag.png",
      rating: 4.5,
      discount: 50,
    },
    {
      productType: "HealthCare",
      name: "Sarasoft AG",
      price: "$14.99",
      originalPrice: "$20.99",
      image: "/images/sarasoft-ag.png",
      rating: 4.5,
      discount: 0,
    },
    {
      productType: "HealthCare",
      name: "Sarasoft AG",
      price: "$14.99",
      originalPrice: "$20.99",
      image: "/images/sarasoft-ag.png",
      rating: 4.5,
      discount: 20,
    },
    {
      productType: "HealthCare",
      name: "Sarasoft AG",
      price: "$14.99",
      originalPrice: "$20.99",
      image: "/images/sarasoft-ag.png",
      rating: 4.5,
      discount: 50,
    },
    {
      productType: "HealthCare",
      name: "Sarasoft AG",
      price: "$14.99",
      originalPrice: "$20.99",
      image: "/images/sarasoft-ag.png",
      rating: 4.5,
      discount: 0,
    },
    {
      productType: "HealthCare",
      name: "Sarasoft AG",
      price: "$14.99",
      originalPrice: "$20.99",
      image: "/images/sarasoft-ag.png",
      rating: 4.5,
      discount: 20,
    },
    {
      productType: "HealthCare",
      name: "Sarasoft AG",
      price: "$14.99",
      originalPrice: "$20.99",
      image: "/images/sarasoft-ag.png",
      rating: 4.5,
      discount: 50,
    },
    {
      productType: "HealthCare",
      name: "Sarasoft AG",
      price: "$14.99",
      originalPrice: "$20.99",
      image: "/images/sarasoft-ag.png",
      rating: 4.5,
      discount: 0,
    },
    // Add more products as needed
  ],
  blogs: [
    {
      date: "18 Nov",
      image: "/images/blog-01.png",
      excerpt:
        "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    },
    {
      date: "18 Nov",
      image: "/images/blog-02.png",
      excerpt:
        "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    },
    {
      date: "18 Nov",
      image: "/images/blog-03.png",
      excerpt:
        "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    },
  ],
  logos: [
    { name: "steps", src: "/images/steps.png", alt: "Steps Logo" },
    { name: "mango", src: "/images/food.png", alt: "Mango Logo" },
    { name: "food", src: "/images/mango.png", alt: "Food Logo" },
    { name: "Group", src: "/images/group.png", alt: "Group Logo" },
    {
      name: "book-off",
      src: "bookoff-corporation-logo.png",
      alt: "Book-Off Logo",
    },
    { name: "gseries", src: "/images/group.png", alt: "G Series Logo" },
  ],
};

export async function GET() {
  return NextResponse.json(data);
}
