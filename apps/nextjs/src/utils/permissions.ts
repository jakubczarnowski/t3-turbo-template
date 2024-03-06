import { Roles } from "@prisma/client";
import { api } from "~/trpc/server";

export type UserRole = keyof typeof Roles;

export const userRoles = Object.keys(Roles) as unknown as UserRole;

export const hasRequiredRole = async (
  organisationSlug: string,
  requiredRole: UserRole[],
) => {
  const memberData = await api.auth.getMemberProfile.query({
    organisationSlug,
  });

  return requiredRole.includes(memberData.role);
};
