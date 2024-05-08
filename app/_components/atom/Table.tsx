import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

export default function AtomTable({
  header,
  body,
  ariaLabelText,
  isLoading,
}: any) {
  return (
    <Table removeWrapper aria-label={ariaLabelText || "table"}>
      <TableHeader>
        {header?.map((key: string, index: number) => (
          <TableColumn key={index} align="end">
            {key}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {body?.map((item: any, index: number) => (
          <TableRow key={index}>
            {header.map((key: string) => (
              <TableCell align="center" key={key}>
                {item[key]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
