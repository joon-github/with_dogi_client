"use client";
type HeadSize = "sm" | "md" | "lg";

interface Body {
  rowkey: string | number;
  [key: string]: string | React.ReactNode;
}

interface AtomTableProps {
  header: string[];
  body: Body[] | undefined;
  ariaLabelText?: string;
  rowKey?: number | string;
  headSize?: HeadSize;
  onRowClick?: (rowKey: string | number) => {};
}

export default function AtomTable({
  header,
  body,
  ariaLabelText,
  onRowClick,
  headSize = "md",
}: AtomTableProps) {
  const headSizeMap = {
    sm: "px-2 py-1",
    md: "px-4 py-4",
    lg: "px-6 py-6",
  };
  return (
    <table
      aria-label={ariaLabelText || "table"}
      className="w-full rounded-xl overflow-hidden"
    >
      <thead className="bg-gray-300">
        <tr>
          {header?.map((key: string, index: number) => (
            <th
              key={index}
              className={`min-w-fit text-nowrap border border-white ${headSizeMap[headSize]}`}
            >
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body ? (
          body.map((item: any) => (
            <tr
              key={item.rowkey}
              className="hover:bg-blue-50 cursor-default odd:bg-gray-50"
              onClick={() => {
                onRowClick && onRowClick(item.rowkey);
              }}
            >
              {header?.map((key: string) => (
                <td className="border" align="center" key={key}>
                  {item[key]}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={header.length} className="text-center">
              loading...
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
