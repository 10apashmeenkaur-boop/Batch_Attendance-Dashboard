"use client";

import { motion } from "framer-motion";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Badge } from "@/components/ui/badge";

import {
  TableCell,
  TableRow,
} from "@/components/ui/table";

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
    <motion.tr
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.25 }}
      className="border-b"
    >
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
                className={`cursor-pointer px-3 py-1 ${
                  student.status === "Present"
                    ? "bg-emerald-500 hover:bg-emerald-600"
                    : student.status === "Absent"
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-amber-400 text-black hover:bg-amber-500"
                }`}
              >
                {student.status}
              </Badge>
            </motion.div>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() => updateStatus(student.id, "Present")}
            >
              Present
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => updateStatus(student.id, "Absent")}
            >
              Absent
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => updateStatus(student.id, "Late")}
            >
              Late
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </motion.tr>
  );
}