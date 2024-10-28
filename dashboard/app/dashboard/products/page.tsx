import { listProducts } from "@/api/products";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { AddIcon, Icon } from "@/components/ui/icon";
import ProductListItem from "./ProductListItem";

export default async function ProductsPage() {
  const products = await listProducts();

  return (
    <div className="flex flex-row flex-wrap gap-4 max-w-[1400px] w-full">
      <Link
        href="/dashboard/products/create"
        className="flex flex-1 min-w-[300px]"
      >
        <Card className="w-full h-full p-5 flex items-center justify-center">
          <Icon as={AddIcon} className="w-10 h-10 color-slate-400" />
        </Card>
      </Link>

      {products.map((product: any) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </div>
  );
}
