import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface HallCardProps {
  imageUrl: string;
  name: string;
  price: string;
  description: string;
}
export function HallCard(props: HallCardProps) {
  return (
    <Card>
      <div
        className="min-h-[416px] bg-gray-300 bg-cover"
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      ></div>
      <CardHeader className="px-0">
        <CardTitle>{props.name}</CardTitle>
        <div className="text-primaryColor">Price: {props.price}</div>
      </CardHeader>
      <CardContent className="px-0">
        <CardDescription>{props.description}</CardDescription>
      </CardContent>
    </Card>
  );
}
