import Card from "@/app/components/card";
import Link from "next/link";

// @foldername for creating slots that can be used in layout.tsx for parallel routes
const Notifications = () => {
  return (
    <Card>
      <div>Notifications</div>
      <div>
        <Link href={"/complex-dashboard/archived"}>Archived</Link>
      </div>
    </Card>
  );
};

export default Notifications;
