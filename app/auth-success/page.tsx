"use client";
import React, { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function AuthSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const token = searchParams.get("token");

    if (token) {
      Cookies.set("jwt", token, {
        expires: 7,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });

      router.push("/");
    } else {
      console.error("No authentication token found");

      router.push("/login");
    }
  }, [searchParams, router]);

  return null;
}
