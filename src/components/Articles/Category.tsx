"use client";

type Category = {
  _id: string;
  name: string;
  icon?: React.ReactNode;
  count?: React.ReactNode;
};

export default function CategorySection({
  categories,
  selectedCategory,
  onSelectCategory,
}: {
  categories: Category[];
  selectedCategory: string; // "all" or category _id
  onSelectCategory: (value: string) => void;
}) {
  return (
  <div className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto text-center">

  {/* Heading */}
  <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-slate-900 dark:text-white">
    Popular Categories
  </h2>

  <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 mb-6 sm:mb-10">
    Explore articles by your interests
  </p>

  {/* CATEGORY PILLS */}
  <div
    className="
      flex flex-wrap sm:flex-nowrap
      justify-center sm:justify-start
      gap-2 sm:gap-3
      sm:overflow-x-auto scrollbar-hide
      py-1 sm:py-2
    "
  >
    {/* ALL */}
    <button
      onClick={() => onSelectCategory("all")}
      className={`
        flex items-center gap-2
        px-3 sm:px-5 py-1.5 sm:py-2
        rounded-full border
        text-xs sm:text-sm font-medium
        transition-all duration-200
        ${
          selectedCategory === "all"
            ? `
              /* ACTIVE */
              bg-blue-600 text-white border-blue-600
              dark:bg-[#252D45] dark:text-[#E9ECF4] dark:border-[#F5D061]
            `
            : `
              /* INACTIVE */
              bg-blue-50 text-blue-700 border-blue-200
              hover:bg-blue-100

              dark:bg-[#1E2538] dark:text-[#E9ECF4]
              dark:border-[#333C59]
              dark:hover:bg-[#252D45]
              dark:hover:border-[#F5D061]
            `
        }
      `}
    >
      All
    </button>

    {categories.map((cat) => {
      const value = cat._id;
      const isActive = selectedCategory === value;

      return (
        <button
          key={value}
          onClick={() => onSelectCategory(value)}
          className={`
            flex items-center gap-2
            px-3 sm:px-5 py-1.5 sm:py-2
            rounded-full border
            text-xs sm:text-sm font-medium
            transition-all duration-200
            ${
              isActive
                ? `
                  bg-blue-600 text-white border-blue-600
                  dark:bg-[#252D45] dark:text-[#E9ECF4] dark:border-[#F5D061]
                `
                : `
                  bg-blue-50 text-blue-700 border-blue-200
                  hover:bg-blue-100

                  dark:bg-[#1E2538] dark:text-[#E9ECF4]
                  dark:border-[#333C59]
                  dark:hover:bg-[#252D45]
                  dark:hover:border-[#F5D061]
                `
            }
          `}
        >
          {cat.icon && (
            <span className="text-blue-500 dark:text-[#F5D061] text-xs sm:text-sm">
              {cat.icon}
            </span>
          )}

          <span className="whitespace-nowrap">
            {cat.name}
          </span>

          {cat.count && (
            <span
              className="
                ml-1 px-1.5 sm:px-2 py-0.5
                rounded-full text-[10px] sm:text-[11px]
                bg-blue-100 text-blue-700 border border-blue-200

                dark:bg-[#2B3452]
                dark:text-[#D0D5E2]
                dark:border-[#3D4870]
              "
            >
              {cat.count}
            </span>
          )}
        </button>
      );
    })}
  </div>
</div>

  );
}
