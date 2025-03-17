import { useParams } from "react-router-dom";
import FestivalGraphics from "./FestivalGraphics";
import FestivalReels from "./FestivalReels";
import BusinessGraphics from "./BusinessGraphics";
import BusinessReels from "./BusinessReels";

const CategoryPage = () => {
  const { type } = useParams(); // Get the dynamic "type" from URL

  return (
    <div>
      {type === "graphics" && <FestivalGraphics />}
      {type === "reels" && <FestivalReels />}
      {type === "business-graphics" && <BusinessGraphics />}
      {type === "business-reels" && <BusinessReels />}
      {!["graphics", "reels", "business-graphics", "business-reels"].includes(
        type
      ) && <h2>Page Not Found</h2>}
    </div>
  );
};

export default CategoryPage;
