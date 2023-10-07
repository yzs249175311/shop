import { Route, Routes } from "react-router-dom";
import ShopPreview from "./Shop-preview.component";
import ShopCategory from "./shop-category.component";

export default function Shop() {
  return (
    <Routes>
      <Route index element={<ShopPreview />}></Route>
      <Route path=":category" element={<ShopCategory />}> </Route>
    </Routes>
  );
}
