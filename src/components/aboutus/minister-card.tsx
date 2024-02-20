import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MinisterCardProps {
  name: string;
  position: string;
  phone: string;
  email: string;
  imageUrl: string;
}

export function MinisterCard(props: MinisterCardProps) {
  return (
    <Card>
      <div
        className="min-h-[256px] bg-gray-300 bg-cover rounded-md overflow-hidden"
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      ></div>
      <CardHeader className="px-0 pb-2">
        <span>{props.position}</span>
        <CardTitle className="text-gray-400">{props.name}</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <div className="block">Telephone</div>
        <div className="text-gray-400">{props.phone}</div>
        <div className="block">Email</div>
        <div className="text-gray-400">{props.email}</div>
      </CardContent>
    </Card>
  );
}
