
export default function AtomTable({
  header,
  body,
  ariaLabelText,
  isLoading,
}: any) {
  return (
    <table aria-label={ariaLabelText || "table"} className="w-full">
      <thead className="bg-gray-300">
        <tr>
          {header?.map((key: string, index: number) => (
            <th key={index} className="py-2" className="min-w-fit text-nowrap">
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body?body.map((item: any, index: number) => (
          <tr key={index}>
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
