import { ExecomMember, execomMembers } from "@/data/execom";

export async function getAllExecomMembers(): Promise<ExecomMember[]> {
  return execomMembers;
}

export async function getExecomMemberBySlug(
  slug: string
): Promise<ExecomMember | undefined> {
  return execomMembers.find((member) => member.slug === slug);
}