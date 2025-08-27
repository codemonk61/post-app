import Button from "../Button/Button";
import Card from "../card/Card";
import type { PostPropsType } from "./types";

const Post: React.FC<PostPropsType> = ({ description, imageUrl, title }) => {
  return (
    <Card className="p-4 rounded-2xl shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="w-full h-48 overflow-hidden rounded-xl mb-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Title */}
      <h4 className="text-xl font-semibold text-gray-800 mb-2">{title}</h4>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>

      {/* Actions */}
      <div className="flex gap-3">
        <Button
          cta="Like"
          onClick={() => {}}

        />
        <Button
          cta="Dislike"
          onClick={() => {}}
        />
      </div>
    </Card>
  );
};

export default Post;
