"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthPosts } from "../types/AuthPosts";
import EditPost from "./EditPost";
const fetchAuthPosts = async () => {
  const response = await axios.get("/api/posts/authPosts");
  return response.data;
};

export default function MyPosts() {
  const { data, isLoading } = useQuery<AuthPosts>(["auth-posts"], fetchAuthPosts);
if(isLoading) return <h1>Posts are loading...</h1>
console.log(data);
  return (
    <div>
  
     {data?.posts?.map((post)=> <EditPost id={post.id} key/>)}
       
    </div>
  );
}



//https://railway.app/project/9ff214ef-e56d-45ea-b7f6-90a501718c0e/plugin/5c329a3d-dcf9-4698-95d6-0159d320cff9/data?state=table&table=Post

//https://www.youtube.com/watch?v=4xduSsxa5Os&t=1995s

//https://console.cloud.google.com/apis/credentials/oauthclient/255752156471-5tu0tafa6tph665aq81lb99hndgsdfhn.apps.googleusercontent.com?project=fullstack-react-382411