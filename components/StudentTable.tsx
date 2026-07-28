"use client";

import { useState } from "react";
import { students as initialStudents } from "@/data/students";
import { Badge } from "@/components/ui/badge";
import StudentRow from "./StudentRow";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function StudentTable() {
  // State
  const [students, setStudents] = useState(initialStudents);

  // Update attendance
  const updateStatus = (
    id: number,
    newStatus: "Present" | "Absent" | "Late"
  ) => {
    const updatedStudents = students.map((student) => {
      if (student.id === id) {
        return {
          ...student,
          status: newStatus,
        };
      }

      return student;
    });

    setStudents(updatedStudents);
  };

  // Summary counts
  const presentCount = students.filter(
    (student) => student.status === "Present"
  ).length;

  const absentCount = students.filter(
    (student) => student.status === "Absent"
  ).length;

  const lateCount = students.filter(
    (student) => student.status === "Late"
  ).length;

  return (
    <>
      <div className="flex gap-4 mb-6">
        <Badge className="bg-green-500">
          Present: {presentCount} Students
        </Badge>

        <Badge className="bg-red-500">
          Absent: {absentCount} Students
        </Badge>

        <Badge className="bg-yellow-400 text-black">
          Late: {lateCount} Students
        </Badge>
      </div>

      <div className="overflow-x-auto rounded-lg border">
  <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Roll No</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {students.map((student) => (
            <StudentRow
              key={student.id}
              student={student}
              updateStatus={updateStatus}
            />
          ))}
        </TableBody>
      </Table>
      </div>
    </>
  );
}