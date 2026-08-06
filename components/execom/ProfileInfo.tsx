import type { ComponentType } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Mail, GraduationCap, Calendar, Users, Briefcase, Phone, User } from 'lucide-react';
import { ExecomMember } from '@/data/execom';

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 py-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" />
      <div>
        <p className="text-xs uppercase tracking-wide text-white/40">{label}</p>
        <p className="text-sm text-white">{value}</p>
      </div>
    </div>
  );
}

export default function ProfileInfo({ member }: { member: ExecomMember }) {
  return (
    <div className="mt-14 grid gap-6 md:grid-cols-2">
      <Card className="border-white/10 bg-white/[0.03] backdrop-blur-xl">
        <CardContent className="divide-y divide-white/5 p-6">
          <InfoRow icon={User} label="Full Name" value={member.fullName} />
          <InfoRow icon={Briefcase} label="Role" value={member.role} />
          <InfoRow icon={GraduationCap} label="Department" value={member.department} />
          <InfoRow icon={Calendar} label="Academic Year" value={member.academicYear} />
          <InfoRow icon={Users} label="Gender" value={member.gender} />
          <InfoRow icon={Mail} label="Email" value={member.email} />
          {member.phone && <InfoRow icon={Phone} label="Phone" value={member.phone} />}
        </CardContent>
      </Card>

      <Card className="border-white/10 bg-white/[0.03] backdrop-blur-xl">
        <CardContent className="p-6">
          <p className="text-xs uppercase tracking-wide text-white/40">Bio</p>
          <Separator className="my-3 bg-white/10" />
        </CardContent>
      </Card>
    </div>
  );
}