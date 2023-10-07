import items from "../data/item-data.json";
import { Link } from "react-router-dom";

type ItemsType = {
  [K: string]: { id: number; name: string; age: number }[];
};

export default function ShopPreview() {
  return (
    <div>
      {Object.keys(items).map((key: string) => {
        return (
          <div className="border-2 shadow-md p-4 rounded-lg">
            <h2 className="mb-4">
              <Link to={key}>{key}</Link>
            </h2>
            {(items as ItemsType)[key]
              .filter((_, idx) => {
                return idx < 4;
              })
              .map((item) => {
                return (
                  <span className="border-2 rounded-md ml-4 border-red-400 px-4">
                    {item.id}-{item.name}-{item.age}
                  </span>
                );
              })}
          </div>
        );
      })}
    </div>
  );
}
