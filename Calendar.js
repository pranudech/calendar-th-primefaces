import React, { useState } from "react";
import { Calendar } from "./lib/calendar/Calendar";
import { NullString } from "./lib/NullUtil";

export const Calendars = ({
    id, name,
    onChange, value, yearRange = "2019:2030", maxDate = null
    , minDate = null, showTime, showSeconds = false,
    view = undefined,
    dateFormat = "dd/mm/yy", disabled = false, inputClassName, className, placeholder, baseZIndex

}) => {

    const [alert, setAlert] = useState(null);

    const onValidateDate = (e) => {

        if (e && NullString(e.value) !== "") {

            let check = true, val = ""
            if (NullString(minDate) !== "") {
                check = ((e.value - minDate) >= 0)
                val = minDate
            }

            if (NullString(maxDate) !== "") {
                check = ((maxDate - e.value) >= 0)
                val = maxDate
            }

            if (check) {
                onChange(e)
            } else {

                let event = {
                    target: {
                        id,
                        value: val
                    }
                }
                onChange(event)
                alert('ระบุช่วงวันที่ไม่ถูกต้อง !')
            }
        } else {
            onChange(e)
        }
    }

    return (
        <>
            <Calendar
                id={id}
                name={name}
                {...view ? { view } : ""}
                inputClassName={inputClassName}
                className={className}
                onChange={onValidateDate}
                value={value || null}
                yearRange={yearRange}
                dateFormat={dateFormat}
                showIcon={true}
                showTime={showTime}
                locale="th"
                showButtonBar
                monthNavigator
                yearNavigator
                appendTo={document.body}
                baseZIndex={baseZIndex}
                maxDate={maxDate}
                minDate={minDate}
                showSeconds={showSeconds}
                disabled={disabled}
                placeholder={placeholder}
            />
        </>

    );
};
