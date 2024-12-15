"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadcrumbDashboard = () => {
  const pathname = usePathname();
  const router = useRouter();

  const pathSegments = pathname
    .split("/")
    .filter((segment) => segment)
    .slice(1);

  const transformSegment = (segment: string) => {
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathSegments.length > 0 ? (
          pathSegments.map((segment, index) => {
            const href = "/app/" + pathSegments.slice(0, index + 1).join("/");
            const displayText = transformSegment(segment);

            return (
              <React.Fragment key={index}>
                {index > 0 && <BreadcrumbSeparator />}
                <BreadcrumbItem>
                  {index !== pathSegments.length - 1 ? (
                    <BreadcrumbLink
                      href={href}
                      onClick={(e) => {
                        e.preventDefault();
                        router.push(href);
                      }}
                    >
                      {displayText}
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{displayText}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            );
          })
        ) : (
          <BreadcrumbPage>Dashboard</BreadcrumbPage>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbDashboard;
