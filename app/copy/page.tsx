"use client"
import { useState, useEffect } from "react";

export default function Page(){
  const [colors, setColors] = useState(Array(9).fill("bg-rose-500"));
  const [blueIndices, setBlueIndices] = useState<number[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [timestamps, setTimestamps] = useState<string[]>(Array(9).fill(""));
}