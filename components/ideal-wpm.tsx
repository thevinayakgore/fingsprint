import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function IdealWPMCard() {
  return (
    <Card className="p-0! gap-0!">
      <CardHeader className="gap-0! p-5!">
        <CardTitle className="text-3xl leading-none">
          Try to catch Ideal WPM
        </CardTitle>
      </CardHeader>
      <CardContent className="gap-0! p-1.5!">
        <div className="space-y-2 p-5 bg-background border border-foreground/15 text-muted-foreground rounded-lg w-full">
          <ul className="text-base list-none">
            <li>
              <span className="font-medium text-foreground">
                Average Typist :
              </span>{" "}
              40 WPM
            </li>
            <li>
              <span className="font-medium text-foreground">
                Professional Typist :
              </span>{" "}
              65-75 WPM
            </li>
            <li>
              <span className="font-medium text-foreground">World Class :</span>{" "}
              100+ WPM
            </li>
          </ul>
          <p className="font-medium text-sm">
            WPM (Words Per Minute) is a standard metric for typing speed. Most
            people can improve their speed and accuracy with regular practice !
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
