"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

function Button({ filter, handleFilter, active, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === active ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      <Button filter="all" handleFilter={handleFilter} active={activeFilter}>
        All cabins
      </Button>

      <Button filter="small" handleFilter={handleFilter} active={activeFilter}>
        1&mdash;3 guests
      </Button>

      <Button filter="medium" handleFilter={handleFilter} active={activeFilter}>
        4&mdash;7 guests
      </Button>

      <Button filter="large" handleFilter={handleFilter} active={activeFilter}>
        8&mdash;12 guests
      </Button>
    </div>
  );
}

export default Filter;
