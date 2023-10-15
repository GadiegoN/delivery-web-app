import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ClockIcon } from "@radix-ui/react-icons"
import { cn } from "./lib/utils"
import { categories } from "./lib/data"
import { Item } from "./components/item"

export function App() {
  const [open, setOpen] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState(1);

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  return (
    <>
      <div className="absolute -z-10 top-0 left-0 right-0 h-28 bg-yellow-200"></div>

      <header className="w-11/12 max-w-4xl my-0 mx-auto mt-5">
        <div className="bg-white rounded-3xl py-7 px-5 text-lg shadow-lg border-none">
          <div className="flex">
            <img src="https://github.com/gadiegon.png" alt="" className="h-16 w-16 rounded-lg" />
            <div className="flex-1 flex flex-col justify-center ml-5">
              <h1 className="text-lg text-slate-900 font-bold mb-1">Pizzaria GadiegoN</h1>
              <div className="flex justify-between items-center">
                { open ?
                  <div className="flex items-center text-sm mb-0 text-green-600">
                    <ClockIcon /> <p> Aberto</p>
                  </div> :
                  <div  className="flex items-center text-sm mb-0 text-red-600">
                    <ClockIcon /> <p> Fechado</p>
                  </div>
                }
                <Button variant="link" className="font-bold text-xl">Ver mais</Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="w-full flex space-x-4 px-2">
          <nav className="flex items-center space-x-4 lg:space-x-6 py-4 justify-center w-full">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={cn(selectedCategory == category.id ? 'bg-primary' : 'bg-secondary')} 
              >{category.value[0].toUpperCase() + category.value.slice(1)}</Button>
            ))}
          </nav>
        </div>

        <div className="flex flex-col space-y-5 w-full items-center py-10">
          {categories.map((name) => {
            if(name.id == selectedCategory){
              return (
                <div key={name.id} className="w-full border-b-2 border-primary">
                    <p className="font-bold text-2xl ml-10">{name.value[0].toUpperCase() + name.value.slice(1)}</p>
                </div>
              )
            }
          })}

          {categories.map((category) => {
            if(category.id == selectedCategory) {
              return(
                category.product.map((item) => (
                  <div key={item.id} className="w-9/12">
                    <Item 
                      products={{
                        id: item.id,
                        img: item.img,
                        name: item.name,
                        dsc: item.dsc,
                        price: item.price
                      }} 
                    />
                  </div>
                ))
              )
            }
          })}

          {selectedCategory == 0 && (
            <p>Selecione uma categoria</p>
            )
          }
        </div>
      </main>
    </>
  )
}