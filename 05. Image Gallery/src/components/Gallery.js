import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useState } from "react";

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [modalOpened, setModalOpened] = useState(false);

  const images = [
    {
      link: "https://source.unsplash.com/collection/190727/800x600?1",
      class: "",
      caption: "First Img",
    },
    {
      link: "https://source.unsplash.com/collection/190727/800x600?2",
      class: "imp",
      caption: "Second Img",
    },
    {
      link: "https://source.unsplash.com/collection/190727/800x600?3",
      class: "",
      caption: "Third Img",
    },
    {
      link: "https://source.unsplash.com/collection/190727/800x600?4",
      class: "",
      caption: "Fourth Img",
    },
    {
      link: "https://source.unsplash.com/collection/190727/800x600?5",
      class: "",
      caption: "Fifth Img",
    },
    {
      link: "https://source.unsplash.com/collection/190727/800x600?6",
      class: "",
      caption: "Sixth Img",
    },
    {
      link: "https://source.unsplash.com/collection/190727/800x600?7",
      class: "",
      caption: "Seventh Img",
    },
    {
      link: "https://source.unsplash.com/collection/190727/800x600?8",
      class: "",
      caption: "Eighth Img",
    },
    {
      link: "https://source.unsplash.com/collection/190727/800x600?9",
      class: "",
      caption: "Ninth Img",
    },
  ];

  const handleBackward = () => {
    if (activeImage == 0) {
      setActiveImage(images.length - 1);
    } else {
      setActiveImage(activeImage - 1);
    }
  };

  const handleForward = () => {
    if (activeImage == images.length - 1) {
      setActiveImage(0);
    } else {
      setActiveImage(activeImage + 1);
    }
  };

  const handleImageClicked = (index) => {
    setActiveImage(index);
    setModalOpened(true);
  };
  return (
    <div className="container">
      {images.map((image, index) => (
        <img
          src={image.link}
          key={index}
          className={image.class}
          onClick={() => handleImageClicked(index)}
        />
      ))}

      <div className={modalOpened ? "image-modal show" : "image-modal"}>
        <div className="upperPart">
          <IconButton onClick={() => setModalOpened(!modalOpened)}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className="middlePart">
          <IconButton className="backIcon" onClick={handleBackward}>
            <ArrowBackIosIcon />
          </IconButton>
          <img src={images[activeImage].link} />
          <IconButton className="forwardIcon" onClick={handleForward}>
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
        <div className="lowerPart">
          <p>{images[activeImage].caption}</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
