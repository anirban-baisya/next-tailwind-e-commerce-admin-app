import { BanknotesIcon, ListBulletIcon, RectangleGroupIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { Avatar, Box, Card, Typography } from "@mui/material";
import BarChart from "components/layout/dashboard/BarChart";
import LineChart from "components/layout/dashboard/LineChart";
import { NextPage } from "next";


const homeCardInfo = [
  {
    "id": 1,
    "title": "Total Products",
    "value": 299,
    "icon": <RectangleGroupIcon className="h-6 w-6 text-gray-500" />
  },
  {
    "id": 2,
    "title": "Total User",
    "value": 245,
    "icon": <UserGroupIcon className="h-6 w-6 text-gray-500" />
  },
  {
    "id": 3,
    "title": "Total Sales",
    "value": 499829,
    "icon": <BanknotesIcon className="h-6 w-6 text-gray-500" />

  },
  {
    "id": 4,
    "title": "Total Catgories",
    "value": 300,
    "icon": <ListBulletIcon className="h-6 w-6 text-gray-500" />

  },
]
const HomePage: NextPage = () => {
  return (
    <>


      <div className="px-6 flex flex-col space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {homeCardInfo?.map((item) => (
            <Card key={item.id} sx={{ borderRadius: '3', width: 245, marginTop: 5 }}>
              <Box
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <Avatar
                    sx={{ bgcolor: 'greenyellow', width: 60, height: 60, mr: 2 }}
                  >
                    {item.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="body1" color="text.secondary">
                      {item.title}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {item.value}
                    </Typography>
                  </Box>
                </Box>
                
              </Box>
            </Card>

          ))}

        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          <div className="lg:col-span-3 space-y-4">
            <LineChart />
          </div>

          <div className="lg:col-span-2">
            <BarChart />
          </div>
        </div>


      </div>

    </>
  );
};

export default HomePage;
