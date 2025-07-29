import Card from "@/app/components/card";
import Link from "next/link";

// @foldername for creating slots that can be used in layout.tsx for parallel routes
const ArchivedNotifications = () => {
  return (
    <Card>
      <div>Archived Notifications</div>
      <div>
        <Link href={"/complex-dashboard"}>Default</Link>
      </div>
    </Card>
  );
};

export default ArchivedNotifications;
