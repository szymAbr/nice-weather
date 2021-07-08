import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTimePeriod } from "../state";
import { Container, DropdownButton, Dropdown } from "react-bootstrap";
import type { RootState } from "../state/store";

export default function TimeSelector() {
  const [timeOption, setTimeOption] = useState(0);
  const time = useSelector((state: RootState) => state.time.time);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTimePeriod(timeOption));
  }, [timeOption]);

  return (
    <Container>
      <DropdownButton title="Select time period" variant="secondary">
        <Dropdown.Item onClick={() => setTimeOption(6)}>6 hours</Dropdown.Item>
        <Dropdown.Item onClick={() => setTimeOption(15)}>
          15 hours
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setTimeOption(24)}>
          24 hours
        </Dropdown.Item>
      </DropdownButton>
      {time ? <h6 className="mt-2">{time}-hour forecast selected</h6> : null}
    </Container>
  );
}
