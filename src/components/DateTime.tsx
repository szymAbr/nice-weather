import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

export default function DateTime({ dt }: any) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");

  const week = new Array(7);
  week[0] = "Sun";
  week[1] = "Mon";
  week[2] = "Tue";
  week[3] = "Wed";
  week[4] = "Thu";
  week[5] = "Fri";
  week[6] = "Sat";

  async function getNewDate() {
    const newDate = await new Date(dt);
    setDate(newDate.toLocaleDateString());
    setTime(newDate.toLocaleTimeString());
    setDayOfWeek(week[newDate.getDay()]);
  }

  useEffect(() => {
    getNewDate();
  }, [dt]);

  return (
    <span>
      <Card.Text>
        <i className="bi bi-calendar"></i> {date} ({dayOfWeek})
      </Card.Text>
      <Card.Text>
        <i className="bi bi-clock"></i> {time}
      </Card.Text>
    </span>
  );
}
