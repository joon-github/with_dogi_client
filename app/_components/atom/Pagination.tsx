interface Porps {
  total: number;
  count: number;
  setCurrentPage: (page: number) => void;
  currentPage: number;
}
export default function Pagination({
  total,
  count,
  currentPage,
  setCurrentPage,
}: Porps) {
  const totalPages = Math.ceil(total / count);
  return (
    <nav>
      <ul className="flex items-center justify-center gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
          return (
            <li
              key={page}
              className={`${
                page === currentPage
                  ? "bg-gray-200"
                  : "bg-white hover:bg-gray-200"
              } rounded-md px-3 py-1`}
            >
              <button onClick={() => setCurrentPage(page)}>{page}</button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
