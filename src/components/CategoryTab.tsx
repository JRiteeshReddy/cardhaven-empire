
import React from "react";
import { cn } from "@/lib/utils";

type CategoryTabProps = {
  categories: { id: string; name: string }[];
  activeCategory: string | null;
  onSelectCategory: (category: string | null) => void;
};

const CategoryTab: React.FC<CategoryTabProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="relative overflow-x-auto pb-1">
      <div className="flex space-x-2 md:space-x-6">
        <button
          onClick={() => onSelectCategory(null)}
          className={cn(
            "relative px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200",
            activeCategory === null
              ? "text-primary"
              : "text-gray-600 hover:text-gray-900"
          )}
        >
          All Cards
          {activeCategory === null && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
          )}
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={cn(
              "relative px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200",
              activeCategory === category.id
                ? "text-primary"
                : "text-gray-600 hover:text-gray-900"
            )}
          >
            {category.name}
            {activeCategory === category.id && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTab;
