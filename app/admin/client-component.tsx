"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  Avatar,
  Card,
  CardHeader,
  CardBody,
} from "@heroui/react";

// Add a type for the item
interface DataItem {
  id: string;
  nombre?: string;
  email?: string;
  avatar?: string;
  role?: string;
  team?: string;
  status?: string;
  [key: string]: any;
}

// Update the statusColorMap type with specific color values
type ChipColor = "success" | "danger" | "warning" | "default" | "primary" | "secondary";
const statusColorMap: Record<string, ChipColor> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

// Iconos para las acciones
const EyeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" fill="none" height="1em" role="presentation" viewBox="0 0 20 20" width="1em" {...props}>
    <path
      d="M12.9833 10C12.9833 11.65 11.65 12.9833 10 12.9833C8.35 12.9833 7.01666 11.65 7.01666 10C7.01666 8.35 8.35 7.01666 10 7.01666C11.65 7.01666 12.9833 8.35 12.9833 10Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M9.99999 16.8916C12.9417 16.8916 15.6833 15.1583 17.5917 12.1583C18.3417 10.9833 18.3417 9.00831 17.5917 7.83331C15.6833 4.83331 12.9417 3.09998 9.99999 3.09998C7.05833 3.09998 4.31666 4.83331 2.40833 7.83331C1.65833 9.00831 1.65833 10.9833 2.40833 12.1583C4.31666 15.1583 7.05833 16.8916 9.99999 16.8916Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

const DeleteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" fill="none" height="1em" role="presentation" viewBox="0 0 20 20" width="1em" {...props}>
    <path
      d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M8.60834 13.75H11.3833"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M7.91669 10.4167H12.0834"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

const EditIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" fill="none" height="1em" role="presentation" viewBox="0 0 20 20" width="1em" {...props}>
    <path
      d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
    <path
      d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
    <path
      d="M2.5 18.3333H17.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
  </svg>
);

export default function AdminPage({ students, elders, admins, matches }: { 
  students: any[]; 
  elders: any[]; 
  admins?: any[];
  matches?: any[];
}) {
  const renderCell = React.useCallback((item: DataItem, columnKey: string) => {
    const cellValue = item[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User avatarProps={{ radius: "lg", src: item.avatar }} description={item.email} name={cellValue}>
            {item.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{item.team}</p>
          </div>
        );
      case "status":
        return (
          <Chip 
            className="capitalize" 
            color={item.status && statusColorMap[item.status] ? statusColorMap[item.status] : "default"} 
            size="sm" 
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-conest-blue cursor-pointer active:opacity-50 hover:text-conest-mediumBlue">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-conest-blue cursor-pointer active:opacity-50 hover:text-conest-mediumBlue">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-red-500 cursor-pointer active:opacity-50 hover:text-red-600">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  // Fix the profile photo display issue by checking for proper URL format
  const getValidImageUrl = (url: string | null | undefined): string | undefined => {
    if (!url) return undefined;
    // Check if URL is valid (has http/https or starts with data:)
    if (url.startsWith('http') || url.startsWith('data:')) {
      return url;
    }
    // If URL is just a path, prepend with base URL if needed
    return url;
  };

  return (
    <div className="flex-1 w-full flex flex-col gap-12 p-8 bg-gradient-to-br from-conest-lightBlue/10 to-white">
      <h1 className="text-3xl font-bold text-conest-darkGray">Admin Dashboard</h1>

      {/* Lista de Estudiantes */}
      <Card className="shadow-soft border-none">
        <CardHeader className="flex justify-between items-center bg-gradient-to-r from-conest-blue to-conest-mediumBlue">
          <h2 className="text-xl font-bold text-white">Students List</h2>
        </CardHeader>
        <CardBody>
          <Table 
            aria-label="Students List"
            classNames={{
              base: "min-h-[400px]",
              table: "min-w-full",
              th: "bg-conest-lightBlue/20 text-conest-darkGray font-semibold",
              td: "text-conest-darkGray"
            }}
          >
            <TableHeader>
              <TableColumn>Profile Photo</TableColumn>
              <TableColumn>University</TableColumn>
              <TableColumn>Course</TableColumn>
              <TableColumn>Birth Date</TableColumn>
              <TableColumn>Interests</TableColumn>
              <TableColumn>Status</TableColumn>
            </TableHeader>
            <TableBody>
              {students.map((s) => (
                <TableRow key={s.id} className="hover:bg-conest-lightBlue/5 transition-colors">
                  <TableCell>
                    {s.profile_photo ? (
                      <img 
                        src={getValidImageUrl(s.profile_photo)} 
                        alt="Profile" 
                        className="w-10 h-10 rounded-full object-cover border-2 border-conest-blue/20" 
                      />
                    ) : (
                      <div className="text-conest-blue/70">No photo</div>
                    )}
                  </TableCell>
                  <TableCell>{s.university}</TableCell>
                  <TableCell>{s.course}</TableCell>
                  <TableCell>{s.birth_date ? new Date(s.birth_date).toLocaleDateString() : 'N/A'}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {s.interests?.map((interest: string, i: number) => (
                        <Chip 
                          key={i} 
                          size="sm" 
                          className="bg-conest-lightBlue/20 text-conest-darkGray"
                        >
                          {interest}
                        </Chip>
                      )) || "None"}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Chip 
                      className="capitalize" 
                      color={s.status === 'active' ? 'success' : s.status === 'pending' ? 'warning' : 'default'}
                      size="sm" 
                      variant="flat"
                    >
                      {s.status || "Unknown"}
                    </Chip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>

      {/* Lista de Ancianos */}
      <Card className="shadow-soft border-none">
        <CardHeader className="flex justify-between items-center bg-gradient-to-r from-conest-blue to-conest-mediumBlue">
          <h2 className="text-xl font-bold text-white">Elders List</h2>
        </CardHeader>
        <CardBody>
          <Table 
            aria-label="Elders List"
            classNames={{
              base: "min-h-[400px]",
              table: "min-w-full",
              th: "bg-conest-lightBlue/20 text-conest-darkGray font-semibold",
              td: "text-conest-darkGray"
            }}
          >
            <TableHeader>
              <TableColumn>Profile Photo</TableColumn>
              <TableColumn>Address</TableColumn>
              <TableColumn>Monthly Rent</TableColumn>
              <TableColumn>Interests</TableColumn>
              <TableColumn>Apartment Photos</TableColumn>
              <TableColumn>Status</TableColumn>
            </TableHeader>
            <TableBody>
              {elders.map((e) => (
                <TableRow key={e.id} className="hover:bg-conest-lightBlue/5 transition-colors">
                  <TableCell>
                    {e.profile_photo ? (
                      <img 
                        src={getValidImageUrl(e.profile_photo)} 
                        alt="Profile" 
                        className="w-10 h-10 rounded-full object-cover border-2 border-conest-blue/20" 
                      />
                    ) : (
                      <div className="text-conest-blue/70">No photo</div>
                    )}
                  </TableCell>
                  <TableCell>{e.apartment_address}</TableCell>
                  <TableCell>
                    <span className="font-medium text-conest-blue">€{e.monthly_rent}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {e.interests?.map((interest: string, i: number) => (
                        <Chip 
                          key={i} 
                          size="sm" 
                          className="bg-conest-lightBlue/20 text-conest-darkGray"
                        >
                          {interest}
                        </Chip>
                      )) || "None"}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {e.apartment_photos?.length
                        ? e.apartment_photos.map((photo: string, idx: number) => (
                            <div key={idx} className="relative group">
                              <img 
                                src={photo} 
                                alt="Apartment" 
                                className="w-12 h-12 rounded-md object-cover border-2 border-conest-blue/20 transition-transform hover:scale-105" 
                              />
                            </div>
                          ))
                        : <div className="text-conest-blue/70">No photos</div>}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Chip 
                      className="capitalize" 
                      color={e.status === 'active' ? 'success' : e.status === 'pending' ? 'warning' : 'default'}
                      size="sm" 
                      variant="flat"
                    >
                      {e.status || "Unknown"}
                    </Chip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>

      {/* Lista de Matches */}
      {matches && matches.length > 0 && (
        <Card className="shadow-soft border-none">
          <CardHeader className="flex justify-between items-center bg-gradient-to-r from-conest-blue to-conest-mediumBlue">
            <h2 className="text-xl font-bold text-white">Matches</h2>
          </CardHeader>
          <CardBody>
            <Table 
              aria-label="Matches List"
              classNames={{
                base: "min-h-[400px]",
                table: "min-w-full",
                th: "bg-conest-lightBlue/20 text-conest-darkGray font-semibold",
                td: "text-conest-darkGray"
              }}
            >
              <TableHeader>
                <TableColumn>Student</TableColumn>
                <TableColumn>Elder</TableColumn>
                <TableColumn>Start Date</TableColumn>
                <TableColumn>Status</TableColumn>
              </TableHeader>
              <TableBody>
                {matches.map((m) => {
                  const student = students.find(s => s.id === m.student_id);
                  const elder = elders.find(e => e.id === m.elder_id);
                  
                  return (
                    <TableRow key={m.id} className="hover:bg-conest-lightBlue/5 transition-colors">
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {student?.profile_photo ? (
                            <img 
                              src={getValidImageUrl(student.profile_photo)} 
                              alt="Profile" 
                              className="w-8 h-8 rounded-full object-cover border-2 border-conest-blue/20" 
                            />
                          ) : null}
                          <span>{student?.nombre || m.student_id}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {elder?.profile_photo ? (
                            <img 
                              src={getValidImageUrl(elder.profile_photo)} 
                              alt="Profile" 
                              className="w-8 h-8 rounded-full object-cover border-2 border-conest-blue/20" 
                            />
                          ) : null}
                          <span>{elder?.nombre || m.elder_id}</span>
                        </div>
                      </TableCell>
                      <TableCell>{m.start_date ? new Date(m.start_date).toLocaleDateString() : 'N/A'}</TableCell>
                      <TableCell>
                        <Chip 
                          className="capitalize" 
                          color={m.status === 'active' ? 'success' : m.status === 'pending' ? 'warning' : m.status === 'completed' ? 'primary' : 'default'}
                          size="sm" 
                          variant="flat"
                        >
                          {m.status || "Unknown"}
                        </Chip>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      )}
    </div>
  );
}
