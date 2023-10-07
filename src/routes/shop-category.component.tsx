import { useParams, Navigate } from "react-router-dom";

import items from "../data/item-data.json";

type ItemsType = {
  [K: string]: { id: number; name: string; age: number }[];
};

export default function ShopCategory() {
  let { category } = useParams<{ category: string }>();

  return (
    <div>
      <h2>{category}</h2>
      {(items as ItemsType)[category!] ? (
        (items as ItemsType)[category!].map((item) => {
          return (
            <div>
              {item.id}-{item.name}-{item.age}
            </div>
          );
        })
      ) : (
        <Navigate to="/" replace={true} />
      )}
    </div>
  );
}
