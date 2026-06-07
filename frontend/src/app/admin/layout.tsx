import { ReactNode } from "react";

import {
  AdminLayoutWrapper,
} from "@/components/admin/admin-layout-wrapper";

interface Props {
  children: ReactNode;
}

export default function AdminLayout({
  children,
}: Props) {
  return (
    <AdminLayoutWrapper>
      {children}
    </AdminLayoutWrapper>
  );
}