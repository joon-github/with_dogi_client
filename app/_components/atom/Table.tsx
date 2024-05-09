"use client";
interface Body {
  rowkey: string | number;
  [key: string]: string | React.ReactNode;
}

interface AtomTableProps {
  header: string[];
  body: Body[] | undefined;
  ariaLabelText?: string;
  rowKey?: number | string;
  onRowClick?: (rowKey: string | number) => {};
}

export default function AtomTable({
  header,
  body,
  ariaLabelText,
  onRowClick,
}: AtomTableProps) {
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
              className="min-w-fit text-nowrap py-4 px-4 border border-white"
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
