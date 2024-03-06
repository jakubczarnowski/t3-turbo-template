import { useParams } from "next/navigation";
import { api } from "~/trpc/react";
import { type UserRole } from "~/utils/permissions";

export const useHasRequiredRole = (requiredRole: UserRole[]) => {
  const { organisationSlug } = useParams() as {
    organisationSlug: string | undefined;
  };

  if (!organisationSlug)
    throw new Error(
      "Roles can only be checked within an organisation context.",
    );

  const { data } = api.auth.getMemberProfile.useQuery({
    organisationSlug,
  });

  return data && requiredRole.includes(data.role);
};
