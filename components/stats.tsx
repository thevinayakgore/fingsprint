import React from "react";
import { Label } from "./ui/label";
import HistoryCard from "./history";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { FiClock } from "react-icons/fi";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { BsArrowRepeat } from "react-icons/bs";

type TestResult = {
  wpm: number;
  accuracy: number;
  time: number;
  date: string;
};

interface StatsCardProps {
  time: string;
  wpm: number;
  accuracy: number;
  onRestart: () => void;
  onToggleHistory: () => void;
  showHistory: boolean;
  history: TestResult[];
  formatDate: (dateString: string) => string;
  formatTime: (seconds: number) => string;
}

export default function Stats({
  time,
  wpm,
  accuracy,
  onRestart,
  history,
  formatDate,
  formatTime,
}: StatsCardProps) {
  return (
    <Card className="md:col-span-1 md:max-h-[55rem]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FiClock className="text-primary" /> Your Stats
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>Time Elasped</Label>
          <div className="text-2xl font-mono">{time}</div>
        </div>
        <div>
          <Label>Words Per Minute</Label>
          <div className="text-2xl font-mono">{wpm}</div>
        </div>
        <div>
          <Label>Accuracy</Label>
          <div className="flex items-center gap-2">
            <Progress value={accuracy} className="h-2" />
            <span className="text-2xl font-mono">{accuracy}%</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 h-full">
        <Button onClick={onRestart} className="p-6! text-base w-full">
          <BsArrowRepeat className="size-5 stroke-[0.5px]" />
          Restart Test Again
        </Button>
        <h1 className="text-start font-medium text-lg md:text-xl pb-2 mb-2 border-b w-full">
          History of Test
        </h1>
        {/* History Cards */}
        <HistoryCard
          history={history}
          formatDate={formatDate}
          formatTime={formatTime}
        />
      </CardFooter>
    </Card>
  );
}
