import axios from "axios";
import client from '@/db/index';

async function getUserDetails() {
  try {
    const details = await client.user.findFirst();
    return {
      name: details?.username,
      password: details?.password
    }
  } catch(err) {
    console.log(err);
    return null;
  }
}

export default async function Home() {
  const userDetails = await getUserDetails();
  return (<div className="flex flex-col h-screen justify-center">
    <div className="flex justify-center">
      <div className="border p-8 rounded">
        <div>
          Name: {userDetails?.name}
        </div>
        {userDetails?.password}
      </div>
    </div>
  </div>
  );
}
