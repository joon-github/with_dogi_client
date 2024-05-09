"use client"
interface Body{
  [key:string]: string|React.ReactNode;
}

interface AtomTableProps {
  header: string[];
  body: Body[] | undefined;
  ariaLabelText?: string;
  rowKey?:number|string
  onRowClick?:(rowKey:string|number)=>{}
}

export default function AtomTable({
  header,
  body,
  ariaLabelText,
  onRowClick,
}: AtomTableProps) {
  console.log("body",body)
  return (
    <table aria-label={ariaLabelText || "table"} className="w-full">
      <thead className="bg-gray-300">
        <tr>
          {header?.map((key: string, index: number) => (
            <th key={index} className="min-w-fit text-nowrap py-2 px-4">
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body?body.map((item: any) => (
          <tr key={item.rowkey} onClick={()=>{onRowClick(item.rowkey)}}>
            {header?.map((key: string) => (
              <td align="center" key={key}>
                {item[key]}
              </td>
            ))}
          </tr>
        )):
        <tr><td colSpan={header.length} className="text-center">loading...</td></tr>
        }
      </tbody>
    </table>
  );
}
