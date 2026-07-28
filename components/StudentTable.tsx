"use client";

import { useState } from "react";
import { students as initialStudents } from "@/data/students";

import StudentRow from "./StudentRow";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { AnimatePresence } from "framer-motion";

export default function StudentTable() {
  // Student state
  const [students, setStudents] = useState(initialStudents);

  // Search state
  const [search, setSearch] = useState("");

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

  // Search filter
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Search */}
      <div className="mb-6">
        <Input
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
      </div>

      {/* Summary */}
      <div className="flex flex-wrap gap-4 mb-6">
        <Badge className="bg-emerald-500 px-4 py-2">
          Present: {presentCount}
        </Badge>

        <Badge className="bg-red-500 px-4 py-2">
          Absent: {absentCount}
        </Badge>

        <Badge className="bg-amber-400 text-black px-4 py-2">
          Late: {lateCount}
        </Badge>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Roll No</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <AnimatePresence mode="popLayout">
              {filteredStudents.map((student) => (
                <StudentRow
                  key={student.id}
                  student={student}
                  updateStatus={updateStatus}
                />
              ))}
            </AnimatePresence>
          </TableBody>
        </Table>
      </div>
    </>
  );
}