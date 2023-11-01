import { Button, Tooltip } from "@mui/material";
import { useCallback, useMemo } from "react";

const timeList = [
    "8:00",
    "8:15",
    "8:30",
    "8:45",
    "9:00",
    "9:15",
    "9:30",
    "9:45",
    "10:00",
    "10:15",
    "10:30",
    "10:45",
    "11:00",
    "11:15",
    "11:30",
    "11:45",
    "12:00",
    "12:15",
    "12:30",
    "12:45",
    "13:00",
    "13:15",
    "13:30",
    "13:45",
    "14:00",
    "14:15",
    "14:30",
    "14:45",
    "15:00",
    "15:15",
    "15:30",
    "15:45",
    "16:00",
    "16:15",
    "16:30",
    "16:45",
    "17:00",
    "17:15",
    "17:30",
    "17:45",
    "18:00",
    "18:15",
    "18:30",
    "18:45",
    "19:00",
    "19:15",
    "19:30",
    "19:45",
    "20:00",
    "20:15",
    "20:30",
    "20:45",
    "21:00",
    "21:15",
    "21:30",
    "21:45",
];

export function TimeBox({
    index,
    defaultAvailability,
    updatedAvailability,
    setAvailabilityByIndex,
}) {
    const handleClick = useCallback(() => {
        return setAvailabilityByIndex(index, !updatedAvailability);
    }, [updatedAvailability, setAvailabilityByIndex]);

    const time = useMemo(() => timeList[index], [index]);

    return (
        <>
            <Tooltip
                title={`${timeList[index]} — ${
                    index < 55 ? timeList[index + 1] : "22:00"
                }`}
                placement="bottom"
            >
                <Button
                    sx={{
                        height: "30px",
                        width: "30px",
                    }}
                    variant={updatedAvailability ? "outlined" : "contained"}
                    color={
                        updatedAvailability
                            ? "success"
                            : defaultAvailability
                            ? "info"
                            : "error"
                    }
                    onClick={handleClick}
                >
                    {time}
                </Button>
            </Tooltip>
        </>
    );
}
