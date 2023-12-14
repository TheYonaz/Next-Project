import React from "react";
// import styles from "./PhotoGrid.module.css"; // Adjust the path as necessary
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const category = context.query.category || "sports";
    const res = await fetch(
      `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}&per_page=9`
    );
    const data = await res.json();

    if (!res.ok) {
      throw new Error(`Error fetching data: ${res.status}`);
    }

    console.log(data.hits);
    return { props: { photos: data.hits } };
  } catch (error) {
    console.error("Failed to fetch photos:", error);
    return { props: { photos: [] } }; // Return empty array or handle the error as needed
  }
};

export interface Photo {
  id: string;
  previewURL: string;
  tags: string;
}

interface PhotoGridProps {
  photos: Photo[];
}

export const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
  if (!photos) {
    return <div>Loading...</div>; // Or any other fallback UI
  }
  return (
    <div>
      {photos.map((photo) => (
        <img
          key={photo.id}
          src={photo.previewURL}
          alt={photo.tags}
          //   className={styles.photo}
        />
      ))}
    </div>
  );
};

export default PhotoGrid;
