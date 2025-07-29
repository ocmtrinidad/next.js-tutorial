// Parallel Routing for displaying components at the same time
// Allows independent route handling and sub-navigating
// Slots do not affect url
// Automatic. No need to import
// users, revenue, notifications, and login slots are props from folders with @ names

const ComplexDashboardLayout = ({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) => {
  const isLoggedIn = true;
  if (isLoggedIn) {
    return (
      <div>
        <div>{children}</div>
        <div>
          <div>
            <div>{users}</div>
            <div>{revenue}</div>
          </div>
          <div>{notifications}</div>
        </div>
      </div>
    );
  } else {
    return login;
  }
};

export default ComplexDashboardLayout;
