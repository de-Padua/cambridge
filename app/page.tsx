'use client'
import Loader from "@/components/loader";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Home() {

  const route = useRouter()
  
  useEffect(()=>{
    route.push("/home")
  },[])


  return (
    <Loader />

  );
}
