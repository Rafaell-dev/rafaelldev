import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { OrganizationService } from "@/services/organization/organizationService";

import type {
  CreateOrganizationRequest,
  UpdateOrganizationRequest,
} from "@/types/entities/organization";

export function useOrganizations() {
  return useQuery({
    queryKey: ["organizations"],
    queryFn: OrganizationService.getAll,
  });
}

export function useOrganization(id: number) {
  return useQuery({
    queryKey: ["organization", id],
    queryFn: () => OrganizationService.getById(id),
    enabled: !!id,
  });
}

export function useCreateOrganization() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateOrganizationRequest) =>
      OrganizationService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["organizations"] });
    },
  });
}

export function useUpdateOrganization() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: number;
      data: UpdateOrganizationRequest;
    }) => OrganizationService.update(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ["organizations"] });
      queryClient.invalidateQueries({ queryKey: ["organization", id] });
    },
  });
}
