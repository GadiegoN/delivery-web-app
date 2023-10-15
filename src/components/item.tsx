import { useState } from "react"
import { Button } from "./ui/button"
import { PackagePlus } from "lucide-react"

interface ProductProps {
    products: {
        id: string
        img: string
        name: string
        dsc: string
        price: number
        quantity?: number
    }
}

export function Item({ products }: ProductProps) {
    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
        products.quantity = quantity + 1
      };
    
    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            products.quantity = quantity - 1
        }
    };

    return (
        <div key={products.id} className="flex w-full justify-around px-3 items-center ml-4 space-x-4 hover:bg-secondary cursor-pointer">
        <img src={products.img} width={100} height={100} />
        <div className="flex-1">
          <p className="text-black font-bold text-xl text-clip">{products.name}</p>
          <p className="text-slate-800font-medium">{products.dsc}</p>
          <p className="text-primary font-extrabold text-xl">R$ {products.price.toFixed(2).replace('.', ',')}</p>
        </div>
        <div className="flex items-center bg-secondary rounded-xl">
          <Button variant="default" onClick={() => decreaseQuantity()} className="h-6 w-6 m-2">-</Button>
            <p>{quantity}</p>
          <Button variant="default" onClick={() => increaseQuantity()} className="h-6 w-6 m-2">+</Button>
        </div>
        <div>
            <Button size="sm">
                <PackagePlus />
            </Button>
        </div>
      </div>
    )
}