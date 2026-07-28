import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

import {
  TableCell,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Student = {
  id: number;
  name: string;
  rollNo: string;
  status: "Present" | "Absent" | "Late";
};

type StudentRowProps = {
  student: Student;
  updateStatus: (
    id: number,
    status: "Present" | "Absent" | "Late"
  ) => void;
};

export default function StudentRow({
  student,
  updateStatus,
}: StudentRowProps) {
  return (
    <TableRow>
      <TableCell>{student.name}</TableCell>

      <TableCell>{student.rollNo}</TableCell>

      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
  <motion.div
    key={student.status}
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.2 }}
  >
    <Badge
      className={`cursor-pointer ${
        student.status === "Present"
          ? "bg-green-500 hover:bg-green-600"
          : student.status === "Absent"
          ? "bg-red-500 hover:bg-red-600"
          : "bg-yellow-400 text-black hover:bg-yellow-500"
      }`}
    >
      {student.status}
    </Badge>
  </motion.div>
</DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() =>
                updateStatus(student.id, "Present")
              }
            >
              Present
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() =>
                updateStatus(student.id, "Absent")
              }
            >
              Absent
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() =>
                updateStatus(student.id, "Late")
              }
            >
              Late
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}