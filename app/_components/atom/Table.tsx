
export default function AtomTable({
  header,
  body,
  ariaLabelText,
  isLoading,
}: any) {
  return (
    <table aria-label={ariaLabelText || "table"}>
      <thead>
        {header?.map((key: string, index: number) => (
          <th key={index}>
            {key}
          </th>
        ))}
      </thead>
      <tbody>
        {body?.map((item: any, index: number) => (
          <tr key={index}>
            {header.map((key: string) => (
              <td align="center" key={key}>
                {item[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
